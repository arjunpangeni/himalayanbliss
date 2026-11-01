import { testimonials } from '@/lib/site-data';

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-brand-background text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-blue">Reviews</p>
          <h1 className="mt-2 text-4xl font-semibold">A calming experience that clients return for</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((quote) => (
            <div key={quote} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
              <div className="mb-3 text-2xl text-amber-400">★★★★★</div>
              <p className="text-lg text-slate-700">“{quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
