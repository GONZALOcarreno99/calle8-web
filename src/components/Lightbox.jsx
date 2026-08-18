import { useEffect } from "react";

export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const open = index !== null;

  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, onPrev, onNext]);

  return (
    <div
      className={`fixed inset-0 z-[80] flex items-center justify-center transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" onClick={onClose} />

      <button
        onClick={onClose}
        aria-label="Cerrar"
        className="absolute top-5 right-5 z-10 h-11 w-11 rounded-full border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:border-gold hover:text-gold hover:rotate-90 active:border-gold active:text-gold active:rotate-90"
      >
        ✕
      </button>

      <button
        onClick={onPrev}
        aria-label="Anterior"
        className="absolute left-3 md:left-6 z-10 h-11 w-11 rounded-full border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:border-gold hover:text-gold hover:-translate-x-1 active:border-gold active:text-gold active:-translate-x-1"
      >
        ‹
      </button>
      <button
        onClick={onNext}
        aria-label="Siguiente"
        className="absolute right-3 md:right-6 z-10 h-11 w-11 rounded-full border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:border-gold hover:text-gold hover:translate-x-1 active:border-gold active:text-gold active:translate-x-1"
      >
        ›
      </button>

      {open && (
        <img
          key={index}
          src={images[index]}
          alt={`Barbería Calle Ocho ${index + 1}`}
          className="animate-pop relative max-h-[82vh] max-w-[88vw] rounded-2xl object-contain shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] ring-1 ring-gold/30"
        />
      )}
    </div>
  );
}
