const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Head of HR, Honeywell India",
    event: "Annual Corporate Conference",
    quote:
      "Event Funkaar handled our annual conference with exceptional professionalism. The AV setup was flawless, the logistics were seamless, and the team anticipated every need before we even asked. Truly a cut above the rest.",
    rating: 5,
  },
  {
    name: "Priya & Rohan Sharma",
    role: "Wedding Clients",
    event: "Wedding, Dehradun",
    quote:
      "Our wedding was everything we dreamed of and more. The team brought our vision to life with such care and creativity. Every detail was perfect — from the décor to the sound to the artist performances. We couldn't be happier.",
    rating: 5,
  },
  {
    name: "Dr. Sunita Rawat",
    role: "Event Coordinator, AIIMS Rishikesh",
    event: "Medical Conference & CME",
    quote:
      "We've worked with Event Funkaar on multiple institutional events. Their understanding of formal, high-stakes gatherings is unmatched. Reliable, punctual, and always delivering beyond expectations.",
    rating: 5,
  },
  {
    name: "Vikram Negi",
    role: "Regional Director, BNI Uttarakhand",
    event: "BNI Chapter Meets & Galas",
    quote:
      "From chapter meets to large galas, Event Funkaar has been our go-to partner for years. They understand the energy a BNI event needs — professional yet vibrant. The team is incredibly responsive and solutions-driven.",
    rating: 5,
  },
  {
    name: "Ananya Joshi",
    role: "Marketing Manager, Zydus",
    event: "Product Launch Event",
    quote:
      "Our product launch needed to be impactful and memorable. Event Funkaar delivered exactly that — stunning visuals, tight execution, and a crowd that left genuinely excited. The ROI was clear.",
    rating: 5,
  },
  {
    name: "Kabir Singh",
    role: "Private Client",
    event: "50th Birthday Celebration",
    quote:
      "I wanted something truly special for my milestone birthday. The team not only listened but added ideas I hadn't even thought of. The evening was magical — every guest is still talking about it.",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FF6B35">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#FF6B35]">
              Testimonials
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black text-[#1a1a1a] leading-tight">
              What our clients{" "}
              <span className="text-[#4361EE]">say.</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-xs text-sm leading-relaxed">
            Real words from the people we've had the privilege of serving across
            corporate, social, and personal events.
          </p>
        </div>

        {/* Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="break-inside-avoid rounded-2xl border border-gray-100 bg-[#f9f7f4] p-7 flex flex-col gap-4"
            >
              {/* Quote mark */}
              <svg
                width="28"
                height="22"
                viewBox="0 0 28 22"
                fill="none"
                className="opacity-20"
              >
                <path
                  d="M0 22V13.4C0 9.667 0.933 6.533 2.8 4C4.667 1.333 7.4 0 11 0v3.6c-1.867 0-3.267.667-4.2 2C5.867 6.933 5.4 8.6 5.4 10.6H11V22H0Zm17 0V13.4c0-3.733.933-6.867 2.8-9.4C21.667 1.333 24.4 0 28 0v3.6c-1.867 0-3.267.667-4.2 2-.933 1.333-1.4 3-1.4 5H28V22H17Z"
                  fill="#FF6B35"
                />
              </svg>

              <p className="text-gray-600 text-sm leading-relaxed flex-1">"{t.quote}"</p>

              <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                <div>
                  <p className="font-bold text-[#1a1a1a] text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{t.role}</p>
                  <p className="text-[#FF6B35] text-xs font-medium mt-0.5">{t.event}</p>
                </div>
                <StarRating count={t.rating} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom summary */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-10 py-10 border-y border-gray-100">
          {[
            { value: "500+", label: "Events Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "20+", label: "Years of Trust" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-black text-[#FF6B35]">{s.value}</p>
              <p className="text-gray-400 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
