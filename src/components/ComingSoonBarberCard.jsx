import useReveal from "../hooks/useReveal";

export default function ComingSoonBarberCard({ index }) {
  const [ref, inView] = useReveal();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: inView ? `${index * 150}ms` : "0ms" }}
      className={`flex flex-col items-center text-center transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="relative w-full max-w-[16rem] aspect-[3/4] rounded-[1.75rem] overflow-hidden ring-1 ring-dashed ring-gold/30 flex items-center justify-center bg-ink/40">
        <span className="font-display text-5xl text-gold/40">+</span>
      </div>
      <h3 className="font-display text-2xl tracking-wide mt-6 text-white/60">Nuevo Barbero</h3>
      <p className="text-gold/70 text-xs uppercase tracking-[0.15em] mt-1">Próximamente</p>
      <p className="text-white/35 text-sm mt-3 leading-relaxed max-w-[16rem]">
        Estamos sumando talento al equipo. Muy pronto un nuevo experto se une a Calle Ocho.
      </p>
    </div>
  );
}
