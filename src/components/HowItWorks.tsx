// How It Works — 3-step process.
// Design: large numbered steps with a connecting gradient line on desktop.
// Each step has a title + 2-3 sentence body + a "what you get" deliverable chip row.

const steps = [
  {
    number: "01",
    label: "Discover",
    title: "We learn your mess.",
    body: "A deep-dive into how your business actually runs — every manual task, every workaround, every bottleneck. We find where time and money are leaking before we touch a single line of code.",
    deliverables: ["Strategy call", "Process audit", "Priority roadmap"],
  },
  {
    number: "02",
    label: "Build",
    title: "We fix it systematically.",
    body: "Custom automations, dashboards, and tools built around your workflow — not a template. You see progress weekly and give feedback before anything goes live.",
    deliverables: ["Weekly check-ins", "Staged delivery", "Your sign-off required"],
  },
  {
    number: "03",
    label: "Automate",
    title: "You run on autopilot.",
    body: "We deploy, train your team, and hand everything over. Your systems are live from day one. We stay available to expand, tune, and support as your business grows.",
    deliverables: ["Full handover", "Team training", "Ongoing support"],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 px-6 relative overflow-hidden">
      {/* Background same as hero base */}
      <div className="absolute inset-0 -z-10 bg-[#0a1628]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#2C5364]/8 rounded-full blur-[120px] -z-10" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[#7ECCD8] text-sm font-semibold uppercase tracking-[0.15em] mb-4">
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1]">
            From first call to fully running
            <br />
            <span className="text-slate-500">in a matter of weeks.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute top-[26px] left-[6.5%] right-[6.5%] h-px z-0">
            <div className="h-full bg-gradient-to-r from-transparent via-[#2C5364]/50 to-transparent" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((s, i) => (
              <div key={s.number} className="flex flex-col">
                {/* Number badge */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-[52px] h-[52px] rounded-2xl bg-[#0d1e2e] border border-[#2C5364]/40 flex items-center justify-center flex-shrink-0 shadow-lg shadow-black/30">
                    <span className="text-[#7ECCD8] font-mono font-black text-lg">{s.number}</span>
                    {/* Active pulse on step 1 */}
                    {i === 0 && (
                      <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#7ECCD8]">
                        <span className="absolute inset-0 rounded-full bg-[#7ECCD8] animate-ping opacity-60" />
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">{s.label}</span>
                </div>

                <h3 className="text-white font-bold text-xl mb-3 leading-snug">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{s.body}</p>

                {/* Deliverable chips */}
                <div className="flex flex-wrap gap-2">
                  {s.deliverables.map((d) => (
                    <span
                      key={d}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-[#203A43]/40 text-slate-400 border border-white/[0.05]"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA nudge */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm mb-4">
            The first call is free. No commitment, no pitch deck.
          </p>
          <a
            href="https://calendly.com/arrolle14/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#7ECCD8] text-sm font-medium hover:text-white transition-colors"
          >
            Schedule a discovery call
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
