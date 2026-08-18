import { DIRECCION, MAPS_EMBED, MAPS_LINK, whatsappLink } from "../data/site";
import { HORARIO_TEXTO } from "../data/horarios";
import useReveal from "../hooks/useReveal";

export default function Ubicacion() {
  const [leftRef, leftInView] = useReveal();
  const [mapRef, mapInView] = useReveal();

  return (
    <section id="ubicacion" className="relative py-24 px-5 bg-panel overflow-hidden">
      <div className="animate-breathe pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div
          ref={leftRef}
          className={`transition-all duration-700 ease-out ${
            leftInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <p className="eyebrow uppercase text-gold text-xs md:text-sm mb-4">Encuéntranos</p>
          <h2 className="font-display text-5xl md:text-6xl mb-3">UBICACIÓN</h2>
          <div className="h-px w-16 bg-gold mb-6" />

          <div className="space-y-4 mb-8">
            <div
              style={{ transitionDelay: leftInView ? "200ms" : "0ms" }}
              className={`flex items-start gap-3 group transition-all duration-500 ${
                leftInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
            >
              <span className="relative mt-0.5 h-8 w-8 shrink-0 rounded-full border border-gold/40 flex items-center justify-center text-gold text-sm transition-transform duration-300 group-hover:scale-110 group-active:scale-110 group-hover:border-gold group-active:border-gold">
                <span className="absolute inset-0 rounded-full animate-pulse-gold" />
                📍
              </span>
              <p className="text-white/70 text-sm leading-relaxed">{DIRECCION}</p>
            </div>
            <div
              style={{ transitionDelay: leftInView ? "300ms" : "0ms" }}
              className={`flex items-start gap-3 group transition-all duration-500 ${
                leftInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
            >
              <span className="mt-0.5 h-8 w-8 shrink-0 rounded-full border border-gold/40 flex items-center justify-center text-gold text-sm transition-transform duration-300 group-hover:scale-110 group-active:scale-110 group-hover:border-gold group-active:border-gold group-hover:rotate-12 group-active:rotate-12">
                🕒
              </span>
              <p className="text-white/70 text-sm leading-relaxed">{HORARIO_TEXTO}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              className="group/loc1 relative overflow-hidden rounded-full bg-gold px-7 py-3 text-center text-xs uppercase tracking-[0.2em] font-semibold text-ink transition-all duration-300 hover:bg-gold-light active:bg-gold-light hover:-translate-y-0.5 active:scale-95 hover:shadow-[0_15px_35px_-15px_rgba(184,147,90,0.6)]"
            >
              <span className="relative z-10">Cómo llegar</span>
              <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-full bg-white/30 skew-x-[-15deg] transition-transform duration-700 group-hover/loc1:translate-x-[320%]" />
            </a>
            <a
              href={whatsappLink("Hola! Quiero saber el horario de atención de Barbería Calle Ocho.")}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/25 px-7 py-3 text-center text-xs uppercase tracking-[0.2em] text-white/80 transition-all duration-300 hover:border-gold hover:text-gold active:border-gold active:text-gold hover:-translate-y-0.5 active:scale-95"
            >
              Consultar horario
            </a>
          </div>
        </div>

        <div
          ref={mapRef}
          style={{ transitionDelay: mapInView ? "150ms" : "0ms" }}
          className={`relative h-80 md:h-96 rounded-[2rem] overflow-hidden ring-1 ring-line transition-all duration-700 ease-out hover:ring-gold/40 active:ring-gold/40 hover:shadow-[0_25px_60px_-25px_rgba(184,147,90,0.4)] active:shadow-[0_25px_60px_-25px_rgba(184,147,90,0.4)] ${
            mapInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          <iframe
            title="Ubicación Barbería Calle Ocho"
            src={MAPS_EMBED}
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
