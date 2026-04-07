// Footer — clean, minimal. Preserves user's email + links.

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#070f1a] border-t border-white/[0.05] py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#2C5364] to-[#7ECCD8]/60 flex items-center justify-center shadow-lg shadow-[#2C5364]/30">
                <span className="text-white font-black text-sm leading-none">9</span>
              </div>
              <span className="font-semibold text-[15px] tracking-tight text-white">NinePM</span>
            </a>
            <p className="text-slate-600 text-xs text-center md:text-left max-w-[200px] leading-relaxed">
              Automation and AI tools for small businesses that want to grow faster.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              { label: "Services",     href: "#services" },
              { label: "How It Works", href: "#how-it-works" },
              { label: "Results",      href: "#benefits" },
              { label: "Contact",      href: "#contact" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <a
              href="mailto:arrolle14@gmail.com"
              className="text-xs text-slate-500 hover:text-[#7ECCD8] transition-colors"
            >
              arrolle14@gmail.com
            </a>
            <a
              href="https://calendly.com/arrolle14/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#7ECCD8]/70 hover:text-[#7ECCD8] transition-colors"
            >
              Book a call →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-700">
          <span>© {currentYear} NinePM. All rights reserved.</span>
          <span className="italic">Built after hours. For businesses that work all hours.</span>
        </div>
      </div>
    </footer>
  );
}
