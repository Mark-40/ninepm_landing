// CTA — full-bleed gradient section. The page's emotional climax.
// Design: goes full-width, breaks out of the card pattern from earlier sections.
// Copy is direct and outcome-focused — not a vague "let's connect."

export default function CTA() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Full gradient backdrop — strongest visual on the page */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0a1628] via-[#112030] to-[#0a1628]" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#2C5364]/20 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#7ECCD8]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#2C5364]/10 rounded-full blur-[80px]" />
      </div>

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2C5364]/40 to-transparent" />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #7ECCD8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Label */}
        <p className="text-[#7ECCD8] text-sm font-semibold uppercase tracking-[0.15em] mb-8">
          Let&apos;s Build Something
        </p>

        {/* Headline — the closing argument */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.05] mb-6">
          The best time to fix your ops
          <br />
          <span className="text-gradient">was last year.</span>
        </h2>

        <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-4 max-w-2xl mx-auto">
          The second best time is now.
        </p>

        <p className="text-slate-500 text-base leading-relaxed mb-12 max-w-xl mx-auto">
          Book a free 30-minute strategy call. We&apos;ll walk through your
          operations, find where you&apos;re losing time and money, and show
          you exactly what we&apos;d build to fix it.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="https://calendly.com/arrolle14/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#2C5364] hover:bg-[#3a6b80] text-white font-bold text-sm transition-all duration-300 shadow-xl shadow-[#2C5364]/30 hover:shadow-[#2C5364]/50 hover:-translate-y-0.5"
          >
            Book a Free Strategy Call
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="mailto:arrolle14@gmail.com"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#2C5364]/40 hover:border-[#2C5364]/70 text-slate-300 hover:text-white font-medium text-sm transition-all duration-300 hover:-translate-y-0.5"
          >
            Send a Message
          </a>
        </div>

        {/* Reassurance line */}
        <p className="text-slate-600 text-xs">
          No commitment. No pitch deck. Just an honest conversation.
        </p>

        {/* Trust row */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-xs text-slate-600 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
          <span className="py-2 sm:py-0 sm:px-6">✓ Free first call</span>
          <span className="py-2 sm:py-0 sm:px-6">✓ Delivered in weeks, not months</span>
          <span className="py-2 sm:py-0 sm:px-6">✓ You own everything we build</span>
          <span className="py-2 sm:py-0 sm:px-6">✓ No long-term contracts</span>
        </div>
      </div>
    </section>
  );
}
