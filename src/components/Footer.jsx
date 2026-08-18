import logo from "../assets/logo.jpg";
import { WHATSAPP_NUMBER, whatsappLink } from "../data/site";
import useReveal from "../hooks/useReveal";

export default function Footer() {
  const prettyNumber = `+${WHATSAPP_NUMBER.slice(0, 2)} ${WHATSAPP_NUMBER.slice(2, 5)} ${WHATSAPP_NUMBER.slice(5, 8)} ${WHATSAPP_NUMBER.slice(8)}`;
  const [ref, inView] = useReveal();

  return (
    <footer ref={ref} className="relative border-t border-line px-5 py-12 overflow-hidden">
      <div
        className={`pointer-events-none absolute top-0 left-1/2 h-px bg-gradient-to-r from-transparent via-gold to-transparent transition-all duration-1000 ease-out ${
          inView ? "w-full -translate-x-1/2" : "w-0 -translate-x-1/2"
        }`}
      />

      <div
        className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="group flex items-center gap-3">
          <div className="relative h-10 w-10 rounded-full ring-1 ring-gold/40 transition-all duration-500 group-hover:ring-2 group-hover:ring-gold group-hover:scale-110 group-hover:shadow-[0_0_18px_rgba(184,147,90,0.6)]">
            <img
              src={logo}
              alt="Calle Ocho Barber Shop"
              className="h-full w-full rounded-full object-cover transition-transform duration-700 group-hover:rotate-[360deg]"
            />
          </div>
          <div className="text-left">
            <p className="font-display text-xl tracking-wide leading-none transition-colors duration-300 group-hover:text-gold">CALLE OCHO</p>
            <p className="text-white/40 text-xs">Barber Shop</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-white/60">
          <a
            href={whatsappLink("Hola! Quiero más información de Barbería Calle Ocho.")}
            target="_blank"
            rel="noreferrer"
            className="link-underline hover:text-gold transition-colors"
          >
            {prettyNumber}
          </a>
          <a
            href="https://www.instagram.com/barberia.calle8/"
            target="_blank"
            rel="noreferrer"
            className="link-underline hover:text-gold transition-colors"
          >
            @barberia.calle8
          </a>
        </div>
      </div>
      <p
        className={`text-center text-white/30 text-xs mt-8 transition-opacity duration-700 delay-200 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        © {new Date().getFullYear()} Barbería Calle Ocho. Todos los derechos reservados.
      </p>
    </footer>
  );
}
