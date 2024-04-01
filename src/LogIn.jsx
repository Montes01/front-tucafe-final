import  { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Swal from 'sweetalert2';

const Login = () => {
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
      const response = await fetch('http://localhost:8080/tuCafe/v1/client/login', {
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
        window.location.href = "/"
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
      <h2 className="heading">Iniciar Sesión Usuario</h2>
      <form className='formL reserva-f' onSubmit={handleSubmit}>
        <label htmlFor="loginEmail" className="boxUS">
          Correo Electrónico:
          <input
            type="text"
            id="loginEmail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="box1"
          />
        </label>

        <label htmlFor="loginPassword" className="boxUS">
          Contraseña:
          <input
            type="password"
            id="loginPassword"
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
        <Link to="/signup">
          <u><b>Regístrate aquí!</b></u>
        </Link>
      </div>
      <div className='registro'>
        ingresar como establecimiento{' '}
        <Link to="/loginBusiness">
          <u><b>aquí!</b></u>
        </Link>
      </div>
      <div className='registro'>
        {' '}
        <Link to="/loginAdmin">
          <u><b>Ingreso administrador</b></u>
        </Link>
      </div>
    </div>
  );
};

export default Login;
