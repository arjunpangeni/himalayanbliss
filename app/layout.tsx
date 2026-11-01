import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { ScrollReveal } from '@/components/scroll-reveal';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Himalaya London | Massage Therapy in London',
  description:
    'Massage therapy, deep tissue, sports massage, hot stone and aromatherapy treatments in London with easy online booking.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <ScrollReveal />
          <div className="min-h-screen bg-brand-background text-slate-900">
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
