const clients = [
  "AIIMS Rishikesh",
  "GRES",
  "Seema Dental College & Hospital",
  "Honeywell",
  "Uttarakhand Ayurved University",
  "Zydus",
  "The TonsBridge",
  "Fairfield by Marriott",
  "BNI Uttarakhand",
  "Kumaun University",
];

export default function ClientsSection() {
  const doubled = [...clients, ...clients];

  return (
    <section id="clients" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center mb-14">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#FF6B35]">
          Our Clients
        </span>
        <h2 className="mt-4 text-4xl md:text-5xl font-black text-[#1a1a1a]">
          Trusted by the <span className="text-[#4361EE]">best.</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-md mx-auto text-sm leading-relaxed">
          From global corporations to prestigious institutions — our client list
          speaks for itself.
        </p>
      </div>

      {/* Marquee strip */}
      <div className="overflow-hidden border-y border-gray-100 py-6 bg-[#f9f7f4]">
        <div className="flex animate-marquee whitespace-nowrap gap-0">
          {doubled.map((client, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 px-8 text-sm font-semibold text-gray-400 shrink-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] inline-block shrink-0" />
              {client}
            </span>
          ))}
        </div>
      </div>

      {/* Grid of client chips */}
      <div className="max-w-5xl mx-auto px-6 mt-14">
        <div className="flex flex-wrap justify-center gap-3">
          {clients.map((c) => (
            <span
              key={c}
              className="px-5 py-2.5 rounded-full border border-gray-200 text-sm text-gray-600 font-medium bg-[#f9f7f4] hover:border-[#FF6B35] hover:text-[#FF6B35] transition-colors cursor-default"
            >
              {c}
            </span>
          ))}
          <span className="px-5 py-2.5 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-semibold">
            ...and many more
          </span>
        </div>
      </div>
    </section>
  );
}
