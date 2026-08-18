import { useState } from "react";
import useReveal from "../hooks/useReveal";
import useCountUp from "../hooks/useCountUp";

export default function ProductCard({ p, index, onAdd }) {
  const [ref, inView] = useReveal();
  const price = useCountUp(p.precio, inView, 800);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    onAdd(p);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  }

  return (
    <div
      ref={ref}
      style={{ transitionDelay: inView ? `${index * 90}ms` : "0ms" }}
      className={`group relative flex flex-col rounded-[1.5rem] md:rounded-[2rem] border border-line bg-panel overflow-hidden transition-all duration-700 ease-out hover:-translate-y-2 hover:border-gold/50 hover:shadow-[0_25px_60px_-25px_rgba(184,147,90,0.4)] active:border-gold/50 active:shadow-[0_25px_60px_-25px_rgba(184,147,90,0.4)] ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={p.foto}
          alt={p.nombre}
          loading="lazy"
          className={`h-full w-full object-cover transition-all duration-1000 ease-out group-hover:scale-110 group-active:scale-110 md:grayscale-[0.25] md:blur-none md:scale-100 md:group-hover:grayscale-0 ${
            inView ? "grayscale-0 blur-none scale-100" : "grayscale-[0.25] blur-md scale-125"
          }`}
        />
        {inView && <span className="animate-flash pointer-events-none absolute inset-0 bg-gold" />}
        <span className="shine-sweep pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col items-center text-center p-4 md:p-6">
        <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1 md:mb-1.5">{p.categoria}</p>
        <h3 className="font-display text-base md:text-xl tracking-wide">{p.nombre}</h3>
        <p className="text-white/50 text-[11px] md:text-xs mt-2 md:mt-3 leading-relaxed">{p.beneficio}</p>
        <p className="price-glow text-gold font-semibold text-sm md:text-base mt-3 md:mt-4 transition-transform duration-300 group-hover:scale-110 group-active:scale-110">
          S/ {price}
        </p>
        <button
          onClick={handleAdd}
          disabled={added}
          className={`mt-4 md:mt-6 w-full rounded-full border py-2 md:py-2.5 text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] transition-all duration-300 active:scale-95 ${
            added
              ? "bg-gold border-gold text-ink"
              : "bg-gold/10 border-gold/50 text-gold hover:bg-gold hover:text-ink active:bg-gold active:text-ink"
          }`}
        >
          {added ? "Agregado ✓" : "Agregar"}
        </button>
      </div>
    </div>
  );
}
