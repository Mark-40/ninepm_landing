// Problem — darker contrast section to create visual rhythm after the hero.
// Design intent: make the user feel seen. Every card should trigger "yep, that's us."
// Left accent border + emotional icon + punchy 1-line summary.

const pains = [
  {
    icon: "📋",
    headline: "You're building the same report. Again.",
    body: "Every Monday, someone pulls the same numbers from the same places and pastes them into the same spreadsheet. That's not work. That's waste.",
  },
  {
    icon: "📩",
    headline: "That lead went cold while your team was busy.",
    body: "They filled in the form. Nobody followed up in time. They went with your competitor. Your process isn't broken — it just doesn't exist.",
  },
  {
    icon: "🔁",
    headline: "Someone made a mistake. Again.",
    body: "Manual processes mean manual errors. When your ops run on memory and habit, one busy day is all it takes to break something that costs you.",
  },
  {
    icon: "📊",
    headline: "You're guessing. The data's there — just not where you can see it.",
    body: "You have the numbers. They live in three different tabs, two group chats, and someone's email. That's not visibility. That's chaos.",
  },
];

export default function Problem() {
  return (
    // Darker background creates contrast from hero — forces visual separation
    <section id="problem" className="py-28 px-6 bg-[#070f1a] relative overflow-hidden">
      {/* Subtle radial from top-right for depth */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#2C5364]/8 rounded-full blur-[120px] -z-0" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section opener — conversational, not corporate */}
        <div className="mb-16">
          <p className="text-[#7ECCD8] text-sm font-semibold uppercase tracking-[0.15em] mb-4">
            Sound familiar?
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1] max-w-2xl">
            Manual work is quietly{" "}
            <span className="text-slate-500">bleeding your business dry.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {pains.map((p) => (
            // Left border accent + glassmorphism card
            <div
              key={p.headline}
              className="card-glow group rounded-2xl border border-white/[0.05] bg-white/[0.02] p-6 pl-5 relative overflow-hidden hover:bg-white/[0.04] transition-all duration-300"
            >
              {/* Left accent bar — animates taller on hover */}
              <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-r-full bg-gradient-to-b from-[#2C5364] to-[#7ECCD8]/40 opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="text-3xl mb-4 pl-3">{p.icon}</div>
              <h3 className="text-white font-bold text-base mb-2 pl-3 leading-snug">
                {p.headline}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed pl-3">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Bridge to solution */}
        <div className="mt-16 pt-12 border-t border-white/[0.05] text-center">
          <p className="text-slate-400 text-lg">
            These aren&apos;t unique problems.{" "}
            <span className="text-white font-semibold">Every SMB has them.</span>{" "}
            Most just learn to live with them.
            <span className="text-[#7ECCD8]"> You don&apos;t have to.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
