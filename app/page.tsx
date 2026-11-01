import Link from 'next/link';
import Image from 'next/image';
import { faqs, services, testimonials } from '@/lib/site-data';

const reasons = [
  'Qualified therapists',
  'Tailored treatment plans',
  'Clean, calm studio',
  'Flexible online booking',
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand-background text-brand-text">
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col justify-center">
          <div className="mb-5 inline-flex w-fit items-center rounded-full border border-brand-blue/20 bg-white px-3 py-1 text-xs font-medium text-brand-deep shadow-sm">
            20% OFF this month
          </div>
          <h1 className="max-w-xl text-5xl font-semibold tracking-tight md:text-6xl">
            Breathe out. <span className="bg-signature-gradient bg-clip-text text-transparent">Feel renewed.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-slate-600">
            Professional massage therapy in London, tailored to you. Book online in under two minutes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/book" className="rounded-full bg-signature-gradient px-6 py-3 font-medium text-white shadow-soft">
              Book your massage
            </Link>
            <Link href="/services" className="rounded-full border border-slate-200 bg-white px-6 py-3 font-medium text-slate-700">
              Explore treatments
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-600">
            <span>Rated 5.0 on Google</span>
            <span>Fully qualified and insured</span>
            <span>Easy online booking</span>
          </div>
        </div>

        <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] border border-slate-200 shadow-soft">
          <Image
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=90"
            alt="A peaceful massage treatment in a softly lit spa"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent" />
          <div className="relative flex min-h-[460px] items-end p-8 sm:p-10">
            <div className="text-white">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-white/80">Himalaya London</p>
              <p className="mt-2 text-2xl font-semibold">Your pause starts here.</p>
              <p className="mt-2 text-sm text-white/85">60 minutes of care, shaped around you.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-blue">Treatments</p>
            <h2 className="mt-2 text-3xl font-semibold">Popular treatments</h2>
          </div>
          <Link href="/pricing" className="text-sm font-medium text-brand-deep">View pricing</Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <article key={service.id} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
              <div className="relative mb-5 h-40 overflow-hidden rounded-[1.5rem] bg-slate-100">
                <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-xl font-semibold">{service.name}</h3>
                <span className="rounded-full bg-sky-50 px-2.5 py-1 text-xs text-brand-deep">{service.duration} min</span>
              </div>
              <p className="text-sm leading-6 text-slate-600">{service.description}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-lg font-semibold text-brand-deep">£{service.price}</span>
                <Link href="/book" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium">
                  Book
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-blue">Why choose us</p>
            <h2 className="mt-2 text-3xl font-semibold">Feel cared for from the first breath to the last.</h2>
            <p className="mt-4 max-w-lg text-slate-600">
              At Himalaya London, we believe rest is not a luxury. We shape every session around your body, stress levels and goals.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-3 h-10 w-10 rounded-full bg-signature-gradient" />
                <p className="font-medium text-slate-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
          <h2 className="text-3xl font-semibold">Pricing</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-left">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-4">Treatment</th>
                  <th className="p-4">30 min</th>
                  <th className="p-4">60 min</th>
                  <th className="p-4">90 min</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200">
                  <td className="p-4">Swedish</td>
                  <td className="p-4">£55</td>
                  <td className="p-4">£80</td>
                  <td className="p-4">£110</td>
                </tr>
                <tr className="border-t border-slate-200">
                  <td className="p-4">Deep Tissue</td>
                  <td className="p-4">£60</td>
                  <td className="p-4">£90</td>
                  <td className="p-4">£120</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-soft">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-sky-200">Google reviews</p>
              <h2 className="mt-2 text-3xl font-semibold">Rated 5.0 by happy clients</h2>
            </div>
            <Link href="/reviews" className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-900">
              Write a review
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {testimonials.map((quote) => (
              <div key={quote} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-100">
                “{quote}”
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold">Frequently asked questions</h2>
        <div className="mt-8 grid gap-4">
          {faqs.map((item) => (
            <div key={item.question} className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex items-center justify-between gap-4">
                <span className="font-medium text-slate-700">{item.question}</span>
                <span className="text-lg text-brand-blue">+</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
