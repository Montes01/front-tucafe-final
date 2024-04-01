import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const BusinessLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    registered: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    try {
      const response = await fetch('http://localhost:8080/tuCafe/v1/business/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "¡Inicio de sesión exitoso!",
          showConfirmButton: false,
          timer: 3000
        });
        setFormData({ ...formData, registered: true });
        const token = await response.json()
        localStorage.setItem("token", token.token);
        window.location.href = "/perfilbusiness"
      } else {
        Swal.fire({
          icon: "error",
          title: "Inicio de sesión fallido.",
          text: "Verifica tus credenciales."
        });
      }
    } catch (error) {
      console.error('Error al conectar con el backend', error);
      Swal.fire({
        icon: "error",
        title: "Error al conectar con el backend"
      });
    }
  };

  return (
    <div className="book1">
      <h2 className="heading">Iniciar Sesión Establecimiento</h2>
      <form className='formL reserva-f' onSubmit={handleSubmit}>
        <label htmlFor="businessLoginEmail" className="boxUS">
          Correo Electrónico:
          <input
            type="text"
            id="businessLoginEmail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="box1"
          />
        </label>

        <label htmlFor="businessLoginPassword" className="boxUS">
          Contraseña:
          <input
            type="password"
            id="businessLoginPassword"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="box1"
          />
        </label>

        <button type="submit" className="btn">
          Iniciar Sesión
        </button>
      </form>
      <div className='registro'>
        ¿No tienes una cuenta?{' '}
        <Link to="/SignUpBusiness">
          <u><b>Regístrate aquí como Establecimiento!</b></u>
        </Link>
      </div>
    </div>
  );
};

export default BusinessLogin;
