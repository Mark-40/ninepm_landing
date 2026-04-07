// ProductOutputs — "This is what you'll actually get."
// Design: 3 side-by-side product output cards. Each simulates a real deliverable.
// Card 1: Daily Sales Report (email-style)
// Card 2: Lead Pipeline (kanban columns)
// Card 3: Automation Activity Log (event feed)
// Goal: make the outcomes tangible. Users can visualize exactly what they'd receive.

const reportBars = [55, 72, 48, 88, 65, 95, 80, 100, 78, 92, 85, 98];

const leadPipeline = [
  { stage: "New",       color: "text-slate-400",   borderColor: "border-slate-700/50",  leads: ["TechCorp PH", "Maria Store",  "StartupX"] },
  { stage: "Contacted", color: "text-blue-400",    borderColor: "border-blue-800/50",   leads: ["Ayala Brand", "SMB Direct",   "LocalShop PH"] },
  { stage: "Qualified", color: "text-[#7ECCD8]",   borderColor: "border-[#2C5364]/60",  leads: ["RetailPH Inc", "GrowthCo"] },
  { stage: "Closed",    color: "text-green-400",   borderColor: "border-green-900/50",  leads: ["BrandX", "MedCorp"] },
];

const activityLog = [
  { time: "08:00", action: "Daily sales report sent to team",         type: "report",   icon: "📊" },
  { time: "08:01", action: "Invoice reminder → Santos Clinic",        type: "billing",  icon: "📩" },
  { time: "09:15", action: "Follow-up sent to 3 new leads",           type: "crm",      icon: "✉️" },
  { time: "10:30", action: "Low stock alert: Blue Polo (3 units)",    type: "alert",    icon: "⚠️" },
  { time: "11:00", action: "Appointment reminder → 5 patients",       type: "schedule", icon: "📅" },
  { time: "14:00", action: "Weekly summary scheduled for Monday",     type: "report",   icon: "🗓️" },
];

