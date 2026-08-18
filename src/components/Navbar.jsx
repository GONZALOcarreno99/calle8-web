import { useEffect, useState } from "react";
import logo from "../assets/logo.webp";
import { useCart } from "../context/CartContext";

const LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#barberos", label: "Barberos" },
  { href: "#galeria", label: "Galería" },
  { href: "#tienda", label: "Tienda" },
  { href: "#ubicacion", label: "Ubicación" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("");
  const { count, setOpen: setCartOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`animate-nav-drop fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/95 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
        <a href="#top" className="group flex items-center gap-3">
          <div className="relative h-10 w-10 rounded-full ring-1 ring-gold/0 transition-all duration-500 group-hover:ring-2 group-hover:ring-gold group-hover:scale-110 group-hover:shadow-[0_0_18px_rgba(184,147,90,0.6)]">
            <img
              src={logo}
              alt="Calle Ocho Barber Shop"
              className="h-full w-full rounded-full object-cover transition-transform duration-700 group-hover:rotate-[360deg]"
            />
          </div>
          <span className="font-display text-lg sm:text-2xl tracking-[0.1em] sm:tracking-[0.15em] leading-none transition-colors duration-300 group-hover:text-gold">
            CALLE OCHO
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`link-underline text-xs uppercase tracking-[0.2em] transition-colors ${
                activeId === l.href ? "active text-gold" : "text-white/70 hover:text-gold"
              }`}
            >
              {l.label}
            </a>
          ))}

          <button
            onClick={() => setCartOpen(true)}
            aria-label="Ver carrito"
            className="relative h-10 w-10 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 hover:border-gold hover:text-gold hover:scale-105"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.5 3h2l2.6 12.6a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6L21 8H6" />
            </svg>
            {count > 0 && (
              <span
                key={count}
                className="animate-pop absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full bg-gold text-ink text-[10px] font-bold flex items-center justify-center"
              >
                {count}
              </span>
            )}
          </button>

          <a
            href="#reserva"
            className="group/btn relative overflow-hidden rounded-full border border-gold px-6 py-2 text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            <span className="relative z-10">Reservar</span>
            <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-full bg-white/30 skew-x-[-15deg] transition-transform duration-700 group-hover/btn:translate-x-[320%]" />
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setCartOpen(true)}
            aria-label="Ver carrito"
            className="relative h-9 w-9 rounded-full border border-white/20 flex items-center justify-center text-white transition-all duration-300 active:border-gold active:text-gold active:scale-90"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.5 3h2l2.6 12.6a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6L21 8H6" />
            </svg>
            {count > 0 && (
              <span
                key={count}
                className="animate-pop absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full bg-gold text-ink text-[10px] font-bold flex items-center justify-center"
              >
                {count}
              </span>
            )}
          </button>
          <button
            aria-label="Abrir menú"
            onClick={() => setOpen((o) => !o)}
            className="text-white p-2"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform duration-300">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden grid overflow-hidden transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden bg-ink border-t border-line px-5 pb-6 flex flex-col gap-5">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-xs uppercase tracking-[0.2em] text-white/70 py-1 hover:text-gold active:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#reserva"
            onClick={() => setOpen(false)}
            className="rounded-full border border-gold px-6 py-3 text-center text-xs uppercase tracking-[0.2em] text-gold transition-all duration-200 active:bg-gold active:text-ink active:scale-95"
          >
            Reservar
          </a>
        </div>
      </div>
    </header>
  );
}
