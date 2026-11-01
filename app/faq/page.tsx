import { faqs } from '@/lib/site-data';

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-brand-background text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-blue">FAQ</p>
          <h1 className="mt-2 text-4xl font-semibold">Questions answered</h1>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <h2 className="text-xl font-semibold text-slate-900">{item.question}</h2>
              <p className="mt-3 text-slate-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
