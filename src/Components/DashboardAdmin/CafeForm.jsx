import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const categories = ['cafe', 'Restaurante', 'Mirador', 'Bar', 'Pastelería', 'Heladería', 'Otros'];

function CafeForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    address: '',
    city: '',
    email: '',
    password: '',
    image: '',
    phone: '',
    category: '', // Nuevo campo para almacenar la categoría seleccionada
    registered: false
  });

  useEffect(() => {
    if (formData.registered) {
      setTimeout(() => {
        // Redirigir después de 2 segundos
        window.location.href = '/dashboardadmin';
      }, 2000);
    }
  }, [formData.registered]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, description, address, city, email, password, image, phone, category } = formData;
    try {
      const response = await fetch('http://localhost:8080/tuCafe/v1/business/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          description,
          address,
          city,
          email,
          password,
          image,
          phone,
          category
        }),
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: '¡Registro de Café exitoso! Redirigiendo al dashboard.',
          showConfirmButton: false,
          timer: 2000
        });
        setFormData({ ...formData, registered: true });
      } else {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error('Error al conectar con el backend', error);
      Swal.fire({
        icon: 'error',
        title: 'Error al registrar el Café.',
        text: 'Por favor, inténtalo de nuevo.'
      });
    }
  };

  return (
    <div >
      <h2 className="heading">Registrar Nuevo Establecimiento</h2>
      <form className='formL reserva-f' onSubmit={handleSubmit}>
        <label htmlFor="businessName" className="boxUS">
          Nombre del Establecimiento:
          <input
            type="text"
            id="businessName"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="box1"
          />
        </label>

        <label htmlFor="businessDescription" className="boxUS">
          Descripción:
          <textarea
            id="businessDescription"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="box1"
          ></textarea>
        </label>

        <label htmlFor="businessAddress" className="boxUS">
          Dirección:
          <input
            type="text"
            id="businessAddress"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="box1"
          />
        </label>

        <label htmlFor="businessCity" className="boxUS">
          Ciudad:
          <input
            type="text"
            id="businessCity"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="box1"
          />
        </label>

        <label htmlFor="businessEmail" className="boxUS">
          Correo electrónico:
          <input
            type="email"
            id="businessEmail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="box1"
          />
        </label>

        <label htmlFor="businessPassword" className="boxUS">
          Contraseña:
          <input
            type="password"
            id="businessPassword"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="box1"
          />
        </label>

        <label htmlFor="businessImage" className="boxUS">
          URL de la Imagen:
          <input
            type="text"
            id="businessImage"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="box1"
          />
        </label>

        <label htmlFor="businessPhone" className="boxUS">
          Teléfono:
          <input
            type="text"
            id="businessPhone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="box1"
          />
        </label>

        <label htmlFor="signupCategoria" className="boxUS">
          Categoría:
          <select
            id="signupCategoria"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="box1"
          >
            <option value="">Selecciona una categoría</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </label>

        <button type="submit" className="btn">
          Registrar Establecimiento
        </button>
      </form>
    </div>
  );
};

export default CafeForm;
