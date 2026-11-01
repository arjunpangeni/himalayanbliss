import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-background text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-blue">About</p>
            <h1 className="mt-2 text-4xl font-semibold">A quieter kind of care.</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              At Himalaya London, we believe rest is not a luxury. Every treatment is shaped around your body, your goals and the kind of care that helps you feel more at ease.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Our approach is simple: listen first, tailor the treatment, and make space for you to properly switch off.
            </p>
          </div>
          <div className="relative h-[420px] overflow-hidden rounded-[2rem] shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1200&q=85"
              alt="Massage therapist preparing a calm treatment room"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </section>

        <section className="border-t border-slate-200 py-14" aria-labelledby="about-values">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-blue">The experience</p>
          <h2 id="about-values" className="mt-2 text-3xl font-semibold">Care that starts with you.</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="font-semibold">Qualified therapists</h3>
              <p className="mt-2 leading-6 text-slate-600">Professional, insured care in a calm and welcoming studio.</p>
            </div>
            <div>
              <h3 className="font-semibold">Treatment tailored to you</h3>
              <p className="mt-2 leading-6 text-slate-600">Choose a treatment and share your preferences so your session can meet your needs.</p>
            </div>
            <div>
              <h3 className="font-semibold">Time to reset</h3>
              <p className="mt-2 leading-6 text-slate-600">A considered, unhurried experience from arrival through the end of your treatment.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
