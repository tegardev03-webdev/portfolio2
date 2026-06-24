import { useLang } from "@/context/LangContext";
import Reveal from "./Reveal";

export default function Experience() {
  const { t } = useLang();

  return (
    <section
      id="experience"
      data-testid="experience-section"
      className="relative py-24 lg:py-32 border-t border-white/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="font-mono text-[11px] tracking-widest text-amber-400 mb-3">
            {t.experience.tag}
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display tracking-tight text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.05] max-w-3xl mb-16">
            {t.experience.title}
          </h2>
        </Reveal>

        <ol className="relative">
          {t.experience.items.map((item, i) => (
            <Reveal key={i} delay={120 + i * 100}>
              <li
                data-testid={`exp-row-${i}`}
                className="grid grid-cols-12 gap-4 lg:gap-12 py-8 lg:py-10 border-t border-white/10 first:border-t-0 group hover:bg-white/[0.02] transition-colors px-2 -mx-2"
              >
                <div className="col-span-12 lg:col-span-3">
                  <div className="font-mono text-[11px] tracking-widest text-amber-400">
                    {item.year}
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-4">
                  <div className="font-display text-xl lg:text-2xl tracking-tight font-medium">
                    {item.role}
                  </div>
                  <div className="font-mono text-xs text-white/45 mt-1">{item.org}</div>
                </div>
                <div className="col-span-12 lg:col-span-5">
                  <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
