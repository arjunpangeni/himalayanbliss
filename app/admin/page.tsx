import { prisma } from '@/lib/prisma';

async function getDashboardStats() {
  if (!process.env.DATABASE_URL) {
    return {
      todays: 0,
      upcoming: 0,
      pending: 0,
      confirmed: 0,
    };
  }

  const [todays, upcoming, pending, confirmed] = await Promise.all([
    prisma.booking.count({ where: { startsAt: { gte: new Date(new Date().setHours(0, 0, 0, 0)), lte: new Date(new Date().setHours(23, 59, 59, 999)) } } }),
    prisma.booking.count({ where: { startsAt: { gte: new Date() } } }),
    prisma.booking.count({ where: { status: 'PENDING_VERIFICATION' } }),
    prisma.booking.count({ where: { status: 'CONFIRMED' } }),
  ]);

  return { todays, upcoming, pending, confirmed };
}

export default async function AdminPage() {
  const stats = await getDashboardStats();

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-semibold">Admin dashboard</h1>
        <p className="mt-3 text-slate-300">
          Bookings, pricing, and therapist schedules are ready for the production dashboard flow.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            { label: 'Today', value: stats.todays },
            { label: 'Upcoming', value: stats.upcoming },
            { label: 'Pending', value: stats.pending },
            { label: 'Confirmed', value: stats.confirmed },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm text-slate-400">{item.label}</p>
              <p className="mt-3 text-2xl font-semibold">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
