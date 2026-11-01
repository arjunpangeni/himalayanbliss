'use client';

import { useMemo, useState } from 'react';
import { services, slotTimes, therapistOptions } from '@/lib/site-data';

export function BookingFlow() {
  const [selectedServiceId, setSelectedServiceId] = useState(services[0].id);
  const [selectedDuration, setSelectedDuration] = useState(60);
  const [selectedDate, setSelectedDate] = useState('2026-10-30');
  const [selectedSlot, setSelectedSlot] = useState('10:00');
  const [selectedTherapist, setSelectedTherapist] = useState('Any available');
  const [form, setForm] = useState({
    name: 'Alex Morgan',
    email: 'alex@example.com',
    phone: '07123 456789',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState<string | null>(null);
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);
  const [reference, setReference] = useState<string | null>(null);

  const selectedService = useMemo(
    () => services.find((service) => service.id === selectedServiceId) ?? services[0],
    [selectedServiceId],
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setSuccess(null);

    const response = await fetch('/api/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        serviceId: selectedService.id,
        therapist: selectedTherapist,
        date: selectedDate,
        time: selectedSlot,
        duration: selectedDuration,
        name: form.name,
        email: form.email,
        phone: form.phone,
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.ok) {
      setError(data.message || 'The booking could not be created.');
      return;
    }

    setRedirectUrl(data.redirectTo);
    setReference(data.reference);
    setSuccess(data.message || 'Reservation created');
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-blue">Book online</p>
          <h1 className="mt-2 text-4xl font-semibold text-slate-900">Reserve your session</h1>
        </div>
        <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
          Slot held for 10 minutes
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr]">
        <form onSubmit={handleSubmit} className="space-y-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <div>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">1. Treatment and duration</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {services.map((service) => (
                <button
                  type="button"
                  key={service.id}
                  onClick={() => {
                    setSelectedServiceId(service.id);
                    setSelectedDuration(service.duration);
                  }}
                  className={`rounded-2xl border p-4 text-left ${
                    selectedServiceId === service.id
                      ? 'border-brand-blue bg-sky-50 shadow-sm'
                      : 'border-slate-200 bg-white'
                  }`}
                >
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="font-medium text-slate-800">{service.name}</span>
                    <span className="rounded-full bg-white px-2 py-1 text-xs text-slate-600">{service.tag}</span>
                  </div>
                  <p className="text-sm text-slate-600">{service.description}</p>
                  <div className="mt-3 text-sm font-medium text-brand-deep">From £{service.price}</div>
                </button>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {[30, 60, 90].map((duration) => (
                <button
                  key={duration}
                  type="button"
                  onClick={() => setSelectedDuration(duration)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium ${
                    selectedDuration === duration
                      ? 'border-brand-blue bg-brand-blue text-white'
                      : 'border-slate-300 bg-white text-slate-700'
                  }`}
                >
                  {duration} min
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">2. Date and time</h2>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-700">
                <span>Select date</span>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(event) => setSelectedDate(event.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 outline-none ring-0"
                />
              </label>

              <label className="space-y-2 text-sm text-slate-700">
                <span>Preferred therapist</span>
                <select
                  value={selectedTherapist}
                  onChange={(event) => setSelectedTherapist(event.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 outline-none ring-0"
                >
                  {therapistOptions.map((therapist) => (
                    <option key={therapist} value={therapist}>
                      {therapist}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {slotTimes.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedSlot(slot)}
                  className={`rounded-full border px-3 py-2 text-sm ${
                    selectedSlot === slot
                      ? 'border-brand-blue bg-brand-blue text-white'
                      : 'border-slate-300 bg-slate-50 text-slate-700'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">3. Your details</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-700">
                <span>Full name</span>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 outline-none"
                />
              </label>

              <label className="space-y-2 text-sm text-slate-700">
                <span>Email address</span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 outline-none"
                />
              </label>

              <label className="space-y-2 text-sm text-slate-700 md:col-span-2">
                <span>Mobile number</span>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 outline-none"
                />
              </label>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 p-4">
            <div>
              <div className="text-sm text-slate-500">Estimated total</div>
              <div className="text-2xl font-semibold text-slate-900">£{selectedService.price}</div>
            </div>
            <button type="submit" className="rounded-full bg-signature-gradient px-6 py-3 font-medium text-white shadow-soft">
              Reserve my slot
            </button>
          </div>

          {error && (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div>
          )}
        </form>

        <aside className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-soft">
          <h2 className="text-xl font-semibold text-slate-900">Booking summary</h2>
          <div className="mt-5 space-y-4 text-sm text-slate-600">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-3">
              <span>Treatment</span>
              <span className="font-medium text-slate-800">{selectedService.name}</span>
            </div>
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-3">
              <span>Duration</span>
              <span className="font-medium text-slate-800">{selectedDuration} min</span>
            </div>
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-3">
              <span>Date</span>
              <span className="font-medium text-slate-800">{selectedDate}</span>
            </div>
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-3">
              <span>Time</span>
              <span className="font-medium text-slate-800">{selectedSlot}</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span>Therapist</span>
              <span className="font-medium text-slate-800">{selectedTherapist}</span>
            </div>
          </div>

          {success && (
            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
              <div>{success}</div>
              {reference && <div className="mt-2 font-medium">Reference: {reference}</div>}
              {redirectUrl && (
                <div className="mt-3">
                  <a href={redirectUrl} className="font-medium text-emerald-900 underline">
                    Open verification link
                  </a>
                </div>
              )}
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
