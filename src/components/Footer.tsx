export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-xl font-black">
              EVENT <span className="text-[#FF6B35]">FUNKAAR</span>
            </p>
            <p className="text-gray-500 text-xs mt-1">A Communication World Company</p>
            <p className="text-gray-500 text-xs mt-0.5">Dehradun, Uttarakhand, India</p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {["#home", "#about", "#services", "#why-us", "#clients", "#contact"].map((href) => (
              <a
                key={href}
                href={href}
                className="text-gray-400 hover:text-[#FF6B35] text-sm capitalize transition-colors"
              >
                {href.replace("#", "").replace("-", " ")}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-gray-600 text-xs">
          <p>© {new Date().getFullYear()} Event Funkaar. All rights reserved.</p>
          <p className="italic opacity-60">"Crafting Cultures. Celebrating Stories."</p>
        </div>
      </div>
    </footer>
  );
}
