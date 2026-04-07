export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-16">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#2C5364]/25 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-[#203A43]/40 rounded-full blur-[100px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2C5364]/50 bg-[#203A43]/40 text-[#7ECCD8] text-xs font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7ECCD8] animate-pulse" />
          Built after hours. Deployed for your business.
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
          Stop doing manually{" "}
          <br className="hidden sm:block" />
          <span className="text-[#7ECCD8]">what a system can do</span>
          <br className="hidden sm:block" />
          for you.
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          NinePM builds automation, reporting systems, and AI tools that cut
          the busywork out of running your business — so you can focus on
          actually growing it.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#2C5364] hover:bg-[#3a6b80] text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-[#2C5364]/40"
          >
            Book a Free Demo
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-[#2C5364]/40 hover:border-[#2C5364]/70 text-slate-300 hover:text-white font-medium text-sm transition-all"
          >
            See What We Build →
          </a>
        </div>

        {/* Social proof bar */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-500 divide-y sm:divide-y-0 sm:divide-x divide-[#2C5364]/20">
          <span className="py-2 sm:py-0 sm:px-6">✓ No long-term contracts</span>
          <span className="py-2 sm:py-0 sm:px-6">✓ Delivered in weeks, not months</span>
          <span className="py-2 sm:py-0 sm:px-6">✓ Tailored to your workflow</span>
        </div>
      </div>
    </section>
  );
}
