export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#2C5364]/20 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-md bg-[#2C5364] flex items-center justify-center text-white font-bold text-sm">
                9
              </span>
              <span className="font-semibold text-lg tracking-tight text-white">
                NinePM
              </span>
            </a>
            <p className="text-slate-500 text-xs text-center md:text-left max-w-[220px]">
              Helping small businesses work smarter through automation and AI.
            </p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            {[
              { label: "Services", href: "#services" },
              { label: "How It Works", href: "#how-it-works" },
              { label: "Results", href: "#benefits" },
              { label: "Contact", href: "#contact" },
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
          <a
            href="mailto:arrolle14@gmail.com"
            className="text-xs text-slate-500 hover:text-[#7ECCD8] transition-colors"
          >
            arrolle14@gmail.com
          </a>
        </div>

        <div className="mt-10 pt-6 border-t border-[#2C5364]/15 text-center text-xs text-slate-600">
          © {currentYear} NinePM. All rights reserved. Built after hours, for businesses that work all hours.
        </div>
      </div>
    </footer>
  );
}
