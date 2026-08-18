import galeria1 from "../assets/galeria/local-1.webp";
import galeria2 from "../assets/galeria/local-2.webp";
import galeria3 from "../assets/galeria/local-3.webp";
import galeria4 from "../assets/galeria/local-4.webp";
import galeria5 from "../assets/galeria/local-5.webp";

export const WHATSAPP_NUMBER = "51903310311";

export const MAPS_LINK = "https://maps.app.goo.gl/AN8NJ4R8M64GWBNA8";
export const MAPS_EMBED = "https://www.google.com/maps?q=-12.1942682,-76.9447536&z=17&output=embed";

// PENDIENTE: falta la dirección exacta (calle, número, distrito) que confirme el dueño.
export const DIRECCION = "Dirección exacta pendiente de confirmar";

export function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const SERVICES = [
  {
    id: "basico",
    nombre: "BÁSICO",
    subtitulo: "Esencial para tu estilo",
    precio: 29,
    icono: "scissors",
    items: [
      { nombre: "Corte moderno", detalle: "Estilo a tu manera" },
      { nombre: "Mascarilla exprés", detalle: "Refresca e hidrata tu piel" },
      { nombre: "Perfilado de cejas", detalle: "Define tu mirada" },
    ],
  },
  {
    id: "premium",
    nombre: "PREMIUM",
    subtitulo: "Un extra de cuidado",
    precio: 35,
    icono: "diamond",
    destacado: true,
    items: [
      { nombre: "Corte moderno", detalle: "Estilo a tu manera" },
      { nombre: "Mascarilla exprés", detalle: "Refresca e hidrata tu piel" },
      { nombre: "Lavado de cabello", detalle: "Limpieza y frescura total" },
      { nombre: "Perfilado de cejas", detalle: "Define tu mirada" },
    ],
  },
  {
    id: "vip",
    nombre: "VIP",
    subtitulo: "La experiencia completa",
    precio: 65,
    icono: "crown",
    items: [
      { nombre: "Corte moderno", detalle: "Estilo a tu manera" },
      { nombre: "Limpieza facial profunda", detalle: "Limpieza, exfoliación y renovación" },
      { nombre: "Masajes", detalle: "Relajación que se nota" },
      { nombre: "Perfilado de cejas", detalle: "Define tu mirada" },
      { nombre: "Lavado de cabello", detalle: "Limpieza y frescura total" },
      { nombre: "PlayStation 5", detalle: "Disfruta y relájate mientras te consientes" },
    ],
  },
];

export const INCLUYE = ["Bebida de cortesía", "Perfume premium"];

export const AMENIDADES = ["Ambiente premium", "Zona PlayStation 5", "Atención de calidad"];

// PLACEHOLDER: extras de referencia. Reemplazar cuando el dueño confirme precios reales.
export const EXTRAS = [
  { nombre: "Diseño de líneas o cejas", precio: 10 },
  { nombre: "Depilación de nariz y oídos", precio: 10 },
  { nombre: "Tinte de barba o cabello", precio: 15 },
  { nombre: "Exfoliación facial", precio: 12 },
  { nombre: "Aplicación de keratina", precio: 20 },
  { nombre: "Corte para niños (hasta 10 años)", precio: 20 },
];

// PLACEHOLDER: descripciones de referencia. Reemplazar cuando el dueño confirme el perfil real de cada barbero.
export const BARBEROS = [
  {
    id: "jhonatan",
    nombre: "Jhonatan Torres",
    especialidad: "Fades y diseños a navaja",
    descripcion: "Especialista en degradados milimétricos y diseños personalizados. Puntual y de trato cercano en cada cita.",
    foto: galeria2,
  },
  {
    id: "kevin",
    nombre: "Kevin Ramos",
    especialidad: "Barba y afeitado clásico",
    descripcion: "Maestro del afeitado a la antigua con navaja y toallas calientes. Perfeccionista con cada detalle de la barba.",
    foto: galeria5,
  },
];

export const GALERIA = [galeria5, galeria1, galeria2, galeria3, galeria4];

