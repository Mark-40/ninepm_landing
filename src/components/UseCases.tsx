// UseCases — industry-specific mockups.
// Design: 3 stacked sections, alternating layout (desc left/visual right, visual left/desc right).
// Each has a real-looking dashboard for that business type.
// Goal: SMB owner immediately sees themselves in one of these.

// ── Clinic appointment dashboard ──────────────────────────────────
function ClinicMockup() {
  const appointments = [
    { time: "09:00", doctor: "Dr. Santos",  patient: "Maria Cruz",     status: "confirmed", statusColor: "text-green-400" },
    { time: "09:30", doctor: "Dr. Santos",  patient: "Pedro Reyes",    status: "reminded",  statusColor: "text-[#7ECCD8]" },
    { time: "10:00", doctor: "Dr. Lim",     patient: "Ana Gonzales",   status: "confirmed", statusColor: "text-green-400" },
    { time: "10:30", doctor: "Dr. Lim",     patient: "Carlos Tan",     status: "confirmed", statusColor: "text-green-400" },
    { time: "11:00", doctor: "Dr. Santos",  patient: "Isabel Sy",      status: "no reply",  statusColor: "text-yellow-400" },
    { time: "11:30", doctor: "Dr. Reyes",   patient: "Marco Dela Cruz", status: "reminded",  statusColor: "text-[#7ECCD8]" },
  ];

  return (
    <div className="rounded-2xl border border-[#2C5364]/30 bg-[#0d1e2e] overflow-hidden shadow-2xl shadow-black/40">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#2C5364]/20 bg-[#0a1628]">
        <div className="flex gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <span className="ml-2 text-[11px] text-slate-400 font-medium">🏥 MediCore Clinic — Today&apos;s Schedule</span>
        <span className="ml-auto flex items-center gap-1 text-[9px] text-green-400">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Live
        </span>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-4 border-b border-[#2C5364]/15">
        {[
          { label: "Appointments", value: "18",      color: "text-white" },
          { label: "Reminders Sent", value: "12",    color: "text-[#7ECCD8]" },
          { label: "Confirmed",    value: "15",      color: "text-green-400" },
          { label: "No-Show Risk", value: "1",       color: "text-yellow-400" },
        ].map((s) => (
          <div key={s.label} className="px-3 py-2.5 text-center border-r border-[#2C5364]/10 last:border-0">
            <p className={`text-lg font-black ${s.color}`}>{s.value}</p>
            <p className="text-[9px] text-slate-600">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Schedule table */}
      <div className="p-0">
        <div className="grid grid-cols-4 px-4 py-1.5 bg-[#203A43]/15 border-b border-[#2C5364]/10">
          {["Time", "Doctor", "Patient", "Status"].map((h) => (
            <span key={h} className="text-[9px] text-slate-600 uppercase tracking-wider font-semibold">{h}</span>
          ))}
        </div>
        {appointments.map((a, i) => (
          <div key={a.time + a.patient} className={`grid grid-cols-4 px-4 py-2 items-center ${i < appointments.length - 1 ? "border-b border-[#2C5364]/8" : ""}`}>
            <span className="text-[11px] text-slate-400 font-mono">{a.time}</span>
            <span className="text-[11px] text-slate-300">{a.doctor}</span>
            <span className="text-[11px] text-white font-medium">{a.patient}</span>
            <span className={`text-[10px] font-medium ${a.statusColor}`}>{a.status}</span>
          </div>
        ))}
      </div>

      {/* Footer bar */}
      <div className="px-4 py-2.5 border-t border-[#2C5364]/15 bg-[#203A43]/10 flex items-center justify-between">
        <span className="text-[10px] text-[#7ECCD8]/70">📩 12 reminders auto-sent today</span>
        <span className="text-[10px] text-slate-600">Monthly report ready →</span>
      </div>
    </div>
  );
}

// ── Online seller orders dashboard ────────────────────────────────
function SellerMockup() {
  const orders = [
    { id: "#1042", customer: "Maria Santos",  item: "Blue Polo Shirt",  price: "₱850",   status: "New",     sc: "bg-[#2C5364]/30 text-[#7ECCD8]",    replied: true },
    { id: "#1041", customer: "Carlos Reyes",  item: "Red Floral Dress", price: "₱1,200", status: "Shipped", sc: "bg-blue-500/20 text-blue-300",       replied: true },
    { id: "#1040", customer: "Ana Mendoza",   item: "White Basic Tee",  price: "₱650",   status: "Done",    sc: "bg-green-500/20 text-green-300",     replied: true },
    { id: "#1039", customer: "Juan Cruz",     item: "Cap + Bag Bundle",  price: "₱1,100", status: "Shipped", sc: "bg-blue-500/20 text-blue-300",       replied: true },
    { id: "#1038", customer: "Liza Ocampo",   item: "Blue Polo Shirt",  price: "₱850",   status: "New",     sc: "bg-[#2C5364]/30 text-[#7ECCD8]",    replied: true },
  ];

  return (
    <div className="rounded-2xl border border-[#2C5364]/30 bg-[#0d1e2e] overflow-hidden shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#2C5364]/20 bg-[#0a1628]">
        <div className="flex gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <span className="ml-2 text-[11px] text-slate-400 font-medium">🛒 ShopTrack — Orders Dashboard</span>
        <span className="ml-auto flex items-center gap-1 text-[9px] text-green-400">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Live
        </span>
      </div>

      <div className="grid grid-cols-4 border-b border-[#2C5364]/15">
        {[
          { label: "Today's Orders", value: "23",      color: "text-white" },
          { label: "Revenue",        value: "₱18,450", color: "text-[#7ECCD8]" },
          { label: "Auto-Replied",   value: "23/23",   color: "text-green-400" },
          { label: "Low Stock",      value: "1 alert",  color: "text-yellow-400" },
        ].map((s) => (
          <div key={s.label} className="px-3 py-2.5 text-center border-r border-[#2C5364]/10 last:border-0">
            <p className={`text-sm font-black ${s.color}`}>{s.value}</p>
            <p className="text-[9px] text-slate-600">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-5 px-4 py-1.5 bg-[#203A43]/15 border-b border-[#2C5364]/10">
        {["Order", "Customer", "Item", "Price", "Status"].map((h) => (
          <span key={h} className="text-[9px] text-slate-600 uppercase tracking-wider font-semibold">{h}</span>
        ))}
      </div>

      {orders.map((o, i) => (
        <div key={o.id} className={`grid grid-cols-5 px-4 py-2 items-center ${i < orders.length - 1 ? "border-b border-[#2C5364]/8" : ""}`}>
          <span className="text-[10px] text-slate-500 font-mono">{o.id}</span>
          <span className="text-[10px] text-white font-medium truncate">{o.customer.split(" ")[0]}</span>
          <span className="text-[10px] text-slate-400 truncate">{o.item}</span>
          <span className="text-[10px] text-slate-300 font-mono">{o.price}</span>
          <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-medium w-fit ${o.sc}`}>{o.status}</span>
        </div>
      ))}

      <div className="px-4 py-2.5 border-t border-[#2C5364]/15 bg-[#203A43]/10 flex items-center justify-between">
        <span className="text-[10px] text-[#7ECCD8]/70">✉ Auto-reply sent to all 23 customers</span>
        <span className="text-[10px] text-yellow-400/70">⚠ Blue Polo: 3 units left</span>
      </div>
    </div>
  );
}

// ── Agency CRM / lead pipeline ─────────────────────────────────────
function AgencyMockup() {
  const leads = [
    { company: "TechCorp Industries", contact: "Mark Rivera",  value: "₱85,000", stage: "Proposal",   last: "Proposal sent",       sc: "bg-purple-500/20 text-purple-300" },
    { company: "Ayala Retail Brand",  contact: "Ana Torres",  value: "₱120,000", stage: "Discovery",  last: "Call scheduled",      sc: "bg-[#2C5364]/30 text-[#7ECCD8]" },
    { company: "RetailPH Inc",        contact: "Jose Lim",    value: "₱45,000",  stage: "Qualified",  last: "Auto follow-up sent", sc: "bg-blue-500/20 text-blue-300" },
    { company: "StartupX PH",         contact: "Clara Cruz",  value: "₱32,000",  stage: "New",        last: "Intro email auto-sent", sc: "bg-slate-600/40 text-slate-400" },
    { company: "GrowthCo Manila",     contact: "Ryan Ong",    value: "₱60,000",  stage: "Proposal",   last: "Follow-up sent",      sc: "bg-purple-500/20 text-purple-300" },
  ];

  return (
    <div className="rounded-2xl border border-[#2C5364]/30 bg-[#0d1e2e] overflow-hidden shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#2C5364]/20 bg-[#0a1628]">
        <div className="flex gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <span className="ml-2 text-[11px] text-slate-400 font-medium">📈 Agency CRM — Lead Tracker</span>
        <span className="ml-auto flex items-center gap-1 text-[9px] text-green-400">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Live
        </span>
      </div>

      <div className="grid grid-cols-4 border-b border-[#2C5364]/15">
        {[
          { label: "Active Leads",    value: "22",       color: "text-white" },
          { label: "Pipeline Value",  value: "₱485k",    color: "text-[#7ECCD8]" },
          { label: "Auto Follow-ups", value: "3 today",  color: "text-green-400" },
          { label: "Closing Soon",    value: "5 leads",  color: "text-yellow-400" },
        ].map((s) => (
          <div key={s.label} className="px-3 py-2.5 text-center border-r border-[#2C5364]/10 last:border-0">
            <p className={`text-sm font-black ${s.color}`}>{s.value}</p>
            <p className="text-[9px] text-slate-600">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Stage progress bar */}
      <div className="px-4 py-3 border-b border-[#2C5364]/10">
        <div className="flex gap-1 h-1.5 rounded-full overflow-hidden">
          <div className="bg-slate-600/40 rounded-l-full" style={{ width: "18%" }} />
          <div className="bg-[#2C5364]/70" style={{ width: "27%" }} />
          <div className="bg-blue-500/50" style={{ width: "23%" }} />
          <div className="bg-purple-500/50" style={{ width: "23%" }} />
          <div className="bg-green-500/50 rounded-r-full" style={{ width: "9%" }} />
        </div>
        <div className="flex justify-between mt-1">
          {["New", "Contacted", "Qualified", "Proposal", "Closed"].map((s) => (
            <span key={s} className="text-[8px] text-slate-700">{s}</span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 px-4 py-1.5 bg-[#203A43]/15 border-b border-[#2C5364]/10">
        {["Company", "Value", "Stage", "Last Action"].map((h) => (
          <span key={h} className="text-[9px] text-slate-600 uppercase tracking-wider font-semibold">{h}</span>
        ))}
      </div>

      {leads.map((l, i) => (
        <div key={l.company} className={`grid grid-cols-4 px-4 py-2 items-center ${i < leads.length - 1 ? "border-b border-[#2C5364]/8" : ""}`}>
          <div className="min-w-0">
            <p className="text-[10px] text-white font-medium truncate">{l.company}</p>
            <p className="text-[9px] text-slate-600">{l.contact}</p>
          </div>
          <span className="text-[10px] text-slate-300 font-mono">{l.value}</span>
          <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-medium w-fit ${l.sc}`}>{l.stage}</span>
          <span className="text-[9px] text-slate-500 truncate">{l.last}</span>
        </div>
      ))}

      <div className="px-4 py-2.5 border-t border-[#2C5364]/15 bg-[#203A43]/10 flex items-center justify-between">
        <span className="text-[10px] text-[#7ECCD8]/70">✓ 3 follow-ups auto-sent today</span>
        <span className="text-[10px] text-slate-600">Weekly pipeline report → Monday 8 AM</span>
      </div>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────
const cases = [
  {
    tag: "Clinics & Healthcare",
    emoji: "🏥",
    title: "Patients reminded. Reports done. Zero manual work.",
    body: "Clinics using WhatsApp and spreadsheets to manage appointments and follow-ups. We replace that with automated reminders, digital scheduling, and monthly reports that generate themselves.",
    outcomes: ["Appointment reminders sent automatically", "Monthly income reports, zero effort", "Patient follow-up sequences built in"],
    visual: <ClinicMockup />,
    flip: false,
  },
  {
    tag: "Online Sellers & E-commerce",
    emoji: "🛒",
    title: "Every order tracked. Every customer replied to. Automatically.",
    body: "Sellers managing orders through chat groups and shared Excel files. We build a central order dashboard with automated customer replies, inventory alerts, and sales reports.",
    outcomes: ["Auto-reply to every new order", "Low stock alerts before you run out", "Daily sales summary at 8 AM"],
    visual: <SellerMockup />,
    flip: true,
  },
  {
    tag: "Agencies & Service Businesses",
    emoji: "📈",
    title: "Every lead followed up. No deal left behind.",
    body: "Agencies losing track of prospects across email threads and spreadsheets. We build CRM pipelines with automated follow-up sequences and real-time pipeline visibility.",
    outcomes: ["Leads automatically followed up", "Pipeline value tracked in real time", "Proposal reminders sent on schedule"],
    visual: <AgencyMockup />,
    flip: false,
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-28 px-6 bg-[#070f1a] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2C5364]/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[#7ECCD8] text-sm font-semibold uppercase tracking-[0.15em] mb-4">
            Built for Your Industry
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1]">
            We&apos;ve seen your operations.
            <br />
            <span className="text-slate-500">We know what to fix.</span>
          </h2>
        </div>

        <div className="space-y-24">
          {cases.map((c) => (
            <div
              key={c.tag}
              className={`grid lg:grid-cols-2 gap-10 xl:gap-16 items-center ${c.flip ? "lg:[direction:rtl]" : ""}`}
            >
              {/* Text side */}
              <div className={c.flip ? "[direction:ltr]" : ""}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2C5364]/15 border border-[#2C5364]/30 text-[#7ECCD8] text-xs font-semibold mb-5">
                  <span>{c.emoji}</span>
                  <span>{c.tag}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white leading-snug mb-4">
                  {c.title}
                </h3>
                <p className="text-slate-500 text-base leading-relaxed mb-6">{c.body}</p>
                <ul className="space-y-2.5">
                  {c.outcomes.map((o) => (
                    <li key={o} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <span className="w-5 h-5 rounded-full bg-[#2C5364]/30 flex items-center justify-center flex-shrink-0">
                        <svg className="w-2.5 h-2.5 text-[#7ECCD8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual side */}
              <div className={`${c.flip ? "[direction:ltr]" : ""} relative`}>
                {/* Ambient glow behind the mockup */}
                <div className="absolute inset-0 -z-10 rounded-3xl bg-[#2C5364]/10 blur-3xl scale-110" />
                {c.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
