export default function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#f9f7f4]"
    >
      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#FF6B35]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-[#4361EE]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 pb-16">
        {/* Eyebrow */}
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-xs font-semibold tracking-widest uppercase mb-6">
          Full-Service Event Planning · Dehradun, India
        </span>

        {/* Brand name */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tight text-[#1a1a1a] leading-none mb-6">
          EVENT{" "}
          <span className="relative inline-block">
            <span className="text-[#FF6B35]">FUNKAAR</span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="8"
              viewBox="0 0 200 8"
              preserveAspectRatio="none"
            >
              <path
                d="M0 6 Q50 0 100 6 Q150 12 200 6"
                stroke="#4361EE"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-2xl md:text-3xl font-light text-gray-500 mt-8 mb-10 italic">
          "Crafting Cultures. Celebrating Stories."
        </p>

        {/* Sub-copy */}
        <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed mb-12">
          From corporate conferences to dream weddings and electrifying live
          shows — we've been building unforgettable experiences since 2002.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="px-8 py-4 rounded-full bg-[#FF6B35] text-white font-semibold hover:bg-[#e85d2a] transition-colors text-sm"
          >
            Explore Our Services
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full border-2 border-[#1a1a1a] text-[#1a1a1a] font-semibold hover:bg-[#1a1a1a] hover:text-white transition-colors text-sm"
          >
            Plan Your Event
          </a>
        </div>

        {/* Stat bar */}
        <div className="mt-20 grid grid-cols-3 divide-x divide-gray-200 border border-gray-200 rounded-2xl bg-white/60 backdrop-blur-sm max-w-2xl mx-auto">
          {[
            { value: "20+", label: "Years Experience" },
            { value: "6", label: "Event Categories" },
            { value: "Pan-India", label: "Reach" },
          ].map((s) => (
            <div key={s.label} className="py-6 px-4 text-center">
              <p className="text-2xl font-black text-[#FF6B35]">{s.value}</p>
              <p className="text-xs text-gray-400 mt-1 tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
        <span className="text-[10px] tracking-widest uppercase text-gray-400">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent" />
      </div>
    </section>
  );
}
