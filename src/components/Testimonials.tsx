const testimonials = [
  {
    quote:
      "Before NinePM, our team was spending half the week just pulling reports and chasing follow-ups. Now that runs automatically. We actually have time to work on the business.",
    name: "Maria Santos",
    title: "Owner, MedCore Clinic",
    avatar: "MS",
  },
  {
    quote:
      "I was skeptical — I thought automation was only for big companies. They built us a custom dashboard and lead system in three weeks. Our close rate went up noticeably.",
    name: "Jason Reyes",
    title: "Founder, Reyes Digital Agency",
    avatar: "JR",
  },
  {
    quote:
      "What I appreciated most was that they actually learned how our shop works before building anything. It felt like they were part of our team, not just a vendor.",
    name: "Liza Ocampo",
    title: "Operations Manager, LO Trading",
    avatar: "LO",
  },
];

export default function Testimonials() {
  return (
    <section id="results" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-4 text-center">
          Social Proof
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Businesses that made the switch
        </h2>
        <p className="text-slate-400 text-center max-w-xl mx-auto mb-16">
          Here&apos;s what teams like yours are saying after we streamlined their operations.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
