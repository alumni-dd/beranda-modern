import React from "react";

export default function Testimonials() {
  const items = [
    { title: "Episode 90", img: "https://media.licdn.com/dms/image/v2/D5612AQFeBWYJWDolSQ/article-cover_image-shrink_720_1280/B56Zksgg_PHMAI-/0/1757388345995?e=1760572800&v=beta&t=GDFXHZfkvWMpmMSl1O-FuaonCx-aRIdAfRAFFkv4bbw", desc: "11 Tahun Ekspedisi Global Bayu Menjawab Dunia Lewat Sociotraveler dan Wisata yang Penuh Makna", link: "https://www.instagram.com/p/DOXdVCDCU61/" },
    { title: "Episode 89", img: "https://media.licdn.com/dms/image/v2/D5612AQGtUUk59SiEWA/article-cover_image-shrink_600_2000/B56ZirHhJ.HQAU-/0/1755217532078?e=1760572800&v=beta&t=iEqeEQuZbPL84W-30XMZXX5q0IGKxwXRBfvUDNfL2JU", desc: "Ketika Anak Timur Jadi Diaspora, Andi Buktikan Mimpi Bisa Diperjuangkan dengan Ilmu dan Ketekunan yang Tak Gentar", link: "https://www.instagram.com/p/DNhOdwwpv_v/" },
    { title: "Episode 88", img: "https://media.licdn.com/dms/image/v2/D5612AQFXh-oojBNz8A/article-cover_image-shrink_720_1280/B56ZhzkflNG0AI-/0/1754285603887?e=1760572800&v=beta&t=TWNC4pZTGxUSgd3SxJs2JqAbyHaXwgypDMigX2frQL0", desc: "Gagal Bangun Kafe, Hingga Jalan Kaki Pulang Kampung. Lazu Edukasi Ribuan Orang Tentang UMKM & Literasi Finansial", link: "https://www.instagram.com/p/DM7AuCShZMP/" },
  ];

  return (
    <section className="py-7 md:py-7 bg-white">
      <div className="container-narrow">
        <h2 className="text-xl md:text-3xl font-extrabold">Alumni of The Week</h2>
        <p className="text-gray-600 mt-1">Impact Story dari para alumni program.</p>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-6">
          {items.map((it) => (
            <article key={it.title} className="berita-card">
              <img className="berita-image" src={it.img} alt={it.title} />
              <div className="p-4">
                <h3 className="berita-title">{it.title}</h3>
                <p className="berita-desc">{it.desc}</p>
                <a className="berita-link" href={it.link}>Selengkapnya →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
