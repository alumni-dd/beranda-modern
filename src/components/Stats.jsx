import React, { useEffect } from "react";

export default function Stats() {
  useEffect(() => {
    // Counter animation
    const counters = document.querySelectorAll(".counter");
    counters.forEach((el) => {
      const target = parseInt(el.getAttribute("data-target") || "0", 10);
      let curr = 0;
      const step = Math.ceil(target / 50);
      const tick = () => {
        curr = Math.min(target, curr + step);
        el.textContent = curr.toLocaleString("id-ID");
        if (curr < target) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, []);

  const items = [
    { label: "Total Alumni", value: 10425 },
    { label: "Sebaran Wilayah", value: 37 },
    { label: "Program Existing", value: 8 },
    { label: "Alumni Terhubung", value: 1000 },
  ];

  return (
    <section className="py-7 md:py-7 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="container-narrow">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((it) => (
            <div className="metric" key={it.label}>
              <div className="metric-label">{it.label}</div>
              <div className="metric-value counter" data-target={it.value}>0</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
