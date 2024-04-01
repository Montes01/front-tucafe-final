import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
function Book() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    date: '',
    description: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/tuCafe/v1//listBusiness')
      .then(response => response.json())
      .then(data => setBusinesses(data))
      .catch(error => console.error('Error al obtener la lista de negocios:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validar los campos antes de enviar la solicitud
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch('http://localhost:8080/tuCafe/v1/reservation/creation_reservation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
  
        if (response.ok) {
          console.log('Datos enviados con éxito');
          Swal.fire({
            icon: "success",
            title: "¡Reserva exitosa!",
            showConfirmButton: false,
            timer: 2000
          });
        } else {
          console.error('Error al enviar datos');
          Swal.fire({
            icon: "error",
            title: "Reserva invalida",
            text: "Por favor ingresa de nuevo los datos"
          });
        }
      } catch (error) {
        console.error('Error al enviar datos:', error);
      }
    } else {
      setFormErrors(errors);
    }
  };

  // Función para validar el formulario
  const validateForm = (data) => {
    let errors = {};
    if (!data.name.trim()) {
      errors.name = 'El ID del negocio es obligatorio';
    }
    if (!data.date.trim()) {
      errors.date = 'La fecha es obligatoria';
    } else if (!isValidDate(data.date)) {
      errors.date = 'La fecha no tiene un formato válido';
    }
    return errors;
  };

  // Función para validar el formato de la fecha
  const isValidDate = (dateString) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(dateString);
  };

  return (
    <section className="book" id="book">
      <h1 className="heading">Reserva</h1>
      <form onSubmit={handleSubmit} className='reserva-f'>
        <div className="search-bar1">
          {/* <input
              type="text"
              name="lugar"
              value={formData.lugar}
              onChange={handleChange}
              placeholder="Buscar Lugar..."
              className="box"
            /> */}
        </div>
        <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  className="box"
  placeholder="Escribe tu correo electronico"
/>

        <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  className="box"
  placeholder="Escribe el nombre del negocio"
/>

        {formErrors.name && <p className="error">{formErrors.name}</p>}

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Mensaje"
          className="box"
          cols="30"
          rows="10"
        ></textarea>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          placeholder="date"
          className="box"
        />
        {formErrors.date && <p className="error">{formErrors.date}</p>}
        <input type="submit" value="Enviar" className="btn" />
      </form>
    </section>
  );
}

export default Book;




// function Book() {
//   return (
//     <section className="book" id="book">
//       <h1 className="heading">Reserva <span>tu lugar Favorito</span></h1>
//       <form action="">
//         <div className="search-bar1">
//           <input type="text" id="search-input" placeholder="Buscar Lugar..." className="box" />
//         </div>
//         <input type="text" placeholder="Nombre" className="box" />
//         <input type="email" placeholder="Email" className="box" />
//         <input type="number" placeholder="Contacto" className="box" />
//         <textarea
//           name=""
//           placeholder="Mensaje"
//           className="box"
//           id=""
//           cols="30"
//           rows="10"
//         ></textarea>
//         <input type="submit" value="Enviar" className="btn" />
//       </form>
//     </section>
//   );
// }

// export default Book;
