// Solution — full-bleed gradient section for contrast after the dark Problem section.
// Design intent: shift mood. After the pain, show the relief.
// Three pillars replace bullet lists — scannable, memorable, distinct.

const pillars = [
  {
    number: "01",
    title: "We learn how you actually work",
    body: "Not how you think you work — how your team actually operates day to day. We map every manual step, every workaround, every gap.",
  },
  {
    number: "02",
    title: "We build exactly what fixes it",
    body: "No off-the-shelf tools. No templates. Custom automations, dashboards, and AI assistants built around your specific workflow.",
  },
  {
    number: "03",
    title: "You get a business that runs itself",
    body: "Your team stops doing repetitive tasks and starts doing real work. Your data is live. Your follow-ups are automatic. Your ops are reliable.",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="py-28 px-6 relative overflow-hidden">
      {/* Gradient wash — creates visual transition from dark Problem section */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#070f1a] via-[#0a1628] to-[#0a1628]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#2C5364]/10 rounded-full blur-[140px] -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Framed quote block — large, impactful */}
        <div className="rounded-3xl border border-[#2C5364]/25 bg-gradient-to-br from-[#2C5364]/10 via-[#203A43]/15 to-transparent p-8 md:p-14 mb-20">
          <p className="text-[#7ECCD8] text-sm font-semibold uppercase tracking-[0.15em] mb-6">
            The NinePM Approach
          </p>
          <blockquote className="text-2xl md:text-3xl font-bold text-white leading-snug max-w-3xl">
            &ldquo;Most businesses don&apos;t need more software.
            They need someone to build the right system for{" "}
            <span className="text-gradient">how they actually work.</span>&rdquo;
          </blockquote>
          <p className="mt-6 text-slate-400 text-base max-w-2xl leading-relaxed">
            We don&apos;t hand you a SaaS subscription and leave. We sit with you,
            understand your operation, and build tools your team will actually use —
            because we built them around how your team already operates.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div
              key={p.number}
              className="card-glow group rounded-2xl border border-white/[0.05] bg-white/[0.02] p-6 hover:border-[#2C5364]/40 transition-all duration-300"
            >
              <div className="text-4xl font-black text-[#2C5364]/60 group-hover:text-[#7ECCD8]/40 transition-colors mb-4 font-mono">
                {p.number}
              </div>
              <h3 className="text-white font-bold text-base mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
