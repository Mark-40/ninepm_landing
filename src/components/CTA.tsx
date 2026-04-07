export default function CTA() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-[#2C5364]/40 bg-gradient-to-br from-[#203A43]/60 via-[#2C5364]/10 to-transparent p-10 md:p-16 text-center">
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#2C5364]/20 rounded-full blur-[80px] -z-10" />

          <p className="text-[#7ECCD8] text-sm font-medium uppercase tracking-widest mb-4">
            Get Started
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Ready to stop doing things the hard way?
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Book a free 30-minute strategy call. We&apos;ll walk through your
            current operations, identify where you&apos;re losing time and money,
            and show you exactly what we&apos;d build to fix it.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="https://calendly.com/arrolle14/30min"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#2C5364] hover:bg-[#3a6b80] text-white font-semibold text-sm transition-all hover:shadow-xl hover:shadow-[#2C5364]/40"
            >
              Book a Free Demo
            </a>
            <a
              href="mailto:arrolle14@gmail.com"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-[#2C5364]/40 hover:border-[#2C5364]/70 text-slate-300 hover:text-white font-medium text-sm transition-all"
            >
              Send Us a Message
            </a>
          </div>

          <p className="text-slate-500 text-xs">
            No pressure. No pitch deck. Just an honest conversation about your business.
          </p>
        </div>
      </div>
    </section>
  );
}
