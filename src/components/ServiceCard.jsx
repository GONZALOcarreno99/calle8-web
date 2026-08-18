import useReveal from "../hooks/useReveal";
import useCountUp from "../hooks/useCountUp";
import ServiceIcon from "./icons/ServiceIcon";

export default function ServiceCard({ s, index, onReservar }) {
  const [ref, inView] = useReveal();
  const price = useCountUp(s.precio, inView, 900);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: inView ? `${index * 120}ms` : "0ms" }}
      className={`group relative flex flex-col rounded-[2rem] bg-panel border transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_25px_60px_-20px_rgba(184,147,90,0.4)] active:shadow-[0_25px_60px_-20px_rgba(184,147,90,0.4)] ${
        s.destacado ? "border-gold animate-pulse-gold" : "border-line hover:border-gold/50 active:border-gold/50"
      } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {s.destacado && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 rounded-full bg-gold px-4 py-1 text-[10px] uppercase tracking-[0.2em] font-semibold text-ink">
          Más pedido
        </span>
      )}

      <div className="relative flex flex-1 flex-col overflow-hidden rounded-[2rem] p-8 md:p-9">
        <span className="shine-sweep pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="h-14 w-14 rounded-full bg-ink border border-gold/30 flex items-center justify-center text-gold mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 group-active:scale-110 group-active:rotate-6">
          <ServiceIcon type={s.icono} className="h-6 w-6" />
        </div>

        <h3 className="font-display text-3xl tracking-wide">{s.nombre}</h3>
        <p className="text-white/40 text-sm mt-1">{s.subtitulo}</p>
        <p className="price-glow font-display text-5xl mt-6 text-gold transition-transform duration-300 group-hover:scale-105 group-active:scale-105 origin-left">
          S/ {price}
        </p>

        <ul className="mt-8 flex-1 space-y-5">
          {s.items.map((it) => (
            <li key={it.nombre} className="text-sm border-b border-line pb-4 last:border-0">
              <p className="font-medium text-white">{it.nombre}</p>
              <p className="text-white/40 mt-0.5">{it.detalle}</p>
            </li>
          ))}
        </ul>

        <a
          href="#reserva"
          onClick={onReservar}
          className="mt-9 rounded-full border border-white/25 py-3 text-center text-xs uppercase tracking-[0.2em] text-white/80 transition-all duration-200 hover:border-gold hover:bg-gold hover:text-ink active:border-gold active:bg-gold active:text-ink active:scale-95"
        >
          Reservar este plan
        </a>
      </div>
    </div>
  );
}
