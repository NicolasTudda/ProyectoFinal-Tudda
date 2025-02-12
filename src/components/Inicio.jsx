import React from 'react'
import img1 from '../img/producto1.webp'
import img2 from '../img/producto2.jpg'
import img3 from '../img/producto3.jpg'

export const Inicio = () => {
  return (
    <>
      <main className="contenido-principal contenedor">
        <h2 className="text-center">Algunos Productos</h2>

        <div className="listado-productos">
          <div className="producto">
            <img src={img1} alt="Imagen producto" />
            <div className="texto-producto">
              <h3>Iphone 9</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt maiores aperiam
              </p>
              <p className="precio">$1,000</p>
              <a href="Productos" className="btn">
                COMPRAR
              </a>
            </div>
          </div>

          <div className="producto">
            <img src={img2} alt="Imagen producto" />
            <div className="texto-producto">
              <h3>Iphone X</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt maiores aperiam
              </p>
              <p className="precio">$1,000</p>
              <a href="Productos#" className="btn">
                COMPRAR
              </a>
            </div>
          </div>

          <div className="producto">
            <img src={img3} alt="Imagen producto" />
            <div className="texto-producto">
              <h3>MacBook</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt maiores aperiam
              </p>
              <p className="precio">$1,000</p>
              <a href="Productos" className="btn">
                COMPRAR
              </a>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}

export default Inicio
