import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import Swal from 'sweetalert2';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    registered: false
  });

  useEffect(() => {
    if (formData.registered) {
      setTimeout(() => {
        window.location.href = '/login';
      }, 2000); // Redirigir después de 2 segundos
    }
  }, [formData.registered]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, name, password } = formData;
    try {
      const response = await fetch('http://localhost:8080/tuCafe/v1/client/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (response.ok) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "¡Registro exitoso! Redirigiendo al inicio de sesión.",
          showConfirmButton: false,
          timer: 2000,
        });
        setFormData({ ...formData, registered: true });
      } else {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error('Error al conectar con el backend', error);
      Swal.fire({
        icon: "error",
        title: "Error al registrar.",
        text: "Por favor, inténtalo de nuevo.",
      });
    }
  };


  return (
    <div className="book1">
      <h2 className="heading">Registrar Usuario</h2>
      <form className='formL reserva-f' onSubmit={handleSubmit}>
        <label htmlFor="signupUsername" className="boxUS">
          Usuario:
          <input
            type="text"
            id="signupUsername"
            name="name"
            value={formData.username}
            onChange={handleChange}
            className="box1"
          />
        </label>

        <label htmlFor="signupEmail" className="boxUS">
          Correo electrónico:
          <input
            type="email"
            id="signupEmail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="box1"
          />
        </label>

        <label htmlFor="signupPassword" className="boxUS">
          Contraseña:
          <input
            type="password"
            id="signupPassword"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="box1"
          />
        </label>

        <button type="submit" className="btn">
          Registrar
        </button>
      </form>
      <div className='registro'>
        ¿Ya tienes una cuenta?{' '}
        <Link to="/login" className="link">
          Iniciar sesión
        </Link>
        <br />
        ¿Quieres registrar tu establecimiento?{' '}
        <Link to="/SignUpBusiness" className="link">
          Registrate aqui!
        </Link>
      </div>

    </div>
  );
};

export default SignUp;
