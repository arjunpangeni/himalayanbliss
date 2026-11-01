import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-brand-background text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <section>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-blue">Contact</p>
            <h1 className="mt-2 text-4xl font-semibold">Visit us in London</h1>
            <div className="mt-6 space-y-3 text-slate-600">
              <address className="not-italic">123 Marylebone Road, London NW1 5SJ</address>
              <p><a className="underline decoration-slate-300 underline-offset-4" href="mailto:hello@himalayalondon.com">hello@himalayalondon.com</a></p>
              <p><a className="underline decoration-slate-300 underline-offset-4" href="tel:+442079461234">020 7946 1234</a></p>
              <p>Mon–Sat: 9:00–19:00</p>
            </div>
            <Link href="/book" className="mt-7 inline-flex rounded-full bg-signature-gradient px-5 py-3 font-medium text-white shadow-soft">
              Book a treatment
            </Link>
          </section>
          <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-xl font-semibold">Send a message</h2>
            <ContactForm />
          </section>
        </div>
      </div>
    </main>
  );
}
