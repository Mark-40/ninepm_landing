// Services — the "menu" of what NinePM builds.
// Design: icon badge + title + one-line hook + body. Gradient border shimmer on featured card.
// Layout: 2-col + 1 full-width featured row for visual variety.

const services = [
  {
    emoji: "⚡",
    title: "Workflow Automation",
    hook: "Kill the busywork.",
    body: "Approvals, notifications, data entry, status updates — mapped and automated end to end. Your team stops copy-pasting and starts doing work that actually matters.",
    featured: true,
    tag: "Most requested",
  },
  {
    emoji: "📊",
    title: "Automated Reporting",
    hook: "Numbers that find you.",
    body: "Your reports build themselves — daily, weekly, or live. No more Monday morning spreadsheet sessions. The data is always there, always right.",
    featured: false,
    tag: null,
  },
  {
    emoji: "📩",
    title: "Lead & Follow-Up Automation",
    hook: "Every lead gets a reply.",
    body: "Automated follow-up sequences that fire at the right time — without anyone having to remember. You stop losing deals to slow response times.",
    featured: false,
    tag: null,
  },
  {
    emoji: "🖥️",
    title: "Internal Dashboards",
    hook: "See your business in real time.",
    body: "Custom dashboards built for how you actually track performance — not a generic template. Sales, inventory, appointments, KPIs — one screen, always current.",
    featured: false,
    tag: null,
  },
  {
    emoji: "🤖",
    title: "AI-Powered Assistants",
    hook: "Always on. Zero headcount.",
    body: "Smart assistants that handle customer questions, qualify leads, or support your team around the clock — without adding staff.",
    featured: false,
    tag: "New",
  },
];

export default function Services() {
  const [featured, ...rest] = services;

  return (
    <section id="services" className="py-28 px-6 bg-[#070f1a] relative overflow-hidden">
      {/* Subtle left glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[600px] bg-[#2C5364]/8 rounded-full blur-[120px] -z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-[#7ECCD8] text-sm font-semibold uppercase tracking-[0.15em] mb-4">
              What We Build
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Everything your ops need
              <br />
              <span className="text-slate-500">to run without you.</span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-xs md:text-right leading-relaxed">
            We don&apos;t sell tools. We build the system layer that sits behind your
            entire business.
          </p>
        </div>

        {/* Featured card — full width, shimmer border */}
        <div className="relative rounded-3xl p-px mb-5 overflow-hidden">
          {/* Shimmer gradient border */}
          <div className="absolute inset-0 shimmer-border rounded-3xl opacity-40" />
          <div className="relative rounded-3xl bg-[#0d1e2e] p-8 md:p-10 flex flex-col md:flex-row md:items-start gap-6">
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#2C5364]/20 border border-[#2C5364]/30 flex items-center justify-center text-2xl flex-shrink-0">
              {featured.emoji}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-white font-bold text-xl">{featured.title}</h3>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#7ECCD8]/10 text-[#7ECCD8] border border-[#7ECCD8]/20 uppercase tracking-wider">
                  {featured.tag}
                </span>
              </div>
              <p className="text-[#7ECCD8] font-semibold text-base mb-3">{featured.hook}</p>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xl">{featured.body}</p>
            </div>
          </div>
        </div>

        {/* 2×2 grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {rest.map((s) => (
            <div
              key={s.title}
              className="card-glow group rounded-2xl border border-white/[0.05] bg-white/[0.02] p-6 hover:border-[#2C5364]/35 hover:bg-[#2C5364]/5 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#203A43]/60 border border-white/[0.05] flex items-center justify-center text-lg flex-shrink-0 group-hover:border-[#2C5364]/30 transition-colors">
                  {s.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-bold text-[15px]">{s.title}</h3>
                    {s.tag && (
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#2C5364]/20 text-[#7ECCD8] border border-[#2C5364]/30 uppercase tracking-wider">
                        {s.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-[#7ECCD8]/80 text-xs font-medium mb-2">{s.hook}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
