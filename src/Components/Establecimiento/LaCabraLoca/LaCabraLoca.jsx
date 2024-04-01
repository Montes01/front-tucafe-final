
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LaCabraLoca = () => {


    return (
        <div className="productos">
          <div className='imgcafes'>
          <ul>
                <li><img src='https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/LaCabraLoca/bscghdfttcowrsce7acx' alt="" /></li> 
                <li><img src='https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/LaCabraLoca/pgws3sofejuutbprndt6' alt="" /></li>
                <li><img src='https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/LaCabraLoca/schhvycmj78fqwgtnmb2' alt="" /></li>
                <li><img src='https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/LaCabraLoca/besbzor2wwi09gwgy2jh' alt="" /></li>
            </ul>     
          </div>

            {/* Resto de tu componente */}
            <div className="producto-nego">
                <div className="banner">
                    <h1>La Cabra Loca </h1>
                </div>
                <h3>El mejor café de Centroamérica para cada corazón de la región.</h3>
                <div className='horario'>
                <h4> 
                     <a href="https://web.facebook.com/cafelacabraloca/menu/?id=100063774304118&sk=menu">Menú</a>
                    <br />Horario
                </h4>


                    <p>
                        lunes 12:00pm-08:00pm<br />
                        martes 12:00pm-08:00pm<br />
                        miércoles 12:00pm-08:00pm<br />
                        jueves 12:00pm-08:00pm<br />
                        viernes 12:00pm-08:00pm <br />
                        sábado 12:00pm-08:00pm <br />
                        domingo <b>Cerrado</b> <br />
                    </p>
                </div>
                <div className="redes">
                    <h5>Redes sociales</h5>
                    <p>
                        <a href="https://web.facebook.com/lacabraloca.cafe/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} /> Facebook
                        </a>
                        <a href="https://www.instagram.com/lacabraloca.cafe?fbclid=IwAR0AbgPzzO_9gfAL3jJFQL-gklRAc3yP2dbYKNTSRHVEvL9ChXSwKCXZWnk" target="_blank" rel="noopener noreferrer">
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

export default LaCabraLoca;
