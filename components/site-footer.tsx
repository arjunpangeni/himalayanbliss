import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 text-sm text-slate-600 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <Link href="/" className="font-semibold text-slate-800">Himalaya London</Link>
          <p className="mt-2">123 Marylebone Road, London NW1 5SJ</p>
          <a className="mt-1 inline-block" href="mailto:hello@himalayalondon.com">hello@himalayalondon.com</a>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap content-start gap-x-6 gap-y-3">
          <Link href="/services">Treatments</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="flex flex-col items-start gap-2 sm:col-span-2 lg:col-span-1 lg:items-end">
          <span>Mon–Sat: 9:00–19:00</span>
          <Link href="/book" className="font-medium text-brand-deep">Book a treatment</Link>
        </div>
      </div>
    </footer>
  );
}
