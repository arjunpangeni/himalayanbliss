import { z } from 'zod';

export const bookingSchema = z.object({
  serviceId: z.string().min(1),
  therapist: z.string().min(1),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  time: z.string().regex(/^\d{2}:\d{2}$/),
  duration: z.coerce.number().min(30).max(120),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7).optional().or(z.literal('')),
});

export const tokenSchema = z.object({
  token: z.string().min(8),
});

export type BookingInput = z.infer<typeof bookingSchema>;
export type TokenInput = z.infer<typeof tokenSchema>;
