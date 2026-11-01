'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const targets = document.querySelectorAll<HTMLElement>(
      'main > section, main > div > div, main article, main form, main h1',
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    );

    targets.forEach((target, index) => {
      target.classList.add('scroll-reveal');
      target.style.transitionDelay = `${(index % 4) * 70}ms`;
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}