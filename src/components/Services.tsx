const services = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Workflow Automation",
    body: "We map your repetitive processes — approvals, notifications, data entry — and automate them end to end. Your team stops doing busywork and starts doing real work.",
    tag: "Most popular",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Automated Reporting",
    body: "Get the numbers you care about delivered automatically — daily, weekly, or in real time. No more building the same report from scratch every Monday morning.",
    tag: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    title: "Lead & Follow-Up Automation",
    body: "Never let a lead go cold again. We set up automated follow-up sequences that engage prospects at the right moment — without anyone having to remember to send a message.",
    tag: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "Internal Dashboards & Tools",
    body: "Custom dashboards that show your team exactly what they need — inventory, sales, appointments, performance. Built for your business, not a generic template.",
    tag: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
      </svg>
    ),
    title: "AI-Powered Assistants",
    body: "Deploy a smart assistant that handles customer inquiries, qualifies leads, or supports your internal team — available 24/7 without adding headcount.",
    tag: "New",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#7ECCD8] text-sm font-medium uppercase tracking-widest mb-4 text-center">
          What We Build
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Everything your operations need to run on autopilot
        </h2>
        <p className="text-slate-400 text-center max-w-xl mx-auto mb-16">
          We don&apos;t sell software. We build the systems that run behind your
          business — quietly, reliably, and exactly the way you need them.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`relative rounded-2xl border border-[#2C5364]/20 bg-[#203A43]/20 p-6 hover:border-[#2C5364]/50 hover:bg-[#203A43]/35 transition-all group ${
                i === 0 ? "ring-1 ring-[#2C5364]/30" : ""
              }`}
            >
              {s.tag && (
                <span className="absolute top-4 right-4 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#2C5364]/30 text-[#7ECCD8] border border-[#2C5364]/40">
                  {s.tag}
                </span>
              )}
              <div className="w-9 h-9 rounded-xl bg-[#2C5364]/20 text-[#7ECCD8] flex items-center justify-center mb-4 group-hover:bg-[#2C5364]/35 transition-colors">
                {s.icon}
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
