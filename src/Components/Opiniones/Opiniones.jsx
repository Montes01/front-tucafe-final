import { useState, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons';

function Review() {
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
      slidesPerView: 1,
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
        768: {
          slidesPerView: 2
        }
      }
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <section className="review" id="review">
      <h1 className="heading">Opiniones</h1>

      <div className={`navbar ${menuActive ? 'active' : ''}`}>
        <button id="menu-btn">Toggle Menu</button>
        {/* Contenido de la barra de navegación */}
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
  );
}

export default Review;
