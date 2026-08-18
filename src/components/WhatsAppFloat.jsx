import { whatsappLink } from "../data/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Hola! Quiero más información de Barbería Calle Ocho.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/40 hover:scale-105 active:scale-90 transition-transform"
    >
      <svg viewBox="0 0 32 32" width="30" height="30" fill="white">
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.34.652 4.527 1.78 6.393L4 29l7.86-1.744A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm6.98 17.02c-.29.816-1.44 1.53-2.36 1.72-.63.13-1.44.23-4.19-.9-3.5-1.44-5.75-4.98-5.93-5.21-.17-.23-1.42-1.89-1.42-3.6 0-1.71.89-2.55 1.21-2.9.28-.31.65-.4.87-.4.22 0 .43 0 .62.01.2.01.46-.08.72.55.29.7.98 2.41 1.06 2.58.08.17.14.37.03.6-.11.23-.17.37-.34.57-.17.2-.35.44-.5.6-.17.17-.34.35-.15.68.19.34.87 1.44 1.87 2.33 1.29 1.15 2.37 1.51 2.71 1.68.34.17.54.14.74-.09.2-.23.85-.99 1.08-1.33.23-.34.46-.28.77-.17.31.11 1.98.93 2.32 1.1.34.17.57.26.65.4.08.14.08.83-.21 1.64Z" />
      </svg>
    </a>
  );
}
