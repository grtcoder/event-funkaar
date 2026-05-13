const reasons = [
  {
    number: "01",
    icon: "💼",
    title: "20+ Years of Experience",
    description:
      "With roots going back to 2002, we bring unmatched expertise to every event — knowing exactly what works and what doesn't.",
  },
  {
    number: "02",
    icon: "🌐",
    title: "Local Expertise",
    description:
      "Deep knowledge of venues, vendors, and cultural nuances across Uttarakhand and beyond — giving your event an authentic edge.",
  },
  {
    number: "03",
    icon: "🎨",
    title: "Creative In-house Team",
    description:
      "Our designers, producers, and technicians work together under one roof — ensuring a cohesive and creative vision from start to finish.",
  },
  {
    number: "04",
    icon: "📈",
    title: "Proven Track Record in Delivering ROI",
    description:
      "Our clients — from global corporates to government institutions — return because we consistently deliver results that exceed expectations.",
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-28 bg-[#1a1a1a] text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#FF6B35]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#4361EE]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#FF6B35]">
            Why Choose Us
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-black leading-tight">
            The Funkaar{" "}
            <span className="text-[#FF6B35]">Difference.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {reasons.map((r) => (
            <div
              key={r.number}
              className="flex gap-6 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF6B35]/40 transition-colors"
            >
              <div className="shrink-0">
                <span className="text-4xl">{r.icon}</span>
              </div>
              <div>
                <span className="text-[#FF6B35] text-xs font-bold tracking-widest">
                  {r.number}
                </span>
                <h3 className="mt-1 text-lg font-bold text-white mb-2">{r.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{r.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-16 rounded-2xl bg-[#FF6B35] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-lg font-bold text-white">
              Ready to create something extraordinary?
            </p>
            <p className="text-white/70 text-sm mt-1">
              Let's start planning your next event together.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-8 py-3 rounded-full bg-white text-[#FF6B35] font-bold text-sm hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
