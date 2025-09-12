import React from "react";

export default function News() {
  const items = [
    { title: "Alumni BAKTI NUSA 13 Bangga!", img: "https://i.imgur.com/js2z124.jpeg", desc: "Selamat Tiga Alumni BAKTI NUSA Angkatan 13 raih beasiswa studi lanjut di kampus terbaik dalam negeri dan luar negeri.", link: "https://www.instagram.com/p/DNju3QdyCes/" },
    { title: "Alumni Etos ID Berduka!", img: "https://i.imgur.com/52slpIi.jpg", desc: "Telah wafat Rus Mubarak Zas, Alumni Etos ID 2004 Makassar pada Senin, 19 Juli 2025.", link: "https://www.linkedin.com/posts/alumni-edunesiadd_innalillahi-wainnailaihi-rojiun-dengan-activity-7352991465830010881-zFW1?utm_source=share&utm_medium=member_desktop&rcm=ACoAADF78isBU473agxqG3AvhjLhp4dynkq1Sz8" },
    { title: "Alumni Etos ID Berduka!", img: "https://i.imgur.com/VnyziR9.jpg", desc: "Telah wafat Siti Nur Bayaniah, Alumni Etos ID 2006 Bogor pada Senin, 23 Juni 2025.", link: "https://www.linkedin.com/posts/alumni-edunesiadd_innalillahi-wainnailaihi-rojiun-dengan-activity-7352991642997460993-yNVB?utm_source=share&utm_medium=member_desktop&rcm=ACoAADF78isBU473agxqG3AvhjLhp4dynkq1Sz8" },
  ];

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container-narrow">
        <h2 className="text-xl md:text-3xl font-extrabold">Berita Alumni</h2>
        <p className="text-gray-600 mt-1">Sorotan kabar dan aktivitas dari para alumni.</p>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-6">
          {items.map((it) => (
            <article key={it.title} className="berita-card">
              <img className="berita-image" src={it.img} alt={it.title} />
              <div className="p-4">
                <h3 className="berita-title">{it.title}</h3>
                <p className="berita-desc">{it.desc}</p>
                <a className="berita-link" href={it.link} target="_blank" rel="noopener noreferrer">Selengkapnya →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
