import React, { useRef } from "react";

export default function NewsletterSlider({ items = [] }) {
  const scroller = useRef(null);

  const scrollByCard = (dir = 1) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector(".nl-card");
    const step = card ? card.clientWidth + 16 : 320; // +gap
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="py-7 md:py-7 bg-white">
      <div className="container-narrow">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-3xl font-extrabold">E-Newsletter</h2>
            <p className="text-gray-600 mt-1">Kumpulan buletin berkala Alumni GREAT Edunesia.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button onClick={() => scrollByCard(-1)} className="btn btn-ghost" aria-label="Sebelumnya">←</button>
            <button onClick={() => scrollByCard(1)} className="btn btn-ghost" aria-label="Berikutnya">→</button>
          </div>
        </div>

        <div
          ref={scroller}
          className="mt-5 overflow-x-auto snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          <div className="grid grid-flow-col auto-cols-[80%] sm:auto-cols-[48%] md:auto-cols-[32%] gap-4 md:gap-6">
            {items.map((it, idx) => (
              <article key={idx} className="nl-card card snap-start overflow-hidden">
                <img
                  src={it.coverUrl}
                  alt={it.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-4 space-y-2">
                  <h3 className="font-bold leading-snug">{it.title}</h3>
                  <p className="text-gray-500 text-sm">{it.date}</p>
                  <div className="flex gap-2 pt-1">
                    <a className="btn btn-ghost" href={it.pdfUrl} target="_blank" rel="noopener noreferrer">
                      Buka
                    </a>
                    <a className="btn btn-primary" href={it.pdfUrl} download>
                      Unduh PDF
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="sm:hidden flex justify-center gap-2 mt-4">
          <button onClick={() => scrollByCard(-1)} className="btn btn-ghost" aria-label="Sebelumnya">←</button>
          <button onClick={() => scrollByCard(1)} className="btn btn-ghost" aria-label="Berikutnya">→</button>
        </div>
      </div>
    </section>
  );
}
