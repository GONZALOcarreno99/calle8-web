import { AMENIDADES, EXTRAS, INCLUYE, SERVICES } from "../data/site";
import { useReservaPreset } from "../context/ReservaContext";
import ServiceCard from "./ServiceCard";
import useReveal from "../hooks/useReveal";

export default function Servicios() {
  const { setPreset } = useReservaPreset();
  const [extrasRef, extrasInView] = useReveal();

  return (
    <section id="servicios" className="relative py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="eyebrow uppercase text-gold text-xs md:text-sm mb-4">Precios</p>
          <h2 className="font-display text-5xl md:text-6xl">NUESTROS SERVICIOS</h2>
          <div className="mx-auto mt-5 h-px w-16 bg-gold" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((s, index) => (
            <ServiceCard
              key={s.id}
              s={s}
              index={index}
              onReservar={() => setPreset({ paqueteId: s.id })}
            />
          ))}
        </div>

        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          <div className="rounded-[2rem] bg-panel border border-line p-6 transition-all duration-300 hover:-translate-y-1 active:-translate-y-1 hover:border-gold/40 active:border-gold/40">
            <p className="text-gold text-xs uppercase tracking-[0.2em] mb-4 text-center">Todos los servicios incluyen</p>
            <div className="space-y-2.5">
              {INCLUYE.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold text-[10px]">
                    ✓
                  </span>
                  <span className="text-sm text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-panel border border-line p-6 transition-all duration-300 hover:-translate-y-1 active:-translate-y-1 hover:border-gold/40 active:border-gold/40">
            <p className="text-gold text-xs uppercase tracking-[0.2em] mb-4 text-center">En Calle Ocho también disfrutas</p>
            <div className="space-y-2.5">
              {AMENIDADES.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold text-[10px]">
                    ✓
                  </span>
                  <span className="text-sm text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          ref={extrasRef}
          className={`mt-14 transition-all duration-700 ease-out ${
            extrasInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-center text-gold text-xs uppercase tracking-[0.2em] mb-6">Súmale a tu corte</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {EXTRAS.map((e, i) => (
              <div
                key={e.nombre}
                style={{ transitionDelay: extrasInView ? `${i * 70}ms` : "0ms" }}
                className={`flex items-center gap-3 rounded-xl border border-line bg-panel px-4 py-3 transition-all duration-500 hover:border-gold/50 active:border-gold/50 hover:-translate-y-0.5 active:-translate-y-0.5 ${
                  extrasInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold text-xs">
                  +
                </span>
                <span className="flex-1 text-sm text-white/80">{e.nombre}</span>
                <span className="text-gold font-semibold text-sm shrink-0">S/ {e.precio}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-white/30 text-xs mt-6">
            Precios de extras referenciales — sujetos a confirmación.
          </p>
        </div>
      </div>
    </section>
  );
}
