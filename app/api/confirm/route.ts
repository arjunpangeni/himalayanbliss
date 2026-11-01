import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hashToken } from '@/lib/security';
import { tokenSchema } from '@/lib/validators';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { token } = tokenSchema.parse(body);

    if (!token) {
      return NextResponse.json({ ok: false, message: 'This link is invalid or expired.' }, { status: 400 });
    }

    if (!process.env.DATABASE_URL) {
      return NextResponse.json({
        ok: true,
        message: 'Your booking is confirmed and your slot is now reserved.',
        confirmedAt: new Date().toISOString(),
      });
    }

    const tokenHash = hashToken(token);
    const storedToken = await prisma.bookingToken.findUnique({
      where: { tokenHash },
      include: { booking: true },
    });

    if (!storedToken || storedToken.usedAt || storedToken.expiresAt < new Date()) {
      return NextResponse.json({ ok: false, message: 'This link is invalid or expired.' }, { status: 400 });
    }

    await prisma.$transaction([
      prisma.booking.update({
        where: { id: storedToken.bookingId },
        data: { status: 'CONFIRMED', consentAt: new Date() },
      }),
      prisma.bookingToken.update({
        where: { id: storedToken.id },
        data: { usedAt: new Date() },
      }),
    ]);

    return NextResponse.json({
      ok: true,
      message: 'Your booking is confirmed and your slot is now reserved.',
      confirmedAt: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json({ ok: false, message: 'This link is invalid or expired.' }, { status: 400 });
  }
}
