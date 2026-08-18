import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Barberos from "./components/Barberos";
import Galeria from "./components/Galeria";
import Reserva from "./components/Reserva";
import Tienda from "./components/Tienda";
import Ubicacion from "./components/Ubicacion";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import CartDrawer from "./components/CartDrawer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Servicios />
      <Barberos />
      <Galeria />
      <Reserva />
      <Tienda />
      <Ubicacion />
      <Footer />
      <WhatsAppFloat />
      <CartDrawer />
    </>
  );
}

export default App;
