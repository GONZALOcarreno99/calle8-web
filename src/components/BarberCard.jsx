import useReveal from "../hooks/useReveal";
import { useReservaPreset } from "../context/ReservaContext";

export default function BarberCard({ b, index }) {
  const [ref, inView] = useReveal();
  const { setPreset } = useReservaPreset();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: inView ? `${index * 150}ms` : "0ms" }}
      className={`group flex flex-col items-center text-center transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="relative w-full max-w-[16rem] aspect-[3/4] rounded-[1.75rem] overflow-hidden ring-1 ring-gold/30 transition-all duration-500 group-hover:ring-gold group-active:ring-gold group-hover:-translate-y-2 group-hover:shadow-[0_25px_55px_-20px_rgba(184,147,90,0.5)]">
        <img
          src={b.foto}
          alt={b.nombre}
          loading="lazy"
          className={`h-full w-full object-cover group-hover:scale-110 group-active:scale-110 transition-all duration-1000 ease-out md:grayscale-[0.4] md:blur-none md:scale-100 md:group-hover:grayscale-0 ${
            inView ? "grayscale-0 blur-none scale-100" : "grayscale-[0.4] blur-md scale-125"
          }`}
        />
        {inView && <span className="animate-flash pointer-events-none absolute inset-0 bg-gold" />}
        <span className="shine-sweep pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
      <h3 className="font-display text-2xl tracking-wide mt-6 transition-colors duration-300 group-hover:text-gold group-active:text-gold">
        {b.nombre}
      </h3>
      <p className="text-gold text-xs uppercase tracking-[0.15em] mt-1">{b.especialidad}</p>
      <p className="text-white/45 text-sm mt-3 leading-relaxed max-w-[16rem]">{b.descripcion}</p>
      <a
        href="#reserva"
        onClick={() => setPreset({ barbero: b.nombre })}
        className="group/btn relative overflow-hidden mt-5 inline-block rounded-full border border-gold/60 px-6 py-2 text-xs uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:bg-gold hover:text-ink active:bg-gold active:text-ink hover:-translate-y-0.5 active:scale-95"
      >
        <span className="relative z-10">Reservar con {b.nombre.split(" ")[0]}</span>
        <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-full bg-white/30 skew-x-[-15deg] transition-transform duration-700 group-hover/btn:translate-x-[320%]" />
      </a>
    </div>
  );
}
