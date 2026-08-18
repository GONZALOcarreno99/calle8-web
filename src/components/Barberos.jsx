import { BARBEROS } from "../data/site";
import BarberCard from "./BarberCard";
import ComingSoonBarberCard from "./ComingSoonBarberCard";

export default function Barberos() {
  return (
    <section id="barberos" className="relative py-24 px-5 bg-panel">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="eyebrow uppercase text-gold text-xs md:text-sm mb-4">Nuestro equipo</p>
          <h2 className="font-display text-5xl md:text-6xl">ELIGE TU BARBERO</h2>
          <div className="mx-auto mt-5 h-px w-16 bg-gold" />
          <p className="text-white/50 mt-5 max-w-xl mx-auto text-sm">
            Cada estilo tiene su experto. Elige con quién quieres tu cita.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {BARBEROS.map((b, index) => (
            <BarberCard key={b.id} b={b} index={index} />
          ))}
          <ComingSoonBarberCard index={BARBEROS.length} />
        </div>
      </div>
    </section>
  );
}
