// Benefits — the "results" section. Lighter surface for contrast.
// Design: oversized stat numbers anchored by supporting copy.
// The lighter bg creates a visual "break" in the dark page — pulls the eye.

const stats = [
  {
    value: "10+",
    unit: "hrs / week",
    label: "Reclaimed from manual work",
    body: "Within the first month, our clients reclaim over 10 hours of manual effort per week — time that goes back into growing the business.",
    color: "text-[#7ECCD8]",
  },
  {
    value: "< 24h",
    unit: "",
    label: "Average lead response time",
    body: "Automated follow-ups fire immediately after a form submission or inquiry — before your competitors even open their inbox.",
    color: "text-purple-400",
  },
  {
    value: "~0",
    unit: "errors",
    label: "In automated reports",
    body: "When reports are built from live data — no copy-paste, no manual formulas — errors stop being a thing you have to check for.",
    color: "text-green-400",
  },
  {
    value: "3–4",
    unit: "weeks",
    label: "Average delivery time",
    body: "From first call to live, working system. Not months of back-and-forth — real delivery, on a real timeline.",
    color: "text-orange-400",
  },
];

export default function Benefits() {
  return (
    // Lighter surface — creates the contrast break needed before the CTA
    <section id="benefits" className="py-28 px-6 relative overflow-hidden bg-[#0d1e2e]">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2C5364]/40 to-transparent" />
      {/* Bottom border gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2C5364]/40 to-transparent" />
      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#2C5364]/10 rounded-full blur-[120px] -z-0" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="text-[#7ECCD8] text-sm font-semibold uppercase tracking-[0.15em] mb-4">
            The Results
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1]">
            Less friction.{" "}
            <span className="text-slate-500">More of everything else.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="card-glow group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 hover:border-[#2C5364]/30 transition-all duration-300"
            >
              {/* Large stat number — the first thing you see */}
              <div className="flex items-baseline gap-2 mb-1">
                <span className={`text-5xl md:text-6xl font-black leading-none ${s.color}`}>
                  {s.value}
                </span>
                {s.unit && (
                  <span className="text-slate-500 text-sm font-medium">{s.unit}</span>
                )}
              </div>

              {/* Label */}
              <p className="text-white font-bold text-base mb-3">{s.label}</p>

              {/* Supporting copy */}
              <p className="text-slate-500 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
