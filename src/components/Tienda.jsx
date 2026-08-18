import { PRODUCTS } from "../data/site";
import { useCart } from "../context/CartContext";
import ProductCard from "./ProductCard";
import useReveal from "../hooks/useReveal";

export default function Tienda() {
  const { addItem } = useCart();
  const [headerRef, headerInView] = useReveal();

  return (
    <section id="tienda" className="relative py-24 px-5 overflow-hidden">
      <div className="animate-breathe pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />
      <div
        className="animate-breathe pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gold/5 blur-3xl"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="eyebrow uppercase text-gold text-xs md:text-sm mb-4">Tienda</p>
          <h2 className="font-display text-5xl md:text-6xl">PRODUCTOS</h2>
          <div className="mx-auto mt-5 h-px w-16 bg-gold" />
          <p className="text-white/50 mt-5 max-w-xl mx-auto text-sm">
            Lleva a casa el mismo cuidado que recibes en el sillón.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {PRODUCTS.map((p, index) => (
            <ProductCard key={p.id} p={p} index={index} onAdd={addItem} />
          ))}
        </div>

        <p className="text-center text-white/30 text-xs mt-8">
          Precios y catálogo referenciales — sujetos a confirmación.
        </p>
      </div>
    </section>
  );
}
