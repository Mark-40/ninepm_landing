export default function Solution() {
  return (
    <section id="solution" className="py-24 px-6 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#2C5364]/15 rounded-full blur-[120px] -z-10" />

      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl border border-[#2C5364]/30 bg-[#203A43]/25 p-8 md:p-14">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#7ECCD8] text-sm font-medium uppercase tracking-widest mb-4">
              The NinePM Way
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              We build the systems your business should have had from day one
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              We sit down with you, map out where time and money are leaking,
              and build custom automations, dashboards, and tools that fix it.
              No bloated software subscriptions. No generic solutions.{" "}
              <strong className="text-white">
                Just systems that fit exactly how you work.
              </strong>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-[#7ECCD8]">✓</span> Built around your actual workflow
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-[#7ECCD8]">✓</span> You own everything we build
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-[#7ECCD8]">✓</span> Ongoing support included
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
