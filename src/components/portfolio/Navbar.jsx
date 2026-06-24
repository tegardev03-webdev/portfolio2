import { useEffect, useState } from "react";
import { useLang } from "@/context/LangContext";

export default function Navbar() {
  const { lang, toggle, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#work", label: t.nav.work },
    { href: "#about", label: t.nav.about },
    { href: "#stack", label: t.nav.stack },
    { href: "#experience", label: t.nav.experience },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl bg-[#0c0c0c]/70 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <a
          href="#top"
          data-testid="brand-logo"
          className="font-display text-base tracking-tight flex items-center gap-2 group"
        >
          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full group-hover:scale-150 transition-transform" />
          <span className="font-semibold">Tegar</span>
          <span className="text-white/40 font-light">Fikri</span>
          <span className="text-white/30 font-light">Maulana</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-mono text-xs">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-${l.href.replace("#", "")}`}
              className="text-white/60 hover:text-amber-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            data-testid="lang-toggle"
            aria-label="Toggle language"
            className="font-mono text-[10px] tracking-widest border border-white/15 px-3 py-1.5 hover:border-amber-500 hover:text-amber-400 transition-colors"
          >
            {lang === "id" ? "ID / EN" : "EN / ID"}
          </button>
          <a
            href="#contact"
            data-testid="nav-cta"
            className="hidden sm:inline-block font-mono text-[10px] tracking-widest bg-amber-500 text-[#0c0c0c] px-4 py-2 hover:bg-amber-400 transition-colors"
          >
            {t.nav.cta} ↗
          </a>
          <button
            type="button"
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 text-white/70"
            aria-label="Open menu"
          >
            <div className="w-5 h-px bg-current mb-1" />
            <div className="w-5 h-px bg-current mb-1" />
            <div className="w-3 h-px bg-current ml-auto" />
          </button>
        </div>
      </div>

      {open && (
        <div
          data-testid="mobile-menu"
          className="md:hidden border-t border-white/10 bg-[#0c0c0c]/95 backdrop-blur-2xl"
        >
          <div className="px-6 py-6 flex flex-col gap-4 font-mono text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-amber-400"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
