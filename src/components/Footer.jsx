import './Footer.css'
export const Footer = () => {
    return (
      <>
        <footer className="site-footer">
          <div className="grid-footer contenedor">
            <div>
              <h3>Contactanos</h3>
              <nav className="footer-menu">
                <a href="#">11-3949-6567</a>
              </nav>
            </div>
            <div>
              <h3>Sobre Nosotros</h3>
              <nav className="footer-menu">
                <a href="#">Nuestra Historia</a>
                <a href="#">Terminos del Servicio</a>
              </nav>
            </div>
            <div>
              <h3>Soporte</h3>
              <nav className="footer-menu">
                <a href="#">Preguntas Frecuentes</a>
                <a href="#">Confianza y Seguridad</a>
              </nav>
            </div>
          </div>
          <p className="copyright">
            Todos los derechos Reservados, Mi primer Ecommers
          </p>
        </footer>
      </>
    );
  };
  
  export default Footer;