import { useCart } from "../context/CartContext";
import { cartWhatsappMessage, whatsappLink } from "../data/site";

export default function CartDrawer() {
  const { items, updateQty, removeItem, subtotal, open, setOpen, clear } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 z-[60] transition-opacity ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-panel z-[70] rounded-l-[2rem] shadow-2xl transition-transform duration-300 flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative flex items-center justify-between px-6 py-5 border-b border-line overflow-hidden">
          <span
            className={`pointer-events-none absolute bottom-0 left-1/2 h-px bg-gradient-to-r from-transparent via-gold to-transparent transition-all duration-700 ease-out ${
              open ? "w-full -translate-x-1/2 delay-200" : "w-0 -translate-x-1/2"
            }`}
          />
          <h3 className="font-display text-2xl tracking-wide">TU PEDIDO</h3>
          <button
            onClick={() => setOpen(false)}
            aria-label="Cerrar carrito"
            className="h-9 w-9 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 hover:border-gold hover:text-gold active:border-gold active:text-gold hover:rotate-90 active:rotate-90"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
          {items.length === 0 && (
            <p className="text-white/40 text-sm text-center mt-10">Tu carrito está vacío.</p>
          )}
          {items.map((i) => (
            <div
              key={i.id}
              className="flex items-center gap-3 rounded-2xl border border-transparent hover:border-line hover:bg-ink/40 px-2 -mx-2 py-2 transition-colors duration-300 animate-pop"
            >
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{i.nombre}</p>
                <p className="text-gold text-sm">S/ {i.precio}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => updateQty(i.id, i.qty - 1)}
                  aria-label="Quitar uno"
                  className="h-7 w-7 rounded-full border border-white/25 flex items-center justify-center transition-all duration-200 hover:border-gold hover:text-gold active:border-gold active:text-gold hover:scale-110 active:scale-90"
                >
                  −
                </button>
                <span key={i.qty} className="w-5 text-center text-sm animate-pop">{i.qty}</span>
                <button
                  onClick={() => updateQty(i.id, i.qty + 1)}
                  aria-label="Agregar uno"
                  className="h-7 w-7 rounded-full border border-white/25 flex items-center justify-center transition-all duration-200 hover:border-gold hover:text-gold active:border-gold active:text-gold hover:scale-110 active:scale-90"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeItem(i.id)}
                aria-label={`Quitar ${i.nombre}`}
                className="h-7 w-7 shrink-0 rounded-full flex items-center justify-center text-white/30 transition-all duration-200 hover:text-red-400 active:text-red-400 hover:scale-110 active:scale-90"
              >
                ✕
              </button>
            </div>
          ))}

          {items.length > 0 && (
            <button onClick={clear} className="text-xs text-white/30 hover:text-white/60 active:text-white/60 transition-colors underline">
              Vaciar carrito
            </button>
          )}
        </div>

        <div
          className={`grid overflow-hidden transition-all duration-500 ease-out ${
            items.length > 0 ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="relative border-t border-line px-6 py-5 overflow-hidden">
              <span className="pointer-events-none absolute top-0 left-1/2 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
              <div className="flex justify-between items-baseline mb-4">
                <span className="text-white/60 text-sm">Subtotal</span>
                <span key={subtotal} className="font-display text-3xl text-gold animate-pop">S/ {subtotal}</span>
              </div>
              <a
                href={whatsappLink(cartWhatsappMessage(items, subtotal))}
                target="_blank"
                rel="noreferrer"
                className="group/checkout relative overflow-hidden block rounded-full bg-gold py-3 text-center text-xs uppercase tracking-[0.2em] font-semibold text-ink transition-all duration-300 hover:bg-gold-light active:bg-gold-light hover:-translate-y-0.5 active:scale-95 hover:shadow-[0_15px_35px_-15px_rgba(184,147,90,0.6)]"
              >
                <span className="relative z-10">Pedir por WhatsApp</span>
                <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-full bg-white/30 skew-x-[-15deg] transition-transform duration-700 group-hover/checkout:translate-x-[320%]" />
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
