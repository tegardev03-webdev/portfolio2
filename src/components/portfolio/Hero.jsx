import { useLang } from "@/context/LangContext";
import Reveal from "./Reveal";

const PORTRAIT_URL =
  "/portfolio/tegarfikrimaulana.jpg";

const TEXTURE_URL =
  "https://images.unsplash.com/photo-1602475063211-3d98d60e3b1f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbHV4dXJ5JTIwYWJzdHJhY3QlMjB0ZXh0dXJlJTIwZ3JhaW58ZW58MHx8fHwxNzgyMjAzMzE0fDA&ixlib=rb-4.1.0&q=85";

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-screen overflow-hidden grain"
    >
      {/* Texture backdrop */}
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url(${TEXTURE_URL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Vertical labels */}
      <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-4 font-mono text-[10px] tracking-[0.3em] text-white/40">
        <span className="rotate-180" style={{ writingMode: "vertical-rl" }}>
          PORTFOLIO / 2026
        </span>
        <div className="w-px h-20 bg-white/15" />
      </div>
      <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-4 font-mono text-[10px] tracking-[0.3em] text-white/40">
        <div className="w-px h-20 bg-white/15" />
        <span style={{ writingMode: "vertical-rl" }}>JAKARTA · REMOTE</span>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 pt-32 pb-16">
        {/* Eyebrow */}
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[11px] text-amber-400/90 tracking-widest mb-12">
            <span className="w-8 h-px bg-amber-500/60" />
            {t.hero.eyebrow}
          </div>
        </Reveal>

        {/* Grid: title + portrait */}
        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-end">
          {/* Title block */}
          <div className="col-span-12 lg:col-span-8">
            <Reveal delay={120}>
              <h1
                data-testid="hero-title"
                className="font-display tracking-tighter leading-[0.92] text-[#f5f5f5]"
              >
                <span className="block font-light text-[14vw] sm:text-[10vw] lg:text-[8vw]">
                  {t.hero.title1}
                </span>
                <span className="block font-extrabold text-[14vw] sm:text-[10vw] lg:text-[8vw] -mt-2">
                  {t.hero.title2}
                  <span className="text-amber-500">.</span>
                </span>
              </h1>
            </Reveal>
          </div>

          {/* Portrait */}
          <div className="col-span-12 lg:col-span-4 lg:-mb-8">
            <Reveal delay={280}>
              <div className="relative aspect-[3/4] max-h-[420px] w-full ml-auto overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent z-10" />
                <img
                  src={PORTRAIT_URL}
                  alt="Tegar Fikri Maulana — placeholder"
                  data-testid="hero-portrait"
                  loading="eager"
                  className="w-full h-full object-cover grayscale-[0.4] contrast-110"
                />
                <div className="absolute bottom-3 left-3 z-20 font-mono text-[10px] tracking-widest text-white/70">
                  ID-2024-001
                </div>
                <div className="absolute top-3 right-3 z-20 font-mono text-[10px] tracking-widest text-amber-400">
                  ● LIVE
                </div>
              </div>
              <div className="font-mono text-[10px] text-white/30 mt-2 text-right">
               
              </div>
            </Reveal>
          </div>
        </div>

        {/* Sub + CTAs */}
        <div className="grid grid-cols-12 gap-6 lg:gap-12 mt-14">
          <div className="col-span-12 lg:col-span-7">
            <Reveal delay={380}>
              <p className="text-base sm:text-lg text-white/70 max-w-xl leading-relaxed">
                {t.hero.sub}
              </p>
            </Reveal>
            <Reveal delay={460}>
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <a
                  href="#work"
                  data-testid="hero-cta-primary"
                  className="group inline-flex items-center gap-3 bg-amber-500 text-[#0c0c0c] font-mono text-xs tracking-widest px-6 py-4 hover:bg-amber-400 transition-all"
                >
                  {t.hero.cta1}
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
                <a
                  href="#contact"
                  data-testid="hero-cta-secondary"
                  className="inline-flex items-center gap-3 border border-white/20 text-white/80 font-mono text-xs tracking-widest px-6 py-4 hover:border-amber-500 hover:text-amber-400 transition-colors"
                >
                  {t.hero.cta2}
                </a>
                <a
                  href="/downloads/tegar-fikri-maulana.zip"
                  download="tegar-fikri-maulana.zip"
                  data-testid="hero-cta-download"
                  className="group inline-flex items-center gap-3 text-white/60 hover:text-amber-400 font-mono text-xs tracking-widest px-2 py-4 transition-colors"
                >
                  <span className="inline-block w-4 h-4 border border-current relative">
                    <span className="absolute inset-x-0 bottom-0.5 text-center text-[8px] leading-none">↓</span>
                  </span>
                  {t.hero.cta3}
                </a>
              </div>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-5 grid grid-cols-3 gap-3 lg:gap-6 lg:pt-6">
            {[
              { n: "02+", l: t.hero.stat1Label },
              { n: "08", l: t.hero.stat2Label },
              { n: "06", l: t.hero.stat3Label },
            ].map((s, i) => (
              <Reveal key={s.l} delay={520 + i * 80}>
                <div className="border-l border-white/15 pl-4">
                  <div className="font-display text-3xl sm:text-4xl font-light text-[#f5f5f5]">
                    {s.n}
                  </div>
                  <div className="font-mono text-[10px] tracking-widest text-white/40 mt-2 uppercase">
                    {s.l}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <Reveal delay={780}>
          <div className="mt-20 flex items-center gap-3 font-mono text-[10px] tracking-widest text-white/30">
            <span className="w-12 h-px bg-white/15" />
            {t.hero.scroll}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
