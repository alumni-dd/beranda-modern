import React from "react";

export default function ClusterCards() {
  const cards = [
    { icon: "💼", title: "Database", desc: "List database alumni dengan fungsi filter berdasarkan profesi."},
    { icon: "👨🏼‍💻", title: "Katalog", desc: "Menampilkan profile alumni expert yang telah menguasai karir di bidangnya."},
    { icon: "📰", title: "Berita", desc: "Update kabar tentang aktivitas alumni secara individu maupun komunal."},
    { icon: "🎓", title: "Tracer", desc: "Form survey karir para alumni selepas menyelesaikan program masing-masing."},
  ];

  return (
    <section className="py-7 md:py-7">
      <div className="container-narrow">
        <h2 className="text-xl md:text-3xl font-extrabold">Portal Alumni</h2>
        <p className="text-gray-600 mt-1">Empat fokus ekosistem untuk kolaborasi dan dampak.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-6">
          {cards.map((c) => (
            <article key={c.title} className="feature-card">
              <div className="text-2xl">{c.icon}</div>
              <h3 className="font-bold mt-1">{c.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
