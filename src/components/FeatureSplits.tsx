// FeatureSplits — 4 alternating split-layout sections (Stripe/Vercel style).
// Each section: text on one side, rich UI mockup on the other.
// Alternates: text-left → visual-left → text-left → visual-left
//
// Section 1: Automated Reports    (Text L, Report email mockup R)
// Section 2: Lead Follow-up       (CRM pipeline L, Text R)
// Section 3: Workflow Automation  (Text L, Flow diagram R)
// Section 4: Business Dashboard   (Dashboard overview L, Text R)

// ─── Mockup 1: Auto-generated report email ────────────────────────
function ReportMockup() {
  const bars = [38, 52, 44, 68, 58, 75, 64, 82, 72, 88, 80, 100];
  const products = [
    { name: "Blue Polo Shirt",  rev: "₱10,200", units: 12, pct: 100 },
    { name: "Red Floral Dress", rev: "₱8,400",  units: 7,  pct: 82  },
    { name: "White Basic Tee",  rev: "₱5,850",  units: 9,  pct: 57  },
  ];

  return (
    <div className="rounded-2xl border border-[#2C5364]/35 bg-[#0d1e2e] overflow-hidden shadow-2xl shadow-black/50">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0a1628] border-b border-[#2C5364]/20">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <span className="ml-3 text-[11px] text-slate-500 font-medium">Daily Sales Summary — Apr 7, 2026</span>
        <span className="ml-auto text-[9px] text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-full">
          Auto-generated
        </span>
      </div>

      <div className="p-5">
        {/* Email header */}
        <div className="rounded-xl bg-[#203A43]/25 border border-[#2C5364]/20 p-3.5 mb-4 space-y-1.5">
          {[
            { label: "From",     value: "reports@ninepm.io",        highlight: false },
            { label: "To",       value: "owner@yourbusiness.com",    highlight: true  },
            { label: "Schedule", value: "Every day at 8:00 AM",      highlight: false },
          ].map((row) => (
            <div key={row.label} className="flex items-center gap-2 text-[11px]">
              <span className="text-slate-600 w-14 font-medium">{row.label}</span>
              <span className={row.highlight ? "text-[#7ECCD8]" : "text-slate-400"}>{row.value}</span>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { label: "Revenue Today",  value: "₱18,450", delta: "↑ 23%",   dc: "text-green-400"  },
            { label: "Orders",         value: "42",       delta: "↑ 8 new", dc: "text-green-400"  },
            { label: "Best Seller",    value: "Blue Polo",delta: "12 sold", dc: "text-[#7ECCD8]"  },
          ].map((s) => (
            <div key={s.label} className="rounded-xl bg-[#203A43]/30 border border-[#2C5364]/15 p-3 text-center">
              <p className="text-[9px] text-slate-600 uppercase tracking-wider mb-1">{s.label}</p>
              <p className="text-sm font-black text-white leading-none mb-0.5">{s.value}</p>
              <p className={`text-[9px] ${s.dc}`}>{s.delta}</p>
            </div>
          ))}
        </div>

        {/* Bar chart */}
        <div className="rounded-xl bg-[#203A43]/20 border border-[#2C5364]/10 p-4 mb-4">
          <div className="flex items-center justify-between mb-2.5">
            <p className="text-[9px] text-slate-600 uppercase tracking-wider font-semibold">
              Revenue — last 12 days
            </p>
            <p className="text-[9px] text-[#7ECCD8]">₱193,200 total</p>
          </div>
          <div className="flex items-end gap-1 h-14">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm transition-all"
                style={{
                  height: `${h}%`,
                  background:
                    i === bars.length - 1
                      ? "linear-gradient(to top, #2C5364, #7ECCD8)"
                      : i > bars.length - 4
                      ? "rgba(44,83,100,0.7)"
                      : "rgba(44,83,100,0.35)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Top products */}
        <div className="space-y-2">
          <p className="text-[9px] text-slate-600 uppercase tracking-wider font-semibold mb-2">Top Products</p>
          {products.map((p) => (
            <div key={p.name} className="flex items-center gap-3">
              <span className="text-[10px] text-slate-400 w-28 truncate">{p.name}</span>
              <div className="flex-1 h-1.5 rounded-full bg-[#203A43]/40">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#2C5364] to-[#7ECCD8]/60"
                  style={{ width: `${p.pct}%` }}
                />
              </div>
              <span className="text-[10px] text-white font-semibold w-14 text-right">{p.rev}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Mockup 2: CRM Lead Pipeline ──────────────────────────────────
function LeadMockup() {
  const columns = [
    {
      stage: "New",
      color: "text-slate-400",
      border: "border-slate-700/40",
      dot: "bg-slate-500",
      leads: [
        { name: "TechCorp PH",   val: "₱85k", auto: false },
        { name: "Maria's Store", val: "₱22k", auto: true  },
        { name: "StartupX",      val: "₱15k", auto: true  },
      ],
    },
    {
      stage: "Contacted",
      color: "text-blue-400",
      border: "border-blue-800/40",
      dot: "bg-blue-500",
      leads: [
        { name: "Ayala Brand",   val: "₱120k", auto: true  },
        { name: "SMB Direct",    val: "₱48k",  auto: false },
        { name: "LocalShop PH",  val: "₱18k",  auto: true  },
      ],
    },
    {
      stage: "Qualified",
      color: "text-[#7ECCD8]",
      border: "border-[#2C5364]/50",
      dot: "bg-[#7ECCD8]",
      leads: [
        { name: "RetailPH Inc",  val: "₱95k", auto: false },
        { name: "GrowthCo MNL", val: "₱60k", auto: true  },
      ],
    },
    {
      stage: "Closed",
      color: "text-green-400",
      border: "border-green-900/40",
      dot: "bg-green-500",
      leads: [
        { name: "BrandX",       val: "₱42k", auto: false },
        { name: "MedCorpPH",    val: "₱38k", auto: false },
      ],
    },
  ];

  return (
    <div className="rounded-2xl border border-[#2C5364]/35 bg-[#0d1e2e] overflow-hidden shadow-2xl shadow-black/50">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0a1628] border-b border-[#2C5364]/20">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <span className="ml-3 text-[11px] text-slate-500 font-medium">Lead Pipeline</span>
        <span className="ml-auto flex items-center gap-1 text-[9px] text-green-400">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Live
        </span>
      </div>

      {/* Summary bar */}
      <div className="grid grid-cols-3 border-b border-[#2C5364]/15">
        {[
          { label: "Active Leads",   value: "22"     },
          { label: "Pipeline Value", value: "₱543k"  },
          { label: "Auto Replies",   value: "8 today" },
        ].map((s) => (
          <div key={s.label} className="px-4 py-2.5 border-r border-[#2C5364]/10 last:border-0">
            <p className="text-[9px] text-slate-600 mb-0.5">{s.label}</p>
            <p className="text-sm font-black text-white">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Pipeline progress bar */}
      <div className="px-4 pt-3 pb-1">
        <div className="flex rounded-full overflow-hidden h-1">
          <div className="bg-slate-600/50"   style={{ width: "27%" }} />
          <div className="bg-blue-500/50"    style={{ width: "27%" }} />
          <div className="bg-[#7ECCD8]/60"   style={{ width: "18%" }} />
          <div className="bg-green-500/60"   style={{ width: "18%" }} />
          <div className="bg-green-700/40"   style={{ width: "10%" }} />
        </div>
      </div>

      {/* Kanban columns */}
      <div className="grid grid-cols-4 gap-2 p-3">
        {columns.map((col) => (
          <div key={col.stage} className={`rounded-xl border ${col.border} bg-[#203A43]/15 p-2`}>
            <div className="flex items-center gap-1.5 mb-2">
              <span className={`w-1.5 h-1.5 rounded-full ${col.dot}`} />
              <span className={`text-[9px] font-bold uppercase tracking-wider ${col.color}`}>
                {col.stage}
              </span>
              <span className="text-[9px] text-slate-600 ml-auto">{col.leads.length}</span>
            </div>
            <div className="space-y-1.5">
              {col.leads.map((lead) => (
                <div key={lead.name} className="rounded-lg bg-[#0a1628]/70 border border-white/[0.04] px-2 py-1.5">
                  <p className="text-[10px] text-slate-200 font-medium truncate leading-tight">{lead.name}</p>
                  <div className="flex items-center justify-between mt-0.5">
                    <p className="text-[9px] text-slate-600 font-mono">{lead.val}</p>
                    {lead.auto && (
                      <span className="text-[8px] text-[#7ECCD8]/70">auto ✓</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="px-4 pb-3">
        <div className="flex items-center gap-2 text-[10px] text-[#7ECCD8]/60 bg-[#2C5364]/10 border border-[#2C5364]/20 rounded-lg px-3 py-2">
          <span>✉</span>
          <span>8 follow-up messages sent automatically today</span>
        </div>
      </div>
    </div>
  );
}

// ─── Mockup 3: Workflow automation flow diagram ────────────────────
function WorkflowMockup() {
  return (
    <div className="rounded-2xl border border-[#2C5364]/35 bg-[#0d1e2e] overflow-hidden shadow-2xl shadow-black/50">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0a1628] border-b border-[#2C5364]/20">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <span className="ml-3 text-[11px] text-slate-500 font-medium">
          Workflow: Lead Follow-Up Sequence
        </span>
        <span className="ml-auto flex items-center gap-1 text-[9px] text-green-400 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Active
        </span>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 border-b border-[#2C5364]/15">
        {[
          { label: "Runs this month", value: "247" },
          { label: "Avg completion",  value: "3 days" },
          { label: "Success rate",    value: "98.4%" },
        ].map((s) => (
          <div key={s.label} className="px-3 py-2.5 border-r border-[#2C5364]/10 last:border-0 text-center">
            <p className="text-sm font-black text-white">{s.value}</p>
            <p className="text-[9px] text-slate-600">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Flow diagram */}
      <div className="p-5">
        <div className="flex flex-col items-center gap-0">

          {/* Trigger node */}
          <div className="w-full max-w-[260px] rounded-xl border border-[#7ECCD8]/30 bg-[#7ECCD8]/8 px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#7ECCD8]/15 flex items-center justify-center flex-shrink-0 text-sm">🔔</div>
            <div>
              <p className="text-[9px] text-[#7ECCD8] uppercase tracking-wider font-bold mb-0.5">Trigger</p>
              <p className="text-[11px] text-white font-semibold">New lead submits form</p>
            </div>
          </div>

          {/* Connector */}
          <div className="flex flex-col items-center py-1.5">
            <div className="w-px h-4 bg-[#2C5364]/50" />
            <svg className="w-3 h-3 text-[#2C5364]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 14l-5-5h10l-5 5z" />
            </svg>
          </div>

          {/* Action 1 */}
          <div className="w-full max-w-[260px] rounded-xl border border-purple-500/30 bg-purple-500/8 px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-500/15 flex items-center justify-center flex-shrink-0 text-sm">✉️</div>
            <div className="flex-1">
              <p className="text-[9px] text-purple-400 uppercase tracking-wider font-bold mb-0.5">Action</p>
              <p className="text-[11px] text-white font-semibold">Send welcome email</p>
            </div>
            <span className="text-[9px] text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded-full border border-green-500/20 flex-shrink-0">
              ✓ Done
            </span>
          </div>

          {/* Connector */}
          <div className="flex flex-col items-center py-1.5">
            <div className="w-px h-4 bg-[#2C5364]/50" />
            <svg className="w-3 h-3 text-[#2C5364]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 14l-5-5h10l-5 5z" />
            </svg>
          </div>

          {/* Delay node */}
          <div className="w-full max-w-[260px] rounded-xl border border-amber-500/30 bg-amber-500/8 px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center flex-shrink-0 text-sm">⏱</div>
            <div className="flex-1">
              <p className="text-[9px] text-amber-400 uppercase tracking-wider font-bold mb-0.5">Delay</p>
              <p className="text-[11px] text-white font-semibold">Wait 2 business days</p>
            </div>
            <span className="text-[9px] text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded-full border border-green-500/20 flex-shrink-0">
              ✓ Done
            </span>
          </div>

          {/* Connector */}
          <div className="flex flex-col items-center py-1.5">
            <div className="w-px h-4 bg-[#2C5364]/50" />
            <svg className="w-3 h-3 text-[#2C5364]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 14l-5-5h10l-5 5z" />
            </svg>
          </div>

          {/* Action 2 */}
          <div className="w-full max-w-[260px] rounded-xl border border-purple-500/30 bg-purple-500/8 px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-500/15 flex items-center justify-center flex-shrink-0 text-sm">📩</div>
            <div className="flex-1">
              <p className="text-[9px] text-purple-400 uppercase tracking-wider font-bold mb-0.5">Action</p>
              <p className="text-[11px] text-white font-semibold">Send follow-up email</p>
            </div>
            <span className="text-[9px] text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded-full border border-green-500/20 flex-shrink-0">
              ✓ Done
            </span>
          </div>

          {/* Connector to branch */}
          <div className="flex flex-col items-center py-1.5">
            <div className="w-px h-4 bg-[#2C5364]/50" />
            <svg className="w-3 h-3 text-[#2C5364]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 14l-5-5h10l-5 5z" />
            </svg>
          </div>

          {/* Branch condition */}
          <div className="w-full max-w-[260px] rounded-xl border border-yellow-500/30 bg-yellow-500/8 px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-yellow-500/15 flex items-center justify-center flex-shrink-0 text-sm">🔀</div>
            <div>
              <p className="text-[9px] text-yellow-400 uppercase tracking-wider font-bold mb-0.5">Condition</p>
              <p className="text-[11px] text-white font-semibold">Did they reply?</p>
            </div>
          </div>

          {/* Branch outcomes */}
          <div className="w-full max-w-[260px] grid grid-cols-2 gap-2 mt-2">
            <div className="rounded-xl border border-green-600/30 bg-green-900/15 px-3 py-2 text-center">
              <p className="text-[9px] text-green-400 font-bold">YES</p>
              <p className="text-[10px] text-slate-300 mt-0.5">Mark as Qualified</p>
            </div>
            <div className="rounded-xl border border-slate-600/30 bg-slate-800/20 px-3 py-2 text-center">
              <p className="text-[9px] text-slate-400 font-bold">NO</p>
              <p className="text-[10px] text-slate-300 mt-0.5">Send Reminder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Mockup 4: Business overview dashboard ─────────────────────────
function DashboardMockup() {
  const activity = [
    { icon: "📊", text: "Daily report sent to 3 recipients",  time: "8:00 AM",  done: true  },
    { icon: "📩", text: "Follow-up sent to 5 leads",          time: "9:15 AM",  done: true  },
    { icon: "⚠️", text: "Low stock alert: Blue Polo (3 left)", time: "10:30 AM", done: true  },
    { icon: "✅", text: "Invoice #1042 marked as paid",        time: "11:45 AM", done: true  },
    { icon: "📅", text: "Weekly summary scheduled",            time: "Monday",   done: false },
  ];

  return (
    <div className="rounded-2xl border border-[#2C5364]/35 bg-[#0d1e2e] overflow-hidden shadow-2xl shadow-black/50">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0a1628] border-b border-[#2C5364]/20">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <span className="ml-3 text-[11px] text-slate-500 font-medium">Business Overview</span>
        <span className="ml-auto flex items-center gap-1 text-[9px] text-green-400">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Live data
        </span>
      </div>

      <div className="p-4">
        {/* KPI cards */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {[
            { label: "Monthly Revenue", value: "₱485,000", delta: "↑ 28%",   dc: "text-green-400",  color: "text-white" },
            { label: "Total Orders",    value: "342",       delta: "↑ 12%",   dc: "text-green-400",  color: "text-white" },
            { label: "Lead Close Rate", value: "34%",       delta: "↑ 6pts",  dc: "text-[#7ECCD8]",  color: "text-[#7ECCD8]" },
            { label: "Tasks Automated", value: "247",       delta: "this mo", dc: "text-purple-400", color: "text-purple-400" },
          ].map((k) => (
            <div key={k.label} className="rounded-xl bg-[#203A43]/30 border border-[#2C5364]/15 p-3">
              <p className="text-[9px] text-slate-600 mb-1">{k.label}</p>
              <p className={`text-xl font-black leading-none mb-0.5 ${k.color}`}>{k.value}</p>
              <p className={`text-[9px] ${k.dc}`}>{k.delta}</p>
            </div>
          ))}
        </div>

        {/* SVG Area chart */}
        <div className="rounded-xl bg-[#203A43]/20 border border-[#2C5364]/10 p-3 mb-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[9px] text-slate-600 uppercase tracking-wider font-semibold">Revenue Trend</p>
            <p className="text-[9px] text-[#7ECCD8]">April 2026</p>
          </div>
          <svg viewBox="0 0 300 60" className="w-full h-12" preserveAspectRatio="none">
            <defs>
              <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#7ECCD8" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#7ECCD8" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            {/* Area fill */}
            <path
              d="M0,48 L27,42 L54,46 L81,30 L108,36 L135,18 L162,24 L189,6 L216,14 L243,8 L270,12 L300,2 L300,60 L0,60 Z"
              fill="url(#areaGrad)"
            />
            {/* Line */}
            <path
              d="M0,48 L27,42 L54,46 L81,30 L108,36 L135,18 L162,24 L189,6 L216,14 L243,8 L270,12 L300,2"
              fill="none"
              stroke="#7ECCD8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* End dot */}
            <circle cx="300" cy="2" r="2.5" fill="#7ECCD8" />
          </svg>
        </div>

        {/* Activity feed */}
        <div>
          <p className="text-[9px] text-slate-600 uppercase tracking-wider font-semibold mb-2">
            Today&apos;s Automation Log
          </p>
          <div className="space-y-1">
            {activity.map((a) => (
              <div
                key={a.text}
                className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg hover:bg-[#2C5364]/10 transition-colors"
              >
                <span className="text-[11px] flex-shrink-0">{a.icon}</span>
                <span className="text-[10px] text-slate-300 flex-1 leading-tight">{a.text}</span>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <span className="text-[9px] text-slate-600 font-mono">{a.time}</span>
                  {a.done
                    ? <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    : <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Section definitions ──────────────────────────────────────────
const sections = [
  {
    tag: "Automated Reporting",
    tagEmoji: "📊",
    title: "Stop building reports by hand.",
    body: "Every number your business needs — revenue, orders, leads, inventory — lands in your inbox before your team starts their day. You set it up once. It runs every day, forever.",
    outcomes: [
      "Daily and weekly reports sent automatically",
      "Sales, orders, and KPIs in a single view",
      "Custom schedule — daily, weekly, or real-time",
      "Delivered to your inbox or WhatsApp",
    ],
    visual: <ReportMockup />,
    flip: false,
    bg: "bg-[#0a1628]",
  },
  {
    tag: "Lead Follow-Up Automation",
    tagEmoji: "📩",
    title: "Every lead followed up. Without fail.",
    body: "Most deals are lost not because of the product — but because no one followed up fast enough. We build sequences that respond within seconds of a new inquiry and keep following up until you get an answer.",
    outcomes: [
      "Instant response to every new form submission",
      "Multi-step sequences over days or weeks",
      "Lead status updated automatically in your pipeline",
      "Alerts when a hot lead needs human attention",
    ],
    visual: <LeadMockup />,
    flip: true,
    bg: "bg-[#070f1a]",
  },
  {
    tag: "Workflow Automation",
    tagEmoji: "⚡",
    title: "Map it once. Let it run forever.",
    body: "Approvals, alerts, notifications, data entry — every repetitive task in your business can be automated. We design the workflow, build the triggers, and deploy it. You stop doing it manually the same week.",
    outcomes: [
      "Multi-step workflows with conditions and branches",
      "Triggers from forms, emails, schedules, or APIs",
      "Handles both simple and complex logic",
      "Error alerts if something needs attention",
    ],
    visual: <WorkflowMockup />,
    flip: false,
    bg: "bg-[#0a1628]",
  },
  {
    tag: "Business Dashboard",
    tagEmoji: "🖥️",
    title: "Your whole business, visible in one screen.",
    body: "Custom dashboards built from your actual data — not a generic template. Sales by channel, inventory levels, team performance, lead conversion. Always live. Always accurate. On any device.",
    outcomes: [
      "Pulls live data from all your existing tools",
      "Fully custom to your KPIs and how you work",
      "Mobile-friendly for on-the-go visibility",
      "Role-based access for your team",
    ],
    visual: <DashboardMockup />,
    flip: true,
    bg: "bg-[#070f1a]",
  },
];

// ─── Main export ──────────────────────────────────────────────────
export default function FeatureSplits() {
  return (
    <div id="features">
      {sections.map((s, i) => (
        <section key={s.tag} className={`py-24 px-6 ${s.bg} relative overflow-hidden`}>
          {/* Subtle section divider at top */}
          {i > 0 && (
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2C5364]/25 to-transparent" />
          )}

          {/* Ambient glow — alternates sides */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#2C5364]/8 rounded-full blur-[120px] -z-0 pointer-events-none ${
              s.flip ? "right-0 translate-x-1/3" : "left-0 -translate-x-1/3"
            }`}
          />

          <div
            className={`max-w-6xl mx-auto relative z-10 flex flex-col items-center gap-12 xl:gap-20 lg:flex-row ${
              s.flip ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* ── Text side ─────────────────────────────── */}
            <div className="w-full lg:w-1/2 flex flex-col">
              {/* Tag chip */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2C5364]/15 border border-[#2C5364]/30 text-[#7ECCD8] text-xs font-semibold mb-6 w-fit">
                <span>{s.tagEmoji}</span>
                <span>{s.tag}</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl md:text-4xl font-black text-white leading-[1.1] tracking-tight mb-5">
                {s.title}
              </h2>

              {/* Body */}
              <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8">
                {s.body}
              </p>

              {/* Outcome list */}
              <ul className="space-y-3 mb-8">
                {s.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-[#2C5364]/30 border border-[#2C5364]/40 flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-[#7ECCD8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {o}
                  </li>
                ))}
              </ul>

              {/* Section CTA */}
              <a
                href="https://calendly.com/arrolle14/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#7ECCD8] font-medium hover:text-white transition-colors w-fit group"
              >
                See how it works for your business
                <svg
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* ── Visual side ───────────────────────────── */}
            <div className="w-full lg:w-1/2 relative">
              {/* Glow behind mockup */}
              <div className="absolute inset-0 -z-10 rounded-3xl bg-[#2C5364]/8 blur-3xl scale-110 pointer-events-none" />
              {s.visual}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
