import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMugHot, faSearch } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { logout } from '../../store/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
export const LoggedHeader = () => {
    const [showLogoutPopup, setShowLogoutPopup] = useState(false);
    const dispatcher = useDispatch()
    const user = useSelector(state => { console.log(state); return state.user?.user })
    const handleLogout = () => {
        localStorage.clear();
        dispatcher(logout())
        setShowLogoutPopup(false);
        window.location.href = "/";
    };

    const handleClick = () => {
        const $bar = document.querySelector(".navbar")
        $bar.classList.toggle("open")
        $bar.classList.toggle("closed", $bar.classList.contains("open"))
    }
    const inputRef = useRef(null);
    const [cafes, setCafes] = useState([]);
    const [filteredCoffes, setFilteredCoffes] = useState([]);
    const [popoverVisible, setPopoverVisible] = useState(true); // Estado para controlar la visibilidad del popover
  
  useEffect(() => {
    const fetchCafes = async () => {
      try {
        const response = await fetch('http://localhost:8080/tuCafe/v1/client/listBusiness');
        if (!response.ok) {
          throw new Error('Hubo un error al obtener los datos de los cafés.');
        }
        const data = await response.json();
        setCafes(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchCafes();
  }, []);

  const handleSearch = () => {
    setPopoverVisible(true); 
    const input = inputRef?.current?.value;
    const filtered = cafes.filter(el => el.name.includes(input));
    setFilteredCoffes(filtered);
  };
    return (
        <>
            {showLogoutPopup && (
                <div className="logout-popup">
                    <p>¿Estás seguro de que deseas cerrar sesión?</p>
                    <button className='btn' onClick={handleLogout}>Sí, cerrar sesión</button>
                    <button className='btn' onClick={() => setShowLogoutPopup(false)}>Cancelar</button>
                </div>
            )}

            <header className="header">
                <div>
                    <button onClick={handleClick} id="menu-btn">
                        <FontAwesomeIcon icon={faBars} />
                    </button>

                    <a href="#" className="logo">
                        <FontAwesomeIcon icon={faMugHot} /> TuCafé
                    </a>
                </div>
                <nav className="navbar">
                    <NavLink to="/">Inicio</NavLink>
                    <NavLink to="/lugares">Lugares</NavLink>
                    <NavLink to="/acerca">Nosotros</NavLink>
                    <NavLink to="/opiniones">Reseñas</NavLink>
                    <NavLink to="/reserva">Reservas</NavLink>
                </nav>

                <div className="search-bar">
                    <input ref={inputRef} type="text" id="search-input" placeholder="Buscar Lugar..." />
                    <button id="search-btn">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>

                {popoverVisible && (
        <div className="popover">
          {filteredCoffes.map(function (el) {
            return (
              <div key={el.id} className="search-result">
                <NavLink onClick={() => setPopoverVisible(false)} to={`/business/${el.id_business}`}>{el.name}</NavLink>
              </div>
            )
          })}
        </div>
      )}

                {/* Botones de registro y salida */}
                <li>
                    <NavLink to={user?.rol === "establecimiento" ? "/perfilbusiness" : "/PerfilUsuario"} className="btn-header">Perfil</NavLink>

                    <button className="btn-header" onClick={() => setShowLogoutPopup(true)}>Salir</button>

                </li>


            </header>
        </>

    )


}