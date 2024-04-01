
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram , faWhatsapp} from '@fortawesome/free-brands-svg-icons';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AzaharCoffee = () => {


    return (
        <div className="productos">
          <div className='imgcafes'>
            <ul>
                <li><img src='https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/azaharcoffee/pgfuvatouz8gt6ryatcr' alt="" /></li> 
                <li><img src='https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/azaharcoffee/xcw2yq4uo5zxb7lj1qlq' alt="" /></li>
                <li><img src='https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/azaharcoffee/knioelpd6pevwse0am5n' alt="" /></li>
                <li><img src='https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/azaharcoffee/iwtcwnmbktrsbwqd4gsn' alt="" /></li>
            </ul>     
          </div>

            {/* Resto de tu componente */}
            <div className="producto-nego">
                <div className="banner">
                    <h1>Azahar Coffee Shop</h1>
                </div>
                <h3>¡Descubre la magia de esta tercera edición de Resplandor Lunar!🌙✨ <br />
                Esta nueva versión llega con un café muy jugoso, agradable en boca, con buen peso táctil y mucha recordación. Es además muy versátil, y en preparación va muy bien en todos los métodos. Muy recomendado en AeroPress y espresso ☕️ ¡Todo un imperdible de temporada! ✨🌙</h3>
                <div className='horario'>
                <h4> 
                     <a href="https://azaharcoffee.com/wp-content/uploads/2020/12/Menu_Azahar_AXM_Digital.pdf">Menú</a>
                    <br />Horario
                </h4>


                    <p>
                        lunes 07:00am-08:00pm<br />
                        martes 07:00am-08:00pm<br />
                        miércoles 07:00am-08:00pm<br />
                        jueves 07:00am-08:00pm<br />
                        viernes 07:00am-08:00pm <br />
                        sábado 07:00am-08:00pm <br />
                        domingo 07:00am-08:00pm <br />
                    </p>
                </div>
                <div className="redes">
                    <h5>Redes sociales</h5>
                    <p>
                        <a href="https://www.facebook.com/azaharcoffee" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} /> Facebook
                        </a>
                        <a href="https://www.instagram.com/azaharcoffee/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} /> Instagram
                        </a>
                        <a href="https://api.whatsapp.com/send/?phone=573177205538&text=%C2%A1Hola%21+Quiero+hacer+un+pedido+%EF%BF%BD+&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AzaharCoffee;
