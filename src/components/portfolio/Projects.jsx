import { useEffect, useState } from "react";
import { useLang } from "@/context/LangContext";
import { projects } from "@/lib/projects";
import Reveal from "./Reveal";

// Asymmetric bento spans per index (kept as literal classes so Tailwind JIT can detect them).
const SPANS = [
  "col-span-12 lg:col-span-7",
  "col-span-12 lg:col-span-5",
  "col-span-12 lg:col-span-5",
  "col-span-12 lg:col-span-7",
  "col-span-12 lg:col-span-6",
  "col-span-12 lg:col-span-6",
  "col-span-12 lg:col-span-12",
];

function ProjectCard({ p, lang, t, index, onOpen }) {
  const [imgSrc, setImgSrc] = useState(p.img);

  return (
    <article
      data-testid={`project-card-${p.id}`}
      data-cursor="hover"
      onClick={() => onOpen(p)}
      className="group relative w-full cursor-pointer border border-white/10 overflow-hidden bg-[#101010] trace-border h-full"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0a0a]">
        <img
          src={imgSrc}
          onError={() => setImgSrc(p.fallback)}
          alt={p.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/20 to-transparent" />

        <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] tracking-widest text-white/70">
          <span>
            {String(index + 1).padStart(2, "0")} /{" "}
            {projects.length.toString().padStart(2, "0")}
          </span>
          <span className="border border-white/20 px-2 py-1 bg-black/40 backdrop-blur-sm">
            {p.cat[lang]}
          </span>
        </div>
      </div>

      <div className="relative p-6 lg:p-8 pt-5 lg:pt-6">
        <h3 className="font-display text-xl lg:text-2xl tracking-tight font-medium text-[#f5f5f5] group-hover:text-amber-400 transition-colors">
          {p.title}
        </h3>
        <p className="mt-3 text-sm text-white/60 leading-relaxed line-clamp-3 max-w-[60ch]">
          {p.desc[lang]}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((tg) => (
            <span
              key={tg}
              className="font-mono text-[10px] tracking-wider text-white/55 border border-white/10 px-2 py-1"
            >
              {tg}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between font-mono text-[10px] tracking-widest">
          {p.link ? (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              data-testid={`project-link-${p.id}`}
              className="text-amber-400 hover:text-amber-300 inline-flex items-center gap-2"
            >
              {t.projects.viewLive} ↗
            </a>
          ) : (
            <span className="text-white/30">{t.projects.private}</span>
          )}
          <span className="text-white/45 group-hover:text-amber-400 transition-colors">
            {t.projects.viewCase} →
          </span>
        </div>
      </div>
    </article>
  );
}

function ProjectDialog({ project, onClose, t, lang }) {
  const [src, setSrc] = useState(project?.img);

  useEffect(() => {
    if (!project) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      data-testid="project-modal"
      className="fixed inset-0 z-[100] bg-[#0c0c0c]/85 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-[#0f0f0f] border border-white/10 w-full max-w-4xl max-h-[88vh] overflow-y-auto no-scrollbar"
      >
        <button
          type="button"
          onClick={onClose}
          data-testid="modal-close"
          className="absolute top-4 right-4 z-10 font-mono text-[10px] tracking-widest border border-white/15 px-3 py-1.5 bg-black/40 hover:border-amber-500 hover:text-amber-400 transition-colors"
        >
          CLOSE ✕
        </button>

        <div className="aspect-[16/9] bg-[#0a0a0a] overflow-hidden">
          <img
            src={src || project.img}
            onError={() => setSrc(project.fallback)}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 sm:p-10">
          <div className="font-mono text-[11px] tracking-widest text-amber-400 mb-3">
            {project.cat[lang]}
          </div>
          <h3 className="font-display text-3xl sm:text-4xl tracking-tight font-medium">
            {project.title}
          </h3>
          <p className="mt-5 text-white/70 leading-relaxed">{project.desc[lang]}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tg) => (
              <span
                key={tg}
                className="font-mono text-[10px] tracking-wider text-white/60 border border-white/10 px-3 py-1.5"
              >
                {tg}
              </span>
            ))}
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="modal-live-link"
              className="mt-8 inline-flex items-center gap-2 bg-amber-500 text-[#0c0c0c] font-mono text-xs tracking-widest px-5 py-3 hover:bg-amber-400 transition-colors"
            >
              {t.projects.viewLive} ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { lang, t } = useLang();
  const [open, setOpen] = useState(null);

  return (
    <section
      id="work"
      data-testid="projects-section"
      className="relative py-24 lg:py-32 border-t border-white/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <Reveal>
              <div className="font-mono text-[11px] tracking-widest text-amber-400 mb-3">
                {t.projects.tag}
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display tracking-tight text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.05] max-w-2xl">
                {t.projects.title}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="text-sm text-white/55 max-w-sm">{t.projects.sub}</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          {projects.map((p, i) => (
            <Reveal
              key={p.id}
              delay={120 + i * 60}
              className={SPANS[i] || "col-span-12 lg:col-span-6"}
            >
              <ProjectCard p={p} lang={lang} t={t} index={i} onOpen={setOpen} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectDialog project={open} onClose={() => setOpen(null)} t={t} lang={lang} />
    </section>
  );
}
