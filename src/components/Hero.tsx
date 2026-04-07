// Hero — split layout (copy left, live dashboard mockup right)
// Design intent: max visual impact above the fold, immediate clarity on what NinePM does.
// The dashboard mockup communicates the product without needing a screenshot.

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 pt-24 pb-16 noise">
      {/* ── Background layers ──────────────────────────────── */}

      {/* Primary radial glow (behind everything) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-[900px] h-[600px] bg-[#2C5364]/20 rounded-full blur-[140px] -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#7ECCD8]/5 rounded-full blur-[100px]" />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(circle, #7ECCD8 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Fade-out at bottom of dot grid */}
      <div className="absolute bottom-0 left-0 right-0 h-48 -z-10 bg-gradient-to-t from-[#0a1628] to-transparent" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

        {/* ── LEFT: Copy ────────────────────────────────────── */}
        <div>
          {/* Badge */}
          <div className="anim-fade-up anim-delay-1 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#2C5364]/50 bg-[#2C5364]/10 text-[#7ECCD8] text-xs font-medium mb-8">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7ECCD8] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#7ECCD8]" />
            </span>
            AI-powered automation for small businesses
          </div>

          {/* Headline — the hook */}
          {/* Design: large, tight tracking, gradient on key phrase to draw the eye */}
          <h1 className="anim-fade-up anim-delay-2 text-5xl sm:text-6xl md:text-[68px] font-black tracking-tight leading-[1.05] text-white mb-6">
            Your team is busy.{" "}
            <br />
            <span className="text-gradient">Your business isn&apos;t.</span>
          </h1>

          {/* Sub-headline */}
          <p className="anim-fade-up anim-delay-3 text-lg md:text-xl text-slate-400 max-w-[480px] leading-relaxed mb-10">
            NinePM replaces the manual work killing your growth — reports,
            follow-ups, approvals, data entry — with systems that run without you.
          </p>

          {/* CTAs */}
          <div className="anim-fade-up anim-delay-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
            <a
              href="https://calendly.com/arrolle14/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#2C5364] hover:bg-[#3a6b80] text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-[#2C5364]/30 hover:shadow-[#2C5364]/50 hover:-translate-y-0.5"
            >
              Book a Free Demo
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-[#7ECCD8] transition-colors font-medium"
            >
              See what we build
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Trust signals */}
          <div className="anim-fade-up anim-delay-5 flex items-center gap-6 text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#7ECCD8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              No long-term contracts
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#7ECCD8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              Live in weeks
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#7ECCD8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              You own everything
            </div>
          </div>
        </div>

        {/* ── RIGHT: Dashboard mockup ───────────────────────── */}
        {/* Design: floating cards give the impression of a live product.
            Pure CSS — no screenshots needed. Immediately communicates the value. */}
        <div className="relative hidden lg:block">

          {/* Floating notification — top left */}
          <div className="anim-float-alt absolute -top-4 -left-8 z-20 rounded-2xl bg-[#0a1628] border border-[#2C5364]/40 p-3.5 shadow-2xl shadow-black/40 w-52">
            <div className="flex items-center gap-2.5 mb-0.5">
              <div className="w-7 h-7 rounded-lg bg-green-500/15 flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-white">Report sent</p>
                <p className="text-[10px] text-slate-500">Weekly summary — just now</p>
              </div>
            </div>
          </div>

          {/* Main dashboard card */}
          <div className="anim-float relative rounded-3xl border border-[#2C5364]/30 bg-[#0d1e2e] shadow-2xl shadow-black/60 overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center gap-1.5 px-4 pt-4 pb-3 border-b border-white/[0.06]">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <span className="ml-3 text-[11px] text-slate-500 font-medium">NinePM Workspace</span>
            </div>

            <div className="p-5">
              {/* Stat cards row */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { label: "Hours Saved", value: "12.5h", delta: "+34%", color: "text-[#7ECCD8]" },
                  { label: "Reports Sent", value: "24",    delta: "auto",  color: "text-purple-400" },
                  { label: "Leads Followed", value: "98%", delta: "rate", color: "text-green-400" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl bg-[#203A43]/40 p-3 border border-white/[0.04]">
                    <p className="text-[9px] text-slate-500 uppercase tracking-wider mb-1.5">{s.label}</p>
                    <p className={`text-xl font-black ${s.color}`}>{s.value}</p>
                    <p className="text-[9px] text-slate-500 mt-0.5">{s.delta}</p>
                  </div>
                ))}
              </div>

              {/* Mini bar chart */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[10px] text-slate-400 font-medium">Manual Tasks Eliminated</p>
                  <p className="text-[10px] text-[#7ECCD8]">This month</p>
                </div>
                <div className="flex items-end gap-1.5 h-14">
                  {[30, 45, 38, 60, 55, 80, 72, 88, 75, 95, 90, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-[#2C5364]/60 hover:bg-[#7ECCD8]/60 transition-colors"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Activity feed */}
              <div className="space-y-2">
                <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">Recent Automations</p>
                {[
                  { icon: "📊", text: "Weekly sales report generated", time: "2m ago" },
                  { icon: "📩", text: "Follow-up sent to 3 leads",     time: "1h ago" },
                  { icon: "✅", text: "Inventory alert resolved",       time: "3h ago" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2.5 rounded-lg bg-[#203A43]/30 px-3 py-2">
                    <span className="text-sm">{item.icon}</span>
                    <span className="text-[11px] text-slate-300 flex-1">{item.text}</span>
                    <span className="text-[10px] text-slate-600">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating stat chip — bottom right */}
          <div className="anim-float absolute -bottom-3 -right-6 z-20 rounded-2xl bg-[#0a1628] border border-[#2C5364]/40 px-4 py-3 shadow-2xl shadow-black/40">
            <p className="text-[10px] text-slate-500 mb-0.5">Time saved this week</p>
            <p className="text-2xl font-black text-[#7ECCD8]">12.5h</p>
            <p className="text-[10px] text-green-400 flex items-center gap-0.5">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              34% vs last week
            </p>
          </div>

          {/* Ambient glow behind the card */}
          <div className="absolute inset-0 -z-10 rounded-3xl bg-[#2C5364]/10 blur-3xl scale-110" />
        </div>
      </div>
    </section>
  );
}
