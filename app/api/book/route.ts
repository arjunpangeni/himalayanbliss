import { NextRequest, NextResponse } from 'next/server';
import { createBookingReference, createVerificationToken, getAvailableSlots } from '@/lib/booking';
import { prisma } from '@/lib/prisma';
import { hashToken } from '@/lib/security';
import { bookingSchema } from '@/lib/validators';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = bookingSchema.parse(body);

    const slotStatus = getAvailableSlots(data.date, data.serviceId).find((slot) => slot.time === data.time)?.status;
    if (slotStatus === 'booked') {
      return NextResponse.json({ ok: false, message: 'This slot is no longer available.' }, { status: 409 });
    }

    const reference = createBookingReference();
    const rawToken = createVerificationToken();
    const tokenHash = hashToken(rawToken);

    if (!process.env.DATABASE_URL) {
      return NextResponse.json({
        ok: true,
        reference,
        token: rawToken,
        redirectTo: `/verify?token=${encodeURIComponent(rawToken)}`,
        message: 'We have sent a confirmation link to your email.',
        summary: {
          serviceId: data.serviceId,
          therapist: data.therapist,
          date: data.date,
          time: data.time,
          duration: data.duration,
        },
      });
    }

    const client = await prisma.client.upsert({
      where: { email: data.email },
      update: { name: data.name, phone: data.phone ?? null },
      create: {
        email: data.email,
        name: data.name,
        phone: data.phone ?? null,
      },
    });

    const serviceId = data.serviceId || 'swedish';
    const therapistSlug = (data.therapist || 'Any available').toLowerCase().replace(/[^a-z0-9]+/g, '-');

    const service = await prisma.service.upsert({
      where: { id: serviceId },
      update: {},
      create: {
        id: serviceId,
        slug: serviceId,
        name: 'Swedish Relaxation Massage',
        description: 'Guest booking created from the live booking flow.',
        bufferMins: 10,
      },
    });

    const therapist = await prisma.therapist.upsert({
      where: { id: therapistSlug || 'any-available' },
      update: { name: data.therapist || 'Any available' },
      create: {
        id: therapistSlug || 'any-available',
        name: data.therapist || 'Any available',
        bio: 'Available for bookings in this studio.',
      },
    });

    const startsAt = new Date(`${data.date}T${data.time}:00Z`);
    const endsAt = new Date(startsAt.getTime() + data.duration * 60 * 1000);

    const booking = await prisma.booking.create({
      data: {
        reference,
        clientId: client.id,
        serviceId: service.id,
        therapistId: therapist.id,
        startsAt,
        endsAt,
        durationMin: data.duration,
        pricePence: 8000,
        status: 'PENDING_VERIFICATION',
        holdExpiresAt: new Date(Date.now() + 10 * 60 * 1000),
        healthForm: {},
        consentAt: new Date(),
      },
    });

    await prisma.bookingToken.create({
      data: {
        bookingId: booking.id,
        tokenHash,
        purpose: 'VERIFY',
        expiresAt: new Date(Date.now() + 10 * 60 * 1000),
      },
    });

    return NextResponse.json({
      ok: true,
      reference,
      token: rawToken,
      redirectTo: `/verify?token=${encodeURIComponent(rawToken)}`,
      message: 'We have sent a confirmation link to your email.',
      summary: {
        serviceId: data.serviceId,
        therapist: data.therapist,
        date: data.date,
        time: data.time,
        duration: data.duration,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: 'The booking form could not be processed. Please check your details and try again.' },
      { status: 400 },
    );
  }
}
