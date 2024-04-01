import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
export const Establecimiento = () => {
    const { idBusiness } = useParams()
    const [business, setBusiness] = useState()
    const [loading, setIsLoading] = useState(true)

    useEffect(() => {
        const url = `http://localhost:8080/tuCafe/v1/business/${idBusiness}`
        async function getBusiness() {
            try {
                const response = await fetch(url)
                if (!response.ok) throw new Error("Hubo un error al obtener el establecimiento")
                const data = await response.json()
                setBusiness(data)
            } catch (err) {
                console.error(err)

            } finally {
                setIsLoading(false)
            }

        }
        getBusiness()

    }, [idBusiness])

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
                    <h1>{business?.name}</h1>
                </div>
                <h3>{business?.description}</h3>
                <div className='horario'>
                    <h4> Horarios <br />
                        <a href="https://gardencafeychocola.wixsite.com/menu/categorias">Menú</a>
                    </h4>


                    <p>
                        lunes <em>{business?.start_hour + " a " + business?.finish_hour}</em><br />
                        martes <em>{business?.start_hour + " a " + business?.finish_hour}</em><br />
                        miércoles <em>{business?.start_hour + " a " + business?.finish_hour}</em><br />
                        jueves <em>{business?.start_hour + " a " + business?.finish_hour}</em><br />
                        viernes <em>{business?.start_hour + " a " + business?.finish_hour} </em><br />
                        sábado <em>{business?.start_hour + " a " + business?.finish_hour} </em><br />
                        domingo <em>{business?.start_hour + " a " + business?.finish_hour} </em><br />
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

    )
}