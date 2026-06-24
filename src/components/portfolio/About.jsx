import { useLang } from "@/context/LangContext";
import Reveal from "./Reveal";

export default function About() {
  const { t } = useLang();

  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 lg:py-32 border-t border-white/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="font-mono text-[11px] tracking-widest text-amber-400 mb-6">
            {t.about.tag}
          </div>
        </Reveal>

        <div className="grid grid-cols-12 gap-6 lg:gap-16">
          <div className="col-span-12 lg:col-span-7">
            <Reveal delay={120}>
              <h2 className="font-display tracking-tight text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.05] whitespace-pre-line">
                {t.about.title}
              </h2>
            </Reveal>

            <div className="mt-12 space-y-6 text-white/70 leading-relaxed text-base max-w-xl">
              <Reveal delay={220}>
                <p>{t.about.p1}</p>
              </Reveal>
              <Reveal delay={300}>
                <p>{t.about.p2}</p>
              </Reveal>
            </div>

            <Reveal delay={400}>
              <div className="mt-12 flex items-center gap-6 font-mono text-[11px] tracking-widest text-white/40">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  {t.about.availability}
                </span>
                <span className="hidden sm:inline">·</span>
                <span className="hidden sm:inline">{t.about.role}</span>
              </div>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <Reveal delay={200}>
              <dl className="border border-white/10 divide-y divide-white/10">
                {t.about.values.map((v) => (
                  <div
                    key={v.k}
                    className="grid grid-cols-3 gap-4 px-6 py-5 hover:bg-white/[0.02] transition-colors"
                  >
                    <dt className="font-mono text-[11px] tracking-widest text-white/40 uppercase col-span-1">
                      {v.k}
                    </dt>
                    <dd className="col-span-2 text-white/85 text-sm">{v.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
