import { useLang } from "@/context/LangContext";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer
      data-testid="site-footer"
      className="border-t border-white/10 py-10"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] tracking-widest text-white/40">
        <div>© {year} TEGAR FIKRI MAULANA — {t.footer.rights.toUpperCase()}</div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          {t.footer.built}
        </div>
      </div>
    </footer>
  );
}
