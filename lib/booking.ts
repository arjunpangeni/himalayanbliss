import { services } from '@/lib/site-data';

const bookingAlphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

export function createBookingReference() {
  const chars: string[] = [];

  for (let i = 0; i < 6; i += 1) {
    const index = Math.floor(Math.random() * bookingAlphabet.length);
    chars.push(bookingAlphabet[index]);
  }

  return `MS-${chars.join('')}`;
}

export function createVerificationToken() {
  return typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `demo-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function getAvailableSlots(date: string, serviceId?: string) {
  const service = services.find((item) => item.id === serviceId) ?? services[0];
  const slotTimes = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:30', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

  const bookedSet = new Set<string>();
  const dayNum = Number(date.split('-')[2] ?? '0');

  if (dayNum % 3 === 0) {
    bookedSet.add('10:30');
  }

  if (dayNum % 5 === 0) {
    bookedSet.add('15:00');
  }

  if (service.duration >= 90) {
    bookedSet.add('12:30');
  }

  return slotTimes.map((time) => ({
    time,
    status: bookedSet.has(time) ? 'booked' : 'available',
  }));
}
