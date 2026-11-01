import Link from 'next/link';

export default function ManageBookingPage({ params }: { params: { token: string } }) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-blue">Manage booking</p>
        <h1 className="mt-2 text-4xl font-semibold text-slate-900">Your appointment</h1>
        <div className="mt-8 rounded-2xl bg-slate-50 p-5 text-sm text-slate-700">
          <div className="flex justify-between gap-3 border-b border-slate-200 pb-3">
            <span>Reference</span>
            <span className="font-medium text-slate-900">MS-8F3K2</span>
          </div>
          <div className="mt-3 flex justify-between gap-3 border-b border-slate-200 pb-3">
            <span>Service</span>
            <span className="font-medium text-slate-900">Swedish Relaxation Massage</span>
          </div>
          <div className="mt-3 flex justify-between gap-3">
            <span>When</span>
            <span className="font-medium text-slate-900">Saturday 10:00</span>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button className="rounded-full border border-slate-300 bg-white px-5 py-2.5 font-medium text-slate-800">
            Reschedule
          </button>
          <button className="rounded-full bg-red-500 px-5 py-2.5 font-medium text-white">
            Cancel booking
          </button>
        </div>

        <p className="mt-6 text-sm text-slate-600">
          Secure token: <span className="font-mono">{params.token}</span>
        </p>

        <div className="mt-6">
          <Link href="/book" className="font-medium text-brand-deep">
            Book another session →
          </Link>
        </div>
      </div>
    </main>
  );
}
