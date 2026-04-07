// BeforeAfter — split comparison showing the actual contrast.
// Design: light Excel-style mock (before) vs dark NinePM dashboard (after).
// Using a real spreadsheet aesthetic on the left creates immediate recognition for SMB owners.
// The white background of the Excel panel against the dark page makes both sides pop.

const beforeRows = [
  { date: "Apr 1",  client: "Santos Clinic",  amount: "₱15,000", status: "PENDING",  follow: "OVERDUE ⚠",  sc: "text-yellow-700", fc: "text-red-600 font-bold" },
  { date: "Apr 2",  client: "Reyes Agency",   amount: "₱8,500",  status: "PAID",     follow: "Done ✓",     sc: "text-green-700",  fc: "text-green-700" },
  { date: "Apr 3",  client: "LMN Trading",    amount: "₱22,000", status: "OVERDUE",  follow: "???",        sc: "text-red-600 font-bold", fc: "text-slate-400" },
  { date: "Apr 4",  client: "PQR Shop",       amount: "₱3,200",  status: "PENDING",  follow: "Not yet",    sc: "text-yellow-700", fc: "text-slate-400" },
  { date: "Apr 5",  client: "ABC Corp",       amount: "₱45,000", status: "DRAFT",    follow: "call mark!", sc: "text-blue-700",   fc: "text-orange-500 italic" },
];

const afterRows = [
  { client: "Santos Clinic",  amount: "₱15,000", status: "Reminder sent",   badge: "bg-blue-500/20 text-blue-300",   note: "Auto · 8:00 AM" },
  { client: "Reyes Agency",   amount: "₱8,500",  status: "Paid",            badge: "bg-green-500/20 text-green-300", note: "Confirmed" },
  { client: "LMN Trading",    amount: "₱22,000", status: "2nd notice sent", badge: "bg-yellow-500/20 text-yellow-300", note: "Auto · 9:15 AM" },
  { client: "PQR Shop",       amount: "₱3,200",  status: "Follow-up sent",  badge: "bg-blue-500/20 text-blue-300",   note: "Auto · 9:30 AM" },
  { client: "ABC Corp",       amount: "₱45,000", status: "Invoice sent",    badge: "bg-green-500/20 text-green-300", note: "Auto · 9:45 AM" },
];

