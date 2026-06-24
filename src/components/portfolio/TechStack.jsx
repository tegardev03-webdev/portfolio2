import { useLang } from "@/context/LangContext";
import { techStack } from "@/lib/projects";
import Reveal from "./Reveal";

export default function TechStack() {
  const { t } = useLang();
  const loop = [...techStack, ...techStack];

  return (
    <section
      id="stack"
      data-testid="stack-section"
      className="relative py-20 border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-10">
        <Reveal>
          <div className="font-mono text-[11px] tracking-widest text-amber-400 mb-3">
            {t.stack.tag}
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display tracking-tight text-2xl sm:text-3xl lg:text-4xl font-light text-white/85 max-w-2xl">
            {t.stack.title}
          </h2>
        </Reveal>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#0c0c0c] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#0c0c0c] to-transparent pointer-events-none" />

        <div
          className="flex w-max animate-marquee gap-24 py-6"
          data-testid="tech-marquee"
        >
          {loop.map((tech, i) => (
            <div
              key={i}
              className="font-display text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white/30 hover:text-amber-400 transition-colors whitespace-nowrap"
            >
              {tech}
              <span className="text-amber-500/80">.</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
