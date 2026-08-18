import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { ReservaProvider } from './context/ReservaContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <ReservaProvider>
        <App />
      </ReservaProvider>
    </CartProvider>
  </StrictMode>,
)
