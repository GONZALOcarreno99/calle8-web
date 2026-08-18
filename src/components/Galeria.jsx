import { useState } from "react";
import { GALERIA } from "../data/site";
import useReveal from "../hooks/useReveal";
import Lightbox from "./Lightbox";

export default function Galeria() {
  const [headerRef, headerInView] = useReveal();
  const [gridRef, gridInView] = useReveal();
  const [index, setIndex] = useState(null);

  function prev() {
    setIndex((i) => (i - 1 + GALERIA.length) % GALERIA.length);
  }

  function next() {
    setIndex((i) => (i + 1) % GALERIA.length);
  }

  return (
    <section id="galeria" className="relative py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="eyebrow uppercase text-gold text-xs md:text-sm mb-4">Galería</p>
          <h2 className="font-display text-5xl md:text-6xl">NUESTRO ESTILO</h2>
          <div className="mx-auto mt-5 h-px w-16 bg-gold" />
          <p className="text-white/50 mt-5 max-w-xl mx-auto text-sm">
            Toca una foto para verla en grande.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALERIA.map((src, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              style={{ transitionDelay: gridInView ? `${i * 90}ms` : "0ms" }}
              className={`group relative overflow-hidden rounded-[1.75rem] transition-all duration-700 ease-out hover:shadow-[0_20px_50px_-20px_rgba(184,147,90,0.4)] ${
                gridInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
              } ${i === 0 ? "col-span-2 row-span-2" : ""}`}
            >
              <img
                src={src}
                alt={`Barbería Calle Ocho ${i + 1}`}
                style={{ transitionDelay: gridInView ? `${i * 90}ms` : "0ms" }}
                className={`h-full w-full object-cover group-hover:scale-110 transition-all duration-1000 ease-out aspect-square md:grayscale-[0.35] md:blur-none md:scale-100 md:group-hover:grayscale-0 ${
                  gridInView ? "grayscale-0 blur-none scale-100" : "grayscale-[0.35] blur-md scale-125"
                }`}
              />
              {gridInView && (
                <span
                  className="animate-flash pointer-events-none absolute inset-0 bg-gold"
                  style={{ animationDelay: `${i * 90}ms` }}
                />
              )}
              <span className="shine-sweep pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/0 group-hover:ring-gold/40 transition-all duration-300 rounded-[1.75rem]" />
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
                <span className="h-9 w-9 rounded-full border border-white/60 flex items-center justify-center text-white opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
                  </svg>
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <Lightbox images={GALERIA} index={index} onClose={() => setIndex(null)} onPrev={prev} onNext={next} />
    </section>
  );
}
