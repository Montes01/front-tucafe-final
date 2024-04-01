
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram , faWhatsapp} from '@fortawesome/free-brands-svg-icons';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CafeSorrento = () => {


    return (
        <div className="productos">
          <div className='imgcafes'>
          <ul>
                <li><img src='https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/wsftlfebd8kdclx6wsf4' alt="" /></li> 
                <li><img src='https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/Caf%C3%A9%20Sorrento/cyzbpz5vxvuqzc6rialj' alt="" /></li>
                <li><img src='https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/Caf%C3%A9%20Sorrento/k1ly4sy5ia4rcmssiitm' alt="" /></li>
                <li><img src='https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/Caf%C3%A9%20Sorrento/xgu1pmrzbxfzksqgpt5a' alt="" /></li>
            </ul>     
          </div>

            {/* Resto de tu componente */}
            <div className="producto-nego">
                <div className="banner">
                    <h1>Café Sorrento </h1>
                </div>
                <h3>El cold brew es la extracción del café en frío🧊 , un proceso que tarda de 12 a 24 horas ⏰ , una preparación ligera y refrescante en donde se conservan todos los nutrientes del café. 💚☕️ ¡Te esperamos!</h3>
                <div className='horario'>
                <h4> 
                     <a href="https://drive.google.com/file/d/1mY7eMbqOvatdJ5bz5hts2fdKlbWbt1rR/view?usp=sharing">Menú</a>
                    <br />Horario
                </h4>


                    <p>
                        lunes 08:00am-10:30pm<br />
                        martes 08:00am-10:30pm<br />
                        miércoles 08:00am-10:30pm<br />
                        jueves 08:00am-10:30pm<br />
                        viernes 08:00am-11:30pm <br />
                        sábado 08:00am-11:30pm <br />
                        domingo 08:00am-10:30pm <br />
                    </p>
                </div>
                <div className="redes">
                    <h5>Redes sociales</h5>
                    <p>
                        <a href="https://web.facebook.com/cafesorrentoarmenia" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} /> Facebook
                        </a>
                        <a href="https://www.instagram.com/cafesorrento/?hl=es-la" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} /> Instagram
                        </a>
                        <a href="https://api.whatsapp.com/message/INDUE3WM65WMG1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CafeSorrento;
