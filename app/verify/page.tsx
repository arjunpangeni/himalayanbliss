'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';

function VerifyBookingContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token') ?? 'demo-token';
  const [status, setStatus] = useState<'idle' | 'confirming' | 'done'>('idle');
  const [message, setMessage] = useState('');

  const handleConfirm = async () => {
    setStatus('confirming');
    const response = await fetch('/api/confirm', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    });

    const payload = await response.json();
    setStatus('done');
    setMessage(payload.message ?? 'Your booking is confirmed.');
  };

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-blue">Verify booking</p>
        <h1 className="mt-2 text-4xl font-semibold text-slate-900">Confirm your massage</h1>
        <p className="mt-4 text-slate-600">
          Your slot is being held for 10 minutes. Press the button below to confirm this session.
        </p>

        <div className="mt-8 rounded-2xl bg-slate-50 p-5 text-sm text-slate-700">
          <div className="flex justify-between gap-3 border-b border-slate-200 pb-3">
            <span>Booking</span>
            <span className="font-medium text-slate-900">MS-8F3K2</span>
          </div>
          <div className="mt-3 flex justify-between gap-3 border-b border-slate-200 pb-3">
            <span>Service</span>
            <span className="font-medium text-slate-900">Swedish Relaxation Massage</span>
          </div>
          <div className="mt-3 flex justify-between gap-3">
            <span>Time</span>
            <span className="font-medium text-slate-900">Saturday, 10:00</span>
          </div>
        </div>

        <button
          onClick={handleConfirm}
          disabled={status === 'confirming'}
          className="mt-8 rounded-full bg-signature-gradient px-6 py-3 font-medium text-white shadow-soft disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'confirming' ? 'Confirming...' : 'Confirm my booking'}
        </button>

        {message && (
          <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
            {message}
          </div>
        )}
      </div>
    </main>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={<main className="mx-auto max-w-3xl px-6 py-16 text-slate-700">Loading verification…</main>}>
      <VerifyBookingContent />
    </Suspense>
  );
}
