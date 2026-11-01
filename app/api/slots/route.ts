import { NextRequest, NextResponse } from 'next/server';
import { getAvailableSlots } from '@/lib/booking';

export async function GET(request: NextRequest) {
  const date = request.nextUrl.searchParams.get('date') ?? '2026-10-30';
  const serviceId = request.nextUrl.searchParams.get('serviceId') ?? 'swedish';

  return NextResponse.json({
    date,
    serviceId,
    slots: getAvailableSlots(date, serviceId),
  });
}
