import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMugHot, faSearch } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import "./header.css"

function Header() {
  const location = useLocation();

  const inputRef = useRef(null);
  const [cafes, setCafes] = useState([]);
  const [filteredCoffes, setFilteredCoffes] = useState([]);
  const [popoverVisible, setPopoverVisible] = useState(true); // Estado para controlar la visibilidad del popover

  function handleClick() {
    const $bar = document.querySelector(".navbar");
    $bar.classList.toggle("open");
    $bar.classList.toggle("closed", $bar.classList.contains("open"));
  }

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
    <header className="header">
      <div>
        <button onClick={handleClick} id="menu-btn">
          <FontAwesomeIcon icon={faBars} />
        </button>

        <a href="/" className="logo">
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

      {location.pathname !== '/signup' && location.pathname !== '/SignUpBusiness' && location.pathname !== '/login' && location.pathname !== '/loginBusiness' && location.pathname !== '/loginAdmin' && (
        <div className="search-bar">
          <input ref={inputRef} type="text" id="search-input" placeholder="Buscar Lugar..." />
          <button id="search-btn" onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      )}

      {/* Ventana emergente (popover) */}
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

      <li className='bnt-header-container'>
        <NavLink to="/login" className="btn-header">
          Acceder
        </NavLink>
        <NavLink to="/signup" className="btn-header">
          Registrar
        </NavLink>
      </li>
    </header>
  );
}

export default Header;
