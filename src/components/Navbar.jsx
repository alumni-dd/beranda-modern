// src/components/Navbar.jsx
import { useState } from "react";
import { Menu } from "lucide-react";

// Bisa override via .env kalau perlu
const HOME_URL   = import.meta.env.VITE_HOME_URL   || (typeof window !== "undefined" ? window.location.origin + "/" : "/");
const DATA_URL   = import.meta.env.VITE_DATA_URL   || "https://data-alumnidd.netlify.app/";
const NEWS_URL   = import.meta.env.VITE_NEWS_URL   || "https://news-alumnidd.netlify.app/";
const TRACER_URL = import.meta.env.VITE_TRACER_URL || "https://tracer-alumnidd.netlify.app/";
const KATALOG_URL = import.meta.env.VITE_KATALOG_URL || "https://catalog-alumnidd.netlify.app/";

function isActiveHref(href) {
  try {
    // Treat "/" as current origin
    const target = href === "/" ? window.location.origin + "/" : new URL(href, window.location.origin).href;
    const here   = window.location.href.endsWith("/") ? window.location.href : window.location.href + "/";
    const base   = window.location.origin + "/";
    // Aktif jika masih di site katalog (origin yang sama dengan HOME_URL/base)
    return target.startsWith(base) && HOME_URL.startsWith(base);
  } catch {
    return false;
  }
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const baseCls =
    "px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand";
  const activeCls   = "bg-brand text-white hover:opacity-90";
  const inactiveCls = "text-slate-700 hover:bg-slate-100 hover:text-slate-900";

  const linkClass = (href) => (isActiveHref(href) ? `${baseCls} ${activeCls}` : `${baseCls} ${inactiveCls}`);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* BRAND: dua logo menuju beranda katalog (site ini) */}
        <a href={KATALOG_URL} className="flex items-center gap-3 shrink-0" aria-label="Beranda">
          <img
            src="https://i0.wp.com/greatedunesia.id/wp-content/uploads/2024/05/ico-ge.webp?w=495&ssl=1"
            alt="GREAT Edunesia"
            className="h-8 md:h-10 w-auto object-contain"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <img
            src="https://www.dompetdhuafa.org/wp-content/uploads/2023/11/logo-dd-palestina-semangka-160x60-3.jpg"
            alt="Dompet Dhuafa"
            className="h-8 md:h-10 w-auto object-contain"
            loading="lazy"
            decoding="async"
          />
        </a>

        {/* NAV desktop (pakai <a>, bukan NavLink) */}
        <nav className="hidden md:flex items-center gap-2">
          <a href={HOME_URL}   className={linkClass(HOME_URL)}>Beranda</a>
          <a href={DATA_URL}   className={linkClass(DATA_URL)}>Database</a>
          <a href={KATALOG_URL} className={linkClass(KATALOG_URL)}>Katalog</a>
          <a href={NEWS_URL}   className={linkClass(NEWS_URL)}>Berita</a>
          <a href={TRACER_URL} className={linkClass(TRACER_URL)}>Tracer</a>
        </nav>

        {/* Toggle mobile */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-slate-300"
          onClick={() => setOpen((v) => !v)}
          aria-label="Buka menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <Menu className="size-5" />
        </button>
      </div>

      {/* NAV mobile */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col gap-1">
            <a href={HOME_URL}    className={linkClass(HOME_URL)} onClick={() => setOpen(false)}>Beranda</a>
            <a href={DATA_URL}    className={linkClass(DATA_URL)} onClick={() => setOpen(false)}>Database</a>
            <a href={KATALOG_URL} className={linkClass(KATALOG_URL)} onClick={() => setOpen(false)}>Katalog</a>
            <a href={NEWS_URL}    className={linkClass(NEWS_URL)} onClick={() => setOpen(false)}>Berita</a>
            <a href={TRACER_URL}  className={linkClass(TRACER_URL)} onClick={() => setOpen(false)}>Tracer</a>
          </div>
        </div>
      )}
    </header>
  );
}
