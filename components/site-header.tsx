'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTheme } from 'next-themes';
import { Menu, Moon, Sun, X } from 'lucide-react';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = mounted && resolvedTheme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-700/80 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-3 sm:px-6 sm:py-4">
        <Link href="/" onClick={closeMenu} className="min-w-0 whitespace-nowrap text-base font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-xl">
          Himalaya London
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-700 dark:text-slate-300 md:flex">
          <Link href="/services">Treatments</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <button
            type="button"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 sm:size-10"
          >
            {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>
          <Link href="/book" onClick={closeMenu} className="shrink-0 whitespace-nowrap rounded-full bg-signature-gradient px-2.5 py-2 text-xs font-medium text-white shadow-soft sm:px-5 sm:py-2.5 sm:text-sm">
            Book now
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 md:hidden sm:size-10"
          >
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>
      {menuOpen && createPortal(
        <div className="fixed inset-0 z-[60] md:hidden">
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
            className="absolute inset-0 size-full bg-slate-950/40"
          />
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="absolute inset-y-0 right-0 flex w-[50vw] max-w-sm flex-col overflow-y-auto rounded-l-[2rem] bg-white px-5 pb-8 pt-6 text-sm text-slate-700 shadow-2xl dark:bg-slate-900 dark:text-slate-200"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="font-semibold text-slate-900 dark:text-slate-100">Menu</span>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={closeMenu}
                className="inline-flex size-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>
            <div className="flex flex-col">
              {([
                ['/services', 'Treatments'],
                ['/pricing', 'Pricing'],
                ['/about', 'About'],
                ['/reviews', 'Reviews'],
                ['/faq', 'FAQ'],
                ['/contact', 'Contact'],
              ] as const).map(([href, label]) => (
                <Link key={href} href={href} onClick={closeMenu} className="border-b border-slate-100 py-3 dark:border-slate-800">
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        </div>,
        document.body,
      )}
    </header>
  );
}