export default function BeforeAfter() {
  return (
    <section className="py-28 px-6 bg-[#070f1a] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2C5364]/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#7ECCD8] text-sm font-semibold uppercase tracking-[0.15em] mb-4">
            Before vs After
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1]">
            From spreadsheet chaos{" "}
            <br />
            <span className="text-gradient">to a system that runs itself.</span>
          </h2>
          <p className="mt-5 text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
            This is the same business — same clients, same data. The only difference is the system.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 items-start">

          {/* ─── BEFORE panel ──────────────────────────────────── */}
          <div className="rounded-2xl border border-red-500/20 bg-red-950/10 overflow-hidden">
            {/* Label */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-red-500/15">
              <div className="flex gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
              </div>
              <span className="text-xs text-slate-500 ml-1">Before NinePM</span>
              <span className="ml-auto text-[10px] text-red-400/70 font-medium uppercase tracking-widest">
                Manual process
              </span>
            </div>

            <div className="p-4">
              {/* Excel-style frame — white bg to look like a real spreadsheet screenshot */}
              <div className="rounded-lg overflow-hidden border border-slate-300/20 shadow-xl shadow-black/40">
                {/* Excel toolbar */}
                <div className="bg-[#217346] px-3 py-1.5 flex items-center justify-between">
                  <span className="text-white text-[10px] font-medium">
                    📄 Sales_Report_FINAL_v3.xlsx
                  </span>
                  <span className="text-green-200/60 text-[9px]">Microsoft Excel</span>
                </div>

                {/* Formula bar */}
                <div className="bg-[#f0f0f0] border-b border-slate-300 px-3 py-1 flex items-center gap-2">
                  <span className="text-[10px] text-slate-400 border border-slate-300 rounded px-1.5 py-0.5 bg-white">A1</span>
                  <span className="text-[10px] text-slate-500 font-mono">Date</span>
                </div>

                {/* Column headers */}
                <div className="grid grid-cols-5 bg-[#d8e4bc] border-b border-slate-300">
                  {["Date", "Client", "Amount", "Status", "Follow-up"].map((h) => (
                    <div key={h} className="px-2 py-1.5 text-[10px] font-bold text-slate-700 border-r border-slate-300 last:border-0">
                      {h}
                    </div>
                  ))}
                </div>

                {/* Data rows */}
                {beforeRows.map((r, i) => (
                  <div
                    key={r.client}
                    className={`grid grid-cols-5 border-b border-slate-200 ${i % 2 === 0 ? "bg-white" : "bg-[#f9f9f9]"}`}
                  >
                    <div className="px-2 py-1.5 text-[10px] text-slate-600 border-r border-slate-200">{r.date}</div>
                    <div className="px-2 py-1.5 text-[10px] text-slate-800 font-medium border-r border-slate-200 truncate">{r.client}</div>
                    <div className="px-2 py-1.5 text-[10px] text-slate-700 border-r border-slate-200 font-mono">{r.amount}</div>
                    <div className={`px-2 py-1.5 text-[10px] border-r border-slate-200 ${r.sc}`}>{r.status}</div>
                    <div className={`px-2 py-1.5 text-[10px] ${r.fc}`}>{r.follow}</div>
                  </div>
                ))}

                {/* Sticky note overlay */}
                <div className="bg-white border-t border-slate-200 px-3 py-2 flex items-start gap-2">
                  <div className="bg-yellow-200 border border-yellow-300 rounded px-2 py-1.5 text-[9px] text-yellow-900 italic shadow-sm rotate-[-1deg] whitespace-nowrap">
                    📌 remind carlos abt invoice!!!
                  </div>
                  <div className="bg-yellow-100 border border-yellow-300 rounded px-2 py-1.5 text-[9px] text-yellow-800 italic shadow-sm rotate-[0.5deg] whitespace-nowrap">
                    ❓ did anyone follow up on LMN?
                  </div>
                </div>
              </div>

              {/* Pain indicators below the spreadsheet */}
              <div className="mt-4 space-y-2">
                {[
                  { icon: "❌", text: "2 overdue follow-ups forgotten" },
                  { icon: "⚠️", text: "₱37,000 in untracked invoices" },
                  { icon: "🔁", text: "Built manually every single week" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2.5 text-[11px] text-red-400/80">
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ─── AFTER panel ───────────────────────────────────── */}
          <div className="rounded-2xl border border-[#2C5364]/35 bg-[#2C5364]/5 overflow-hidden">
            {/* Label */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#2C5364]/20">
              <div className="flex gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <span className="text-xs text-slate-400 ml-1">After NinePM</span>
              <span className="ml-auto flex items-center gap-1.5 text-[10px] text-[#7ECCD8] font-medium uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7ECCD8] animate-pulse" />
                Automated
              </span>
            </div>

            <div className="p-4">
              {/* Dashboard mock */}
              <div className="rounded-lg border border-[#2C5364]/30 bg-[#0d1e2e] overflow-hidden shadow-xl shadow-black/30">
                {/* Dashboard header */}
                <div className="px-4 py-2.5 border-b border-[#2C5364]/20 flex items-center justify-between">
                  <span className="text-xs text-white font-semibold">Billing Tracker — NinePM</span>
                  <span className="text-[10px] text-slate-500">Apr 1–5, 2026</span>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-px bg-[#2C5364]/10 border-b border-[#2C5364]/20">
                  {[
                    { label: "Total Billed",    value: "₱93,700", color: "text-white" },
                    { label: "Auto Follow-ups", value: "4 sent",  color: "text-[#7ECCD8]" },
                    { label: "Overdue",         value: "0",       color: "text-green-400" },
                  ].map((s) => (
                    <div key={s.label} className="bg-[#0d1e2e] px-3 py-2.5 text-center">
                      <p className={`text-base font-black ${s.color}`}>{s.value}</p>
                      <p className="text-[9px] text-slate-500 mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Column headers */}
                <div className="grid grid-cols-4 px-3 py-1.5 border-b border-[#2C5364]/15">
                  {["Client", "Amount", "Status", "Action"].map((h) => (
                    <span key={h} className="text-[9px] text-slate-600 uppercase tracking-wider font-semibold">{h}</span>
                  ))}
                </div>

                {/* Data rows */}
                {afterRows.map((r, i) => (
                  <div
                    key={r.client}
                    className={`grid grid-cols-4 px-3 py-2 items-center ${i < afterRows.length - 1 ? "border-b border-[#2C5364]/10" : ""}`}
                  >
                    <span className="text-[11px] text-white font-medium truncate">{r.client}</span>
                    <span className="text-[11px] text-slate-300 font-mono">{r.amount}</span>
                    <span className={`text-[9px] px-2 py-0.5 rounded-full font-medium w-fit ${r.badge}`}>{r.status}</span>
                    <span className="text-[9px] text-slate-500">{r.note}</span>
                  </div>
                ))}
              </div>

              {/* Success indicators */}
              <div className="mt-4 space-y-2">
                {[
                  { icon: "✅", text: "All follow-ups handled automatically" },
                  { icon: "✅", text: "Zero overdue — reminders sent on schedule" },
                  { icon: "✅", text: "Reports generated every Monday at 8 AM" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2.5 text-[11px] text-[#7ECCD8]/80">
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
