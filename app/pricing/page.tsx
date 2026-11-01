import { pricingRows } from '@/lib/site-data';

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-brand-background text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-blue">Pricing</p>
          <h1 className="mt-2 text-4xl font-semibold">Transparent treatment pricing</h1>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-sm uppercase tracking-wide text-slate-600">
              <tr>
                <th className="p-4">Treatment</th>
                <th className="p-4">30 min</th>
                <th className="p-4">60 min</th>
                <th className="p-4">90 min</th>
              </tr>
            </thead>
            <tbody>
              {pricingRows.map((row) => (
                <tr key={`${row.treatment}-${row.minutes}`} className="border-t border-slate-200">
                  <td className="p-4 font-medium text-slate-800">{row.treatment}</td>
                  <td className="p-4 text-slate-700">{row.minutes === 30 ? row.price : '—'}</td>
                  <td className="p-4 text-slate-700">{row.minutes === 60 ? row.price : '—'}</td>
                  <td className="p-4 text-slate-700">{row.minutes === 90 ? row.price : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
