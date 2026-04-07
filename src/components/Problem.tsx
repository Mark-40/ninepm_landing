const pains = [
  {
    icon: "📋",
    title: "You're stuck in spreadsheets",
    body: "Your team spends hours every week copying data, building reports, and sending follow-ups — tasks that should take minutes, not hours.",
  },
  {
    icon: "📩",
    title: "Leads fall through the cracks",
    body: "A potential client messaged you three days ago. No one followed up. That's revenue walking out the door because your process isn't built to catch it.",
  },
  {
    icon: "🔁",
    title: "The same mistakes keep happening",
    body: "Manual processes create room for human error. When your operations depend on memory and habit, things break the moment someone is busy or absent.",
  },
  {
    icon: "📊",
    title: "You can't see what's actually happening",
    body: "No real-time view of sales, inventory, or team performance. You're making decisions based on gut feel instead of data you can trust.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <p className="text-[#7ECCD8] text-sm font-medium uppercase tracking-widest mb-4 text-center">
          The Problem
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Manual work is quietly killing your growth
        </h2>
        <p className="text-slate-400 text-center max-w-xl mx-auto mb-16">
          Most SMBs don&apos;t fail because of bad ideas. They fail because they
          scale their problems instead of building systems.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {pains.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-[#2C5364]/20 bg-[#203A43]/20 p-6 hover:border-[#2C5364]/40 hover:bg-[#203A43]/30 transition-all"
            >
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
