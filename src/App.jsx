import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/menu';
import Inicio from './Paginas/Inicio';
import Nosotros from './Paginas/Nosotros';
import Contacto from './Paginas/Contacto';
import Servicios from './Paginas/Servicios';
import Historia from './Paginas/Historia';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <section id="center">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/historia" element={<Historia />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
