const stats = [
  {
    value: "10+",
    label: "Hours saved per week",
    sub: "On average, businesses we work with reclaim over 10 hours of manual work every week within the first month.",
  },
  {
    value: "~0",
    label: "Manual reporting errors",
    sub: "Automated reports pull live data with no human touch — which means no copy-paste mistakes, no outdated numbers.",
  },
  {
    value: "3×",
    label: "Faster lead response time",
    sub: "Automated follow-ups reach prospects within seconds. Businesses that respond fast close significantly more deals.",
  },
  {
    value: "100%",
    label: "Custom to your business",
    sub: "Nothing is off-the-shelf. Every system we build is designed around how you actually work — not how a template says you should.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#2C5364]/12 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto">
        <p className="text-[#7ECCD8] text-sm font-medium uppercase tracking-widest mb-4 text-center">
          The Results
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Less friction. More output. Real numbers.
        </h2>
        <p className="text-slate-400 text-center max-w-xl mx-auto mb-16">
          The businesses we work with don&apos;t just save time — they operate at
          a fundamentally different level.
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-[#2C5364]/20 bg-[#203A43]/20 p-7 hover:border-[#2C5364]/40 hover:bg-[#203A43]/30 transition-all"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#7ECCD8] mb-2">
                {s.value}
              </div>
              <div className="text-white font-semibold text-lg mb-2">{s.label}</div>
              <p className="text-slate-400 text-sm leading-relaxed">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
