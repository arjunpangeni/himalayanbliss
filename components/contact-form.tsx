'use client';

import { useState } from 'react';

export function ContactForm() {
  const [messageReady, setMessageReady] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();
    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    window.location.href = `mailto:hello@himalayalondon.com?subject=${subject}&body=${body}`;
    setMessageReady(true);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5 space-y-4">
      <label className="block space-y-1.5 text-sm font-medium text-slate-700">
        <span>Your name</span>
        <input autoComplete="name" name="name" required className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20" />
      </label>
      <label className="block space-y-1.5 text-sm font-medium text-slate-700">
        <span>Email address</span>
        <input autoComplete="email" name="email" type="email" required className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20" />
      </label>
      <label className="block space-y-1.5 text-sm font-medium text-slate-700">
        <span>Message</span>
        <textarea name="message" required rows={5} className="w-full resize-y rounded-xl border border-slate-300 bg-white p-3 text-slate-900 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20" />
      </label>
      <button type="submit" className="w-full rounded-full bg-signature-gradient px-5 py-3 font-medium text-white">
        Open email app
      </button>
      <p aria-live="polite" className="text-sm text-slate-600">
        {messageReady ? 'Your email app should open with your message ready to send.' : 'Your message will open in your email app for you to review and send.'}
      </p>
    </form>
  );
}