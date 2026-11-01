import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/site-data';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-brand-background text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-blue">Treatments</p>
          <h1 className="mt-2 text-4xl font-semibold">Massage treatments designed around you</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.id} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
              <div className="relative mb-5 h-40 overflow-hidden rounded-[1.5rem] bg-slate-100">
                <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <span className="rounded-full bg-sky-50 px-2.5 py-1 text-xs font-medium text-brand-deep">{service.tag}</span>
              <h2 className="mt-4 text-2xl font-semibold">{service.name}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-lg font-semibold text-brand-deep">From £{service.price}</span>
                <Link href="/book" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium">
                  Book
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
