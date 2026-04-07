const steps = [
  {
    number: "01",
    title: "Discover",
    body: "We start with a deep-dive into your current operations. We identify the exact tasks and processes that are eating your team's time and find where the biggest wins are.",
    detail: "Free strategy call → process audit → priority roadmap",
  },
  {
    number: "02",
    title: "Build",
    body: "We design and build your solution — whether it's an automation workflow, a reporting dashboard, or an AI assistant. You see progress in real time and give feedback as we go.",
    detail: "Weekly updates → staged delivery → your approval before launch",
  },
  {
    number: "03",
    title: "Automate",
    body: "We deploy, train your team, and hand everything over. From day one, your systems are running. We stay on call to fine-tune, expand, and make sure everything keeps working.",
    detail: "Full handover → team training → ongoing support",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#7ECCD8] text-sm font-medium uppercase tracking-widest mb-4 text-center">
          How It Works
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          From first call to fully automated in weeks
        </h2>
        <p className="text-slate-400 text-center max-w-xl mx-auto mb-16">
          A simple, transparent process — no long contracts, no surprises. Just
          steady progress toward a business that runs smarter.
        </p>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2C5364]/50 to-transparent" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.number} className="relative flex flex-col">
                {/* Number badge */}
                <div className="w-14 h-14 rounded-2xl bg-[#203A43] border border-[#2C5364]/40 flex items-center justify-center mb-6 relative z-10">
                  <span className="text-[#7ECCD8] font-mono font-bold text-lg">
                    {s.number}
                  </span>
                </div>

                <h3 className="text-white font-semibold text-xl mb-3">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  {s.body}
                </p>
                <p className="text-xs text-slate-500 border-t border-[#2C5364]/20 pt-4">
                  {s.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
