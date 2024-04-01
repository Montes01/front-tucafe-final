import { cafes } from '../Conts/Conts';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Perfil.css';


const Perfil = () => {
  const [ setIsLoggedIn] = useState(true);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handleLogout = () => {
    // Aquí puedes realizar cualquier acción necesaria para cerrar la sesión
    setIsLoggedIn(false);
    // Ocultar el pop-up después de cerrar sesión
    setShowLogoutPopup(false);
  };

  return (
    <>
      {showLogoutPopup && (
        <div className="logout-popup">
          <p>¿Estás seguro de que deseas cerrar sesión?</p>
          <button  onClick={handleLogout}>Sí, cerrar sesión</button>
          <button onClick={() => setShowLogoutPopup(false)}>Cancelar</button>
        </div>
      )}


      <section className="home" id="home">
        <div className="row">
          <div className="content">
            <h3 className="letra">
              esta es una prueba para cuando el usuario esta logueado
            </h3>
            <a href="#menu" className="btn-about">
              Cafeterías en el <br /> encantador Quindío
            </a>
          </div>

          <div className="image">
            <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/tn273iuby9xxzjvar07k" className="main-home-image" alt="" />
          </div>
        </div>

        <div className="image-slider">
          <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/tn273iuby9xxzjvar07k" alt="" />
          <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/rdvteijamuubi7movsux" alt="" />
          <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/prrh7u9m6wczw928mmwo" alt="" />
        </div>
      </section>


      {/* en esta parte esta el codigo de cafes */}


      <section className="menu" id="menu">
        <h1 className="heading">Lugares más populares</h1>

        <div className="box-container">

          {
            cafes.map((cafe, index) => {
              return (

                <div className="box" key={index}> {/* segundo casilla del cafe */}

                  <div className="content">
                    <h3>{cafe.titulo}</h3>
                    <br />
                    <div className="image-gallery">
                      <img src={cafe.imagen} alt="" />
                    </div>
                    <p>{cafe.mensaje}</p>
                    <NavLink to={cafe.ruta} className="btn-link">
                      <button className="btn">Ver más</button>
                    </NavLink>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>

  

      {/* antigua seccion about */}


      <section className="book" id="book">
        <h1 className="heading">Reserva <span>tu lugar Favorito</span></h1>
        <form action="" className='reserva-f'>
          <div className="search-bar1">
            <input type="text" id="search-input" placeholder="Buscar Lugar..." className="box" />
          </div>
          <input type="text" placeholder="Nombre" className="box" />
          <input type="email" placeholder="Email" className="box" />
          <input type="number" placeholder="Contacto" className="box" />
          <textarea
            name=""
            placeholder="Mensaje"
            className="box"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <input type="submit" value="Enviar" className="btn" />
        </form>
      </section>
    </>
  );
};

export default Perfil;