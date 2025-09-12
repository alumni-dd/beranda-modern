import React from "react";

export default function Hero() {
  const items = [
    { label: "Professional", value: 300 },
    { label: "Entrepreneur", value: 50 },
    { label: "Akademisi", value: 70 },
    { label: "Studi Lanjut", value: 30 },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="container-narrow grid md:grid-cols-2 gap-7 items-center py-7 md:py-7">
        <div className="space-y-5 animate-fadeUp">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Temu, Cerita, <span className="text-emerald-600">Berdampak</span>
          </h1>
          <p className="text-gray-600 md:text-lg">
            Gerbang utama ekosistem alumni program pendidikan Dompet Dhuafa.
            Jelajahi profil alumni, update kegiatan, dan kolaborasi dalam gerakan kebaikan.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://eduaction.co.id/katalog-alumni/" className="btn btn-primary">Lihat Katalog Alumni</a>
            <a href="https://eduaction.co.id/berita-alumni/" className="btn btn-ghost">Baca Berita</a>
          </div>
        </div>

        <div className="relative">
          <div className="card p-6 md:p-8 animate-floaty">
            <img
              src="https://i.ytimg.com/vi/HBWrYmmlxnk/maxresdefault.jpg"
              alt="Kolaborasi Alumni"
              className="rounded-2xl w-full h-64 object-cover"
            />
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              {items.map((item, i) => (
                <div key={i} className="stat-card">
                  <span className="text-3xl md:text-4xl font-bold text-emerald-600 counter" data-target={item.value}>
                    0
                  </span>
                  <div className="text-xs md:text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