export default function ProductOutputs() {
  return (
    <section className="py-28 px-6 bg-[#0a1628] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2C5364]/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#7ECCD8] text-sm font-semibold uppercase tracking-[0.15em] mb-4">
            What You&apos;ll Actually Get
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1]">
            Concrete outputs.
            <br />
            <span className="text-slate-500">Not vague improvements.</span>
          </h2>
          <p className="mt-5 text-slate-500 max-w-xl mx-auto text-base">
            Every system we build produces something you can see and measure every single day.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 items-start">

          {/* ── Card 1: Daily Sales Report ─────────────────────── */}
          <div className="rounded-2xl border border-[#2C5364]/25 bg-[#0d1e2e] overflow-hidden card-glow">
            {/* Card label */}
            <div className="px-4 py-3 border-b border-[#2C5364]/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#2C5364]/30 flex items-center justify-center text-xs">📊</div>
                <span className="text-xs text-white font-semibold">Daily Sales Report</span>
              </div>
              <span className="text-[9px] text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-full">
                Auto · 8:00 AM
              </span>
            </div>

            <div className="p-4">
              {/* Email-style header */}
              <div className="rounded-lg bg-[#203A43]/30 border border-[#2C5364]/20 p-3 mb-4 text-[10px] space-y-1">
                <div className="flex gap-2">
                  <span className="text-slate-600 w-8">From</span>
                  <span className="text-slate-400">reports@ninepm.io</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-slate-600 w-8">To</span>
                  <span className="text-[#7ECCD8]">owner@yourstore.com</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-slate-600 w-8">Re</span>
                  <span className="text-white font-medium">Your Daily Summary — Apr 7</span>
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-2 mb-4">
                {[
                  { label: "Revenue Today",     value: "₱18,450", delta: "↑ 23%", dc: "text-green-400" },
                  { label: "Orders Placed",     value: "42",       delta: "↑ 8 new", dc: "text-green-400" },
                  { label: "Avg Order Value",   value: "₱439",     delta: "stable",  dc: "text-slate-500" },
                  { label: "Best Seller",       value: "Blue Polo", delta: "12 units", dc: "text-[#7ECCD8]" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">{s.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-white font-semibold">{s.value}</span>
                      <span className={`text-[9px] ${s.dc}`}>{s.delta}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mini bar chart */}
              <div className="rounded-lg bg-[#203A43]/20 p-3 border border-[#2C5364]/15">
                <p className="text-[9px] text-slate-600 mb-2 uppercase tracking-wider">Revenue (last 12 days)</p>
                <div className="flex items-end gap-1 h-10">
                  {reportBars.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm transition-all"
                      style={{
                        height: `${h}%`,
                        background: i === reportBars.length - 1
                          ? "linear-gradient(to top, #2C5364, #7ECCD8)"
                          : "rgba(44, 83, 100, 0.5)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Card 2: Lead Pipeline Dashboard ────────────────── */}
          <div className="rounded-2xl border border-[#2C5364]/25 bg-[#0d1e2e] overflow-hidden card-glow">
            <div className="px-4 py-3 border-b border-[#2C5364]/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#2C5364]/30 flex items-center justify-center text-xs">📋</div>
                <span className="text-xs text-white font-semibold">Lead Pipeline</span>
              </div>
              <span className="text-[9px] text-[#7ECCD8] bg-[#2C5364]/20 border border-[#2C5364]/30 px-2 py-0.5 rounded-full">
                Live
              </span>
            </div>

            <div className="p-4">
              {/* Pipeline value */}
              <div className="mb-4 p-3 rounded-lg bg-[#203A43]/30 border border-[#2C5364]/20 flex items-center justify-between">
                <div>
                  <p className="text-[9px] text-slate-600 uppercase tracking-wider">Total Pipeline</p>
                  <p className="text-xl font-black text-white">₱485,000</p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] text-slate-600">Active leads</p>
                  <p className="text-xl font-black text-[#7ECCD8]">22</p>
                </div>
              </div>

              {/* Kanban columns */}
              <div className="grid grid-cols-2 gap-2">
                {leadPipeline.map((col) => (
                  <div key={col.stage} className={`rounded-xl border ${col.borderColor} bg-[#203A43]/15 p-2.5`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[9px] font-bold uppercase tracking-wider ${col.color}`}>{col.stage}</span>
                      <span className="text-[9px] text-slate-600">{col.leads.length}</span>
                    </div>
                    <div className="space-y-1.5">
                      {col.leads.map((lead) => (
                        <div key={lead} className="rounded-md bg-[#0a1628]/60 border border-white/[0.04] px-2 py-1.5">
                          <p className="text-[10px] text-slate-300 font-medium truncate">{lead}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Auto follow-up note */}
              <div className="mt-3 flex items-center gap-2 text-[10px] text-[#7ECCD8]/70 bg-[#2C5364]/10 border border-[#2C5364]/20 rounded-lg px-3 py-2">
                <span>✉</span>
                <span>3 follow-ups sent automatically today</span>
              </div>
            </div>
          </div>

          {/* ── Card 3: Automation Activity Log ────────────────── */}
          <div className="rounded-2xl border border-[#2C5364]/25 bg-[#0d1e2e] overflow-hidden card-glow">
            <div className="px-4 py-3 border-b border-[#2C5364]/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#2C5364]/30 flex items-center justify-center text-xs">⚡</div>
                <span className="text-xs text-white font-semibold">Automation Log</span>
              </div>
              <span className="text-[9px] text-slate-500">Today, Apr 7</span>
            </div>

            <div className="p-4">
              {/* Summary stat */}
              <div className="mb-4 p-3 rounded-lg bg-gradient-to-r from-[#2C5364]/20 to-transparent border border-[#2C5364]/20">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-black text-[#7ECCD8]">247</span>
                  <span className="text-sm text-slate-400">tasks automated this month</span>
                </div>
                <div className="mt-1.5 flex items-center gap-1 text-[10px] text-green-400">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  All completed without human input
                </div>
              </div>

              {/* Activity feed */}
              <div className="space-y-1">
                {activityLog.map((item) => (
                  <div key={item.action} className="flex items-start gap-2.5 px-2 py-2 rounded-lg hover:bg-[#2C5364]/10 transition-colors group">
                    {/* Timeline dot */}
                    <div className="flex flex-col items-center mt-0.5 flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2C5364] group-hover:bg-[#7ECCD8] transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] text-slate-300 leading-tight block">{item.icon} {item.action}</span>
                    </div>
                    <span className="text-[9px] text-slate-600 font-mono flex-shrink-0">{item.time}</span>
                  </div>
                ))}
              </div>

              {/* Active automations */}
              <div className="mt-4 pt-3 border-t border-[#2C5364]/15">
                <p className="text-[9px] text-slate-600 uppercase tracking-wider mb-2">Active Workflows</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Invoice Reminder", "Lead Follow-up", "Daily Report", "Stock Alert"].map((w) => (
                    <span key={w} className="text-[9px] px-2 py-0.5 rounded-full bg-[#2C5364]/20 text-[#7ECCD8] border border-[#2C5364]/30">
                      ● {w}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
