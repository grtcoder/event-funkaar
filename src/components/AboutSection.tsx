export default function AboutSection() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <span className="text-xs font-semibold tracking-widest uppercase text-[#FF6B35]">
          About Us
        </span>

        <div className="mt-6 grid md:grid-cols-2 gap-16 items-center">
          {/* Left – story */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] leading-tight mb-6">
              Two decades of{" "}
              <span className="text-[#4361EE]">bringing events to life.</span>
            </h2>
            <div className="space-y-4 text-gray-500 leading-relaxed">
              <p>
                Founded in <strong className="text-[#1a1a1a]">2002</strong> as an Audio-Visual
                Rental company under Communication World, we've grown into a
                full-service event planning powerhouse.
              </p>
              <p>
                In <strong className="text-[#1a1a1a]">September 2025</strong>, we formalized our
                events division under the brand <strong className="text-[#FF6B35]">Event Funkaar</strong> —
                a name that reflects our artistic spirit and deep-rooted cultural
                connection.
              </p>
              <p>
                Headquartered in <strong className="text-[#1a1a1a]">Dehradun, India</strong>, we
                specialize in curating seamless Corporate, Social, and Wedding
                events — with a pan-India presence that keeps growing.
              </p>
            </div>
          </div>

          {/* Right – mission & vision cards */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl p-8 bg-[#FF6B35] text-white">
              <span className="text-xs font-bold tracking-widest uppercase opacity-70">
                Our Mission
              </span>
              <p className="mt-3 text-xl font-semibold leading-snug">
                To deliver memorable and purpose-driven events that connect
                people and ideas.
              </p>
            </div>
            <div className="rounded-2xl p-8 bg-[#4361EE] text-white">
              <span className="text-xs font-bold tracking-widest uppercase opacity-70">
                Our Vision
              </span>
              <p className="mt-3 text-xl font-semibold leading-snug">
                To become the most trusted and innovative event partner in
                India.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline chips */}
        <div className="mt-16 flex flex-wrap gap-4">
          {[
            { year: "2002", note: "Founded as A/V Rental Co." },
            { year: "2025", note: "Rebranded as Event Funkaar" },
            { year: "Today", note: "Pan-India Full-Service Events" },
          ].map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-3 rounded-full border border-gray-200 bg-[#f9f7f4]"
            >
              <span className="text-[#FF6B35] font-black text-sm">{t.year}</span>
              <span className="text-gray-500 text-sm">{t.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
