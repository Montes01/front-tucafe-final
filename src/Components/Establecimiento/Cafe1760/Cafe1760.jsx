
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Cafe1760 = () => {


    return (
        <div className="productos">
          <div className='imgcafes'>
            <ul>
                <li><img src='https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/Cafe%201760/iyeuhhvcfh0qd8vhxg9g' alt="" /></li> 
                <li><img src='https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/Cafe%201760/zmibfxjpmn7ltkbvkrv5' alt="" /></li>
                <li><img src='https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/Cafe%201760/q6rmzifktvpr5q2iomnr' alt="" /></li>
                <li><img src='https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/Cafe%201760/wdm9pgymsfh9lcebeis4' alt="" /></li>
            </ul>     
          </div>

            {/* Resto de tu componente */}
            <div className="producto-nego">
                <div className="banner">
                    <h1>Cafe 1760</h1>
                </div>
                <h3>En el corazón de Armenia florece un jardín cargado de tranquilidad y belleza; ven... te acompañamos durante esta experiencia sensorial porque nos encanta tu visita.</h3>
                <div className='horario'>
                <h4> 
                     <a href="https://www.instagram.com/stories/highlights/17963718502768602/?hl=es">Menú</a>
                     <br />Horarios
                </h4>


                    <p>
                        lunes 02:00pm-09:30pm<br />
                        martes<b>Cerrado</b><br />
                        miércoles 02:00pm-09:30pm<br />
                        jueves 02:00pm-09:30pm<br />
                        viernes 02:00pm-09:30pm <br />
                        sábado 02:00pm-09:30pm <br />
                        domingo 02:00pm-09:30pm <br />
                    </p>
                </div>
                <div className="redes">
                    <h5>Redes sociales</h5>
                    <p>
                        <a href="https://www.facebook.com/p/Cafe-1760-100027271822805/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} /> Facebook
                        </a>
                        <a href="https://www.instagram.com/1760cafe/?hl=es" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} /> Instagram
                        </a>
                        {/*<a href="" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                        </a>*/}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Cafe1760;
