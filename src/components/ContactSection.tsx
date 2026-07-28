"use client";

import { useState } from "react";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventStartDate: "",
    eventEndDate: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSending(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New event enquiry from ${form.name}`,
          name: form.name,
          email: form.email,
          phone: form.phone,
          event_type: form.eventType,
          event_start_date: form.eventStartDate,
          event_end_date: form.eventEndDate,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Could not send message. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-[#f9f7f4]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#FF6B35]">
              Contact Us
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-black text-[#1a1a1a] leading-tight">
              Let's plan your{" "}
              <span className="text-[#FF6B35]">next event.</span>
            </h2>
            <p className="mt-5 text-gray-400 text-sm leading-relaxed max-w-sm">
              Drop us a message and our team will get back to you within 24
              hours. Whether it's a query or a full brief — we're all ears.
            </p>

            <div className="mt-10 space-y-5">
              {[
                {
                  icon: "📍",
                  label: "Location",
                  value: "Pan India",
                },
                {
                  icon: "🏢",
                  label: "Parent Company",
                  value: "Communication World",
                },
                {
                  icon: "📅",
                  label: "Est.",
                  value: "2002 · Rebranded 2025",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">
                      {item.label}
                    </p>
                    <p className="text-[#1a1a1a] font-medium text-sm mt-0.5">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – form */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <span className="text-5xl">🎉</span>
                <h3 className="text-xl font-bold text-[#1a1a1a]">
                  Message received!
                </h3>
                <p className="text-gray-400 text-sm">
                  We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 text-[#FF6B35] text-sm font-semibold underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#FF6B35] transition-colors bg-[#f9f7f4]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="rahul@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#FF6B35] transition-colors bg-[#f9f7f4]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                      Phone
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#FF6B35] transition-colors bg-[#f9f7f4]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                      Event Type
                    </label>
                    <select
                      name="eventType"
                      value={form.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#FF6B35] transition-colors bg-[#f9f7f4] text-gray-600"
                    >
                      <option value="">Select type…</option>
                      <option>Corporate Event / Conference</option>
                      <option>Wedding</option>
                      <option>Private Party</option>
                      <option>Live Event</option>
                      <option>Artist Management</option>
                      <option>A/V Equipment Rental</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                      Event Start Date
                    </label>
                    <input
                      name="eventStartDate"
                      type="date"
                      value={form.eventStartDate}
                      onChange={handleChange}
                      max={form.eventEndDate || undefined}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#FF6B35] transition-colors bg-[#f9f7f4] text-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                      Event End Date
                    </label>
                    <input
                      name="eventEndDate"
                      type="date"
                      value={form.eventEndDate}
                      onChange={handleChange}
                      min={form.eventStartDate || undefined}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#FF6B35] transition-colors bg-[#f9f7f4] text-gray-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                    Tell us about your event
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your event and number of guests…"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#FF6B35] transition-colors bg-[#f9f7f4] resize-none"
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-500 font-medium">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-4 rounded-xl bg-[#FF6B35] text-white font-bold text-sm hover:bg-[#e85d2a] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