// PLACEHOLDER: fotos genéricas de stock (Pexels, sin marca visible) solo para la demo.
// Reemplazar por fotos reales de los productos antes de publicar en serio.
function pexels(id) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600`;
}

// PLACEHOLDER: precios y catálogo de referencia. Reemplazar cuando el dueño
// confirme la lista real de productos, precios y fotos.
export const PRODUCTS = [
  {
    id: "pomada",
    nombre: "Pomada Clásica",
    categoria: "Styling",
    precio: 25,
    icono: "jar",
    foto: pexels(16372643),
    descripcion: "Pomada a base de agua, fácil de aplicar y de retirar con un solo lavado.",
    beneficio: "Fijación fuerte todo el día sin dejar el cabello duro ni grasoso.",
  },
  {
    id: "gel",
    nombre: "Gel Efecto Húmedo",
    categoria: "Styling",
    precio: 18,
    icono: "jar",
    foto: pexels(6387876),
    descripcion: "Gel transparente de secado rápido, ideal para peinados con definición.",
    beneficio: "Acabado brillante estilo 'wet look' con fijación de larga duración.",
  },
  {
    id: "cera",
    nombre: "Cera Modeladora",
    categoria: "Styling",
    precio: 20,
    icono: "jar",
    foto: pexels(6956264),
    descripcion: "Cera de textura firme pensada para peinados con volumen y forma definida.",
    beneficio: "Moldea con precisión y da textura mate, ideal para peinados definidos.",
  },
  {
    id: "aceite-barba",
    nombre: "Aceite para Barba",
    categoria: "Barba",
    precio: 22,
    icono: "bottle",
    foto: pexels(4021780),
    descripcion: "Mezcla de aceites naturales de rápida absorción para el cuidado diario.",
    beneficio: "Suaviza, hidrata y controla la comezón de la barba en crecimiento.",
  },
  {
    id: "balsamo-barba",
    nombre: "Bálsamo para Barba",
    categoria: "Barba",
    precio: 24,
    icono: "jar",
    foto: pexels(15549837),
    descripcion: "Bálsamo cremoso con ligera fijación para dar forma a la barba.",
    beneficio: "Nutre e hidrata la barba y ayuda a domar los vellos rebeldes.",
  },
  {
    id: "perfume",
    nombre: "Perfume Calle Ocho",
    categoria: "Fragancia",
    precio: 35,
    icono: "bottle",
    foto: pexels(34089130),
    descripcion: "Fragancia amaderada de la casa, la misma que usamos en el sillón.",
    beneficio: "Fragancia de larga duración, la misma que usamos en el sillón.",
  },
  {
    id: "shampoo",
    nombre: "Shampoo Anticaída",
    categoria: "Cuidado",
    precio: 28,
    icono: "bottle",
    foto: pexels(8054407),
    descripcion: "Shampoo de uso diario formulado para cabello y cuero cabelludo.",
    beneficio: "Fortalece la raíz y reduce la caída del cabello con uso constante.",
  },
  {
    id: "talco",
    nombre: "Talco Refrescante",
    categoria: "Cuidado",
    precio: 15,
    icono: "jar",
    foto: pexels(8789605),
    descripcion: "Talco de secado rápido para usar después del corte o la afeitada.",
    beneficio: "Sensación fresca post-corte y controla el brillo de la piel.",
  },
  {
    id: "crema-afeitar",
    nombre: "Crema para Afeitar",
    categoria: "Barba",
    precio: 19,
    icono: "jar",
    foto: pexels(8789596),
    descripcion: "Crema de afeitar cremosa que facilita el deslizamiento de la navaja.",
    beneficio: "Afeitado suave y sin irritación, protege la piel de cortes.",
  },
  {
    id: "cera-bigote",
    nombre: "Cera para Bigote",
    categoria: "Barba",
    precio: 16,
    icono: "jar",
    foto: pexels(16372641),
    descripcion: "Cera de fijación fuerte en formato mini, fácil de llevar.",
    beneficio: "Modela y fija el bigote todo el día sin dejarlo rígido.",
  },
  {
    id: "aftershave",
    nombre: "Loción Aftershave",
    categoria: "Barba",
    precio: 21,
    icono: "bottle",
    foto: pexels(7320312),
    descripcion: "Loción refrescante para después del afeitado, sin alcohol agresivo.",
    beneficio: "Calma la piel y cierra los poros después de afeitar.",
  },
  {
    id: "spray-fijador",
    nombre: "Spray Fijador Sin Gas",
    categoria: "Styling",
    precio: 23,
    icono: "bottle",
    foto: pexels(8467960),
    descripcion: "Spray de fijación ligera, ideal para retoques rápidos.",
    beneficio: "Fijación de larga duración sin apelmazar el cabello.",
  },
  {
    id: "aceite-capilar",
    nombre: "Aceite Capilar Brillante",
    categoria: "Cuidado",
    precio: 26,
    icono: "bottle",
    foto: pexels(9395858),
    descripcion: "Aceite ligero que se aplica en puntas y controla el frizz.",
    beneficio: "Da brillo natural y suavidad sin apelmazar el cabello.",
  },
  {
    id: "desodorante",
    nombre: "Desodorante en Barra",
    categoria: "Cuidado",
    precio: 14,
    icono: "jar",
    foto: pexels(8490122),
    descripcion: "Desodorante de larga duración con la misma línea de fragancias de la casa.",
    beneficio: "Protección todo el día con fragancia discreta.",
  },
  {
    id: "kit-viaje",
    nombre: "Kit de Viaje Calle Ocho",
    categoria: "Fragancia",
    precio: 45,
    icono: "bottle",
    foto: pexels(5192490),
    descripcion: "Pomada y perfume en formato mini, ideal para el día a día o de viaje.",
    beneficio: "Lleva tu estilo Calle Ocho a donde vayas.",
  },
];

export function cartWhatsappMessage(items, subtotal) {
  const lines = items.map((i) => `- ${i.qty}x ${i.nombre} (S/${i.precio}) = S/${i.qty * i.precio}`);
  return `Hola! Quiero hacer este pedido en Barbería Calle Ocho:\n${lines.join("\n")}\n\nTotal: S/${subtotal}`;
}
