const services = [
  {
    icon: "🏢",
    title: "Corporate Events & Conferences",
    description:
      "Product launches, annual meets, seminars, and award nights — designed to impress stakeholders and deliver results.",
    accent: "#FF6B35",
  },
  {
    icon: "💍",
    title: "Weddings",
    description:
      "From intimate ceremonies to grand celebrations, we craft weddings that are as unique as your love story.",
    accent: "#4361EE",
  },
  {
    icon: "🎉",
    title: "Private Parties & Social Gatherings",
    description:
      "Birthdays, anniversaries, reunions — personalized experiences that make every moment special.",
    accent: "#F9C74F",
  },
  {
    icon: "🎤",
    title: "Live Events",
    description:
      "Concerts, cultural shows, and ticketed experiences with end-to-end production management.",
    accent: "#FF6B35",
  },
  {
    icon: "🌟",
    title: "Artist Management",
    description:
      "Sourcing, booking, and coordinating artists, performers, and speakers to elevate your event.",
    accent: "#4361EE",
  },
  {
    icon: "🔊",
    title: "A/V Equipment Rental",
    description:
      "State-of-the-art audio-visual equipment — from PA systems and LED walls to lighting and staging.",
    accent: "#F9C74F",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 bg-[#f9f7f4]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#FF6B35]">
              What We Offer
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black text-[#1a1a1a] leading-tight">
              Six reasons to{" "}
              <span className="text-[#4361EE]">choose us.</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-xs text-sm leading-relaxed">
            End-to-end event services, handled by a team that's been in the
            business for over two decades.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="group rounded-2xl bg-white p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden"
            >
              {/* Accent strip */}
              <div
                className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
                style={{ backgroundColor: s.accent }}
              />

              <span className="text-4xl mb-5 block">{s.icon}</span>
              <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>

              <div
                className="mt-6 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide transition-colors"
                style={{ color: s.accent }}
              >
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
