
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Deltorocafe = () => {


    return (
        <div className="productos">
          <div className='imgcafes'>
            <ul>
                <li><img src='https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/del%20toro%20cafe/h2lb7gmgdd1tn4ft8d4t' alt="" /></li> 
                <li><img src='https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/del%20toro%20cafe/fqef994ndebq9tpllh2t' alt="" /></li>
                <li><img src='https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/del%20toro%20cafe/l20lttgnvnqoqutujskh' alt="" /></li>
                <li><img src='https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/del%20toro%20cafe/hgwnigctzvxrsi3xz7jo' alt="" /></li>
            </ul>     
          </div>

            {/* Resto de tu componente */}
            <div className="producto-nego">
                <div className="banner">
                    <h1>Del toro café</h1>
                </div>
                <h3>Drink Slow Café Hecho en Colombia, El sabor de la imaginación. ☕</h3>
                <div className='horario'>
                <h4> 
                     <a href="https://me-qr.com/es/mobile/pdf/6100240">Menú</a>
                   <br /> Horarios
                </h4>


                    <p>
                        lunes 08:00am-08:00pm<br />
                        martes 08:00am-08:00pm<br />
                        miércoles 08:00am-08:00pm<br />
                        jueves 08:00am-08:00pm<br />
                        viernes 08:00am-08:00pm <br />
                        sábado 08:00am-08:00pm <br />
                        domingo <b>Cerrado</b> <br />
                    </p>
                </div>
                <div className="redes">
                    <h5>Redes sociales</h5>
                    <p>
                        {/*<a href="https://www.facebook.com/p/Cafe-1760-100027271822805/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} /> Facebook
    </a>*/}
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

export default Deltorocafe;
