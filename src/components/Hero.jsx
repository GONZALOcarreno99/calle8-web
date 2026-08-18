import { useEffect, useState } from "react";
import galeria5 from "../assets/galeria/local-5.webp";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div
          style={{ transform: `scale(${revealed ? 1.1 : 1.3})` }}
          className="h-full w-full transition-transform duration-1000 ease-out"
        >
          <img
            src={galeria5}
            alt="Interior Barbería Calle Ocho"
            fetchPriority="high"
            decoding="async"
            style={{ transform: `translateY(${scrollY * 0.25}px)` }}
            className={`h-full w-full object-cover opacity-80 transition-[filter] duration-1000 ease-out will-change-transform ${
              revealed ? "blur-none" : "blur-md"
            }`}
          />
        </div>
        {revealed && <span className="animate-flash pointer-events-none absolute inset-0 bg-gold" />}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
      </div>

      <div className="animate-breathe pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[32rem] w-[32rem] rounded-full bg-gold/10 blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-5 pt-28 pb-20 text-center">
        <p
          className="animate-fade-up eyebrow uppercase text-gold text-xs md:text-sm mb-6"
          style={{ animationDelay: "0ms" }}
        >
          Est. 2018 — Barber Shop
        </p>
        <h1
          className="animate-fade-up font-display text-6xl sm:text-7xl md:text-8xl leading-[0.95]"
          style={{ animationDelay: "150ms" }}
        >
          BARBERÍA
          <br />
          CALLE OCHO
        </h1>
        <div
          className="animate-fade-up mx-auto mt-6 h-px w-16 bg-gold"
          style={{ animationDelay: "350ms" }}
        />
        <p
          className="animate-fade-up mt-6 text-base md:text-lg text-white/60 max-w-md mx-auto tracking-wide"
          style={{ animationDelay: "450ms" }}
        >
          Más que un corte, una experiencia.
        </p>

        <div
          className="animate-fade-up mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animationDelay: "600ms" }}
        >
          <a
            href="#reserva"
            className="group/hero1 relative overflow-hidden w-full sm:w-auto rounded-full bg-gold px-9 py-3 text-xs uppercase tracking-[0.2em] font-semibold text-ink transition-all duration-300 hover:bg-gold-light active:bg-gold-light hover:-translate-y-0.5 active:scale-95 hover:shadow-[0_20px_45px_-20px_rgba(184,147,90,0.7)]"
          >
            <span className="relative z-10">Agenda tu cita</span>
            <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-full bg-white/30 skew-x-[-15deg] transition-transform duration-700 group-hover/hero1:translate-x-[320%]" />
          </a>
          <a
            href="#servicios"
            className="w-full sm:w-auto rounded-full border border-white/30 px-9 py-3 text-xs uppercase tracking-[0.2em] text-white/80 transition-all duration-300 hover:border-gold hover:text-gold active:border-gold active:text-gold hover:-translate-y-0.5 active:scale-95"
          >
            Ver servicios y precios
          </a>
        </div>
      </div>

      <a
        href="#reserva"
        aria-label="Bajar a la siguiente sección"
        className="animate-bounce absolute bottom-8 left-1/2 -translate-x-1/2 h-9 w-9 rounded-full border border-white/25 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold transition-colors"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
