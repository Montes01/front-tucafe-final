
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GardenCafe = () => {


    return (
        <div className="productos">
          <div className='imgcafes'>
            <ul>
                <li><img src='https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/GardenCaf%C3%A9Chocolate/vbfcxnjd3ulcufmjmwhq' alt="" /></li> 
                <li><img src='https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/GardenCaf%C3%A9Chocolate/lilyd2gf9rmfo6u38gon' alt="" /></li>
                <li><img src='https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/GardenCaf%C3%A9Chocolate/ux1sccecediksb21n330' alt="" /></li>
                <li><img src='https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/GardenCaf%C3%A9Chocolate/riesbuz1xsrgplf8pbdc' alt="" /></li>
            </ul>     
          </div>

            {/* Resto de tu componente */}
            <div className="producto-nego">
                <div className="banner">
                    <h1>Garden Café & Chocolate</h1>
                </div>
                <h3>En el corazón de Armenia florece un jardín cargado de tranquilidad y belleza; ven... te acompañamos durante esta experiencia sensorial porque nos encanta tu visita.</h3>
                <div className='horario'>
                <h4> Horarios <br />
                     <a href="https://gardencafeychocola.wixsite.com/menu/categorias">Menú</a>
                </h4>


                    <p>
                        lunes 8:00am-10:00pm<br />
                        martes 8:00am-10:00pm<br />
                        miércoles 8:00am-10:00pm<br />
                        jueves 8:00am-10:00pm<br />
                        viernes 8:00am-10:00pm <br />
                        sábado 8:00am-10:00pm <br />
                        domingo 8:00am-10:00pm <br />
                    </p>
                </div>
                <div className="redes">
                    <h5>Redes sociales</h5>
                    <p>
                        <a href="https://www.facebook.com/Gardencafeychocolate/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} /> Facebook
                        </a>
                        <a href="https://www.instagram.com/gardencafeychocolate/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} /> Instagram
                        </a>
                        <a href="https://api.whatsapp.com/message/NSDY6WARSS7JI1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default GardenCafe;
