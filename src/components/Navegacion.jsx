import { Link, NavLink, useLocation } from "react-router-dom";

export const Navegacion = () => {

  const location = useLocation();

  return (
    <>

      <div className="contenedor-navegacion">
        <nav className="nav-principal contenedor">
          <NavLink to="/Inicio" className={({isActive}) => (isActive ? 'active' : '')} >Inicio</NavLink>
          <NavLink to="/Productos" className={({isActive}) => (isActive ? 'active' : '')} >Productos</NavLink>
        </nav>
      </div>
      {
        location.pathname === '/' && (
          <div className="hero"></div>
        )
      }
    </>
  );
};