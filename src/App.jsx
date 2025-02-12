import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { IS_DEVELOPMENT } from './config.js'
import { useFilters } from './hooks/useFilters.js'
import { Cart } from './components/Cart.jsx'
import Inicio from './components/Inicio.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navegacion } from './components/Navegacion.jsx';
import Productos from './components/Productos.jsx'
import Header1 from './components/Header1.jsx'

function App () {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <BrowserRouter>
      <Header1 />
        <Navegacion />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="*" element={<h1>Error 404: Ruta no encontrada</h1>} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </>
  )
}

export default App