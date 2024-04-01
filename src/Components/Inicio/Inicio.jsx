import { useState, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { cafes } from '../Conts/Conts';
import Swal from 'sweetalert2';
const About = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    date: '',
    description: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validar los campos antes de enviar la solicitud
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch('http://localhost:8080/tuCafe/v1/reservation/creation_reservation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
  
        if (response.ok) {
          console.log('Datos enviados con éxito');
          Swal.fire({
            icon: "success",
            title: "¡Reserva exitosa!",
            showConfirmButton: false,
            timer: 2000
          });
        } else {
          console.error('Error al enviar datos');
          Swal.fire({
            icon: "error",
            title: "Reserva invalida",
            text: "Por favor ingresa de nuevo los datos"
          });
        }
      } catch (error) {
        console.error('Error al enviar datos:', error);
      }
    } else {
      setFormErrors(errors);
    }
  };
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const menu = document.querySelector('#menu-btn');

    menu.onclick = () => {
      setMenuActive(prevMenuActive => !prevMenuActive);
    };

    window.onscroll = () => {
      setMenuActive(false);
    };

    const swiper = new Swiper('.review-slider', {
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 2000, // Cambiar la velocidad del carrusel a 2 segundos
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        }
      }
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  const [cafes, setCafes] = useState([]);

    useEffect(() => {
    fetch('http://localhost:8080/tuCafe/v1/client/listBusiness')
      .then(response => {
        if (!response.ok) {
          throw new Error('Hubo un error al obtener los datos de los cafés.');
        }
        return response.json();
      })
      .then(data => {
        setCafes(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <>
      <section className="home" id="home">
        <div className="row">
          <div className="content">
            <h3 className="letra">
              Tu guía definitiva para descubrir los mejores lugares de café y cafeterías en el encantador Quindío.
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

      <section className="menu" id="menu">
        <h1 className="heading">Lugares más populares</h1>

        <div className="box-container">
          {cafes.map((cafe, index) => (
            <div className="box" key={index}>
              <div className="content">
                <h3>{cafe.name}</h3>
                <br />
                <div className="image-gallery">
                  <img src={cafe.image} alt={cafe.name} />
                </div>
                <p>{cafe.description}</p>
                <NavLink to={cafe.ruta} className="btn-link">
                  <button className="btn">Ver más</button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <h1 className="heading">Acerca de nosotros</h1>
        <div className="row">
          <div className="image">
            <img src="image/persona.webp" alt="" />
          </div>
          <div className="content">
            <h3 className="title">¡Lo que nos hace especiales!</h3>
            <p>
              Bienvenidos a <b>Tu Café</b> . Somos un equipo apasionado de amantes del café y viajeros locales comprometidos en ayudarte a explorar la rica cultura cafetera de esta región.
              <br />
              Nuestra misión es brindarte una experiencia única alrededor del café, destacando los rincones más acogedores y auténticos en los pueblos del Quindío. Entendemos que el café es más que una bebida; es una historia que conecta personas, lugares y tradiciones. A través de nuestra plataforma, queremos compartir contigo la magia que se encuentra en cada taza y en cada rincón de esta hermosa tierra cafetera.
            </p>
            <div className="icons-container">
              <div className="icons">
                <img src="image/about-icon-1.png" alt="" />
                <h3>café de calidad</h3>
              </div>
              <div className="icons">
                <img src="image/about-icon-2.png" alt="" />
                <h3>Lugares de alta Calidad</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="review" id="review">
        <h1 className="heading">Opiniones</h1>

        <div className={`navbar ${menuActive ? 'active' : ''}`}>
         
        </div>

        <div className="swiper review-slider">
          <div className="swiper-wrapper">
            {/* Contenido del swiper */}
            <div className="swiper-slide box">
              <FontAwesomeIcon icon={faQuoteLeft} />
              <FontAwesomeIcon icon={faQuoteRight} />
              <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/iltlvdwpu7rfjsxhs78c" alt="" />
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p>sit amet, consectetur adipisicing elit. Quo, earum quis dolorem quaerat tenetur illum.</p>
              <h3>John Doe</h3>
              <span>Satisfied Client</span>
            </div>

            <div className="swiper-slide box">
              <FontAwesomeIcon icon={faQuoteLeft} />
              <FontAwesomeIcon icon={faQuoteRight} />
              <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/ifdsxghyyadcpggqy1tm" alt="" />
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p>sit amet consectetur adipisicing elit. Rerum optio quasi ut, illo ipsam assumenda.</p>
              <h3>John Doe</h3>
              <span>Satisfied Client</span>
            </div>

            <div className="swiper-slide box">
              <FontAwesomeIcon icon={faQuoteLeft} />
              <FontAwesomeIcon icon={faQuoteRight} />
              <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/fnstz7ftrcldpbfeu57r" alt="" />
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p>sit amet consectetur adipisicing elit. Eius asperiores aliquam hic quis! Eligendi, aliquam.</p>
              <h3>John Doe</h3>
              <span>Satisfied Client</span>
            </div>

            <div className="swiper-slide box">
              <FontAwesomeIcon icon={faQuoteLeft} />
              <FontAwesomeIcon icon={faQuoteRight} />
              <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/yoc39uejzlse2uzfppxd" alt="" />
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p>sit amet consectetur adipisicing elit. Eligendi modi perspiciatis distinctio velit aliquid a.</p>
              <h3>John Doe</h3>
              <span>Satisfied Client</span>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </section>

      <section className="book" id="book">
      <h1 className="heading">Reserva</h1>
      <form onSubmit={handleSubmit} className='reserva-f'>
        <div className="search-bar1">
          {/* <input
              type="text"
              name="lugar"
              value={formData.lugar}
              onChange={handleChange}
              placeholder="Buscar Lugar..."
              className="box"
            /> */}
        </div>
        <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  className="box"
  placeholder="Escribe tu correo electronico"
/>

        <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  className="box"
  placeholder="Escribe el nombre del negocio"
/>

        {formErrors.name && <p className="error">{formErrors.name}</p>}

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Mensaje"
          className="box"
          cols="30"
          rows="10"
        ></textarea>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          placeholder="date"
          className="box"
        />
        {formErrors.date && <p className="error">{formErrors.date}</p>}
        <input type="submit" value="Enviar" className="btn" />
      </form>
    </section>
    </>
  );
};

export default About;
