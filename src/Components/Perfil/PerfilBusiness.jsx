import { useState, useEffect } from "react";
import Dashboard from "../Dashboard/Dashboard";
import { store } from "../../store/store";
import { useSelector } from "react-redux";

const PerfilBusiness = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
    address: '',
    city: '',
    country: '',
    image: null,
    currentPassword: '',
    newPassword: '',
    repeatPassword: '',
    activeTab: 'general',
  });

  const [actualName, setActualName] = useState("");

  store.subscribe(() => {
    const state = store.getState()
    console.log(state.user)
    setActualName(state.user.nombre)
  })
  useEffect(() => {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setFormData({
        ...formData,
        name: userData.name,
        email: userData.email,
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({
          ...formData,
          image: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = ` http://localhost:8080/tuCafe/v1/business/1`;
    let name = formData.name
    let phone = formData.phone
    let city = formData.city
    let country = formData.country
    let photo = formData.image;
    const newData = {
      name,
      phone,
      city,
      country,
      photo
    };

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify(newData),
      });

      console.log({ response, newData })

      if (response.ok)
        alert('Cambios guardados correctamente');
      else
        throw new Error('Error al guardar los cambios');

    } catch (error) {
      console.error(error);
      alert('Fallo al guardar los cambios, intente más tarde');
    }
  }
  const handleChangePassword = () => {
    console.log("Cambiando contraseña...");
  };

  return (
    <section className="todo-perfil">
      <h1 className="heading-perfil">Mi perfil de negocio</h1>

      <div className="profile-container">
        <div>
          <nav className="nav-perfil">
            <ul className="nav-perfil">
              <li className={formData.activeTab === 'general' ? 'active' : ''} onClick={() => setFormData({ ...formData, activeTab: 'general' })}>General</li>
              <li className={formData.activeTab === 'password' ? 'active' : ''} onClick={() => setFormData({ ...formData, activeTab: 'password' })}>Cambiar Contraseña</li>
              <li className={formData.activeTab === 'dashboard' ? 'active' : ''} onClick={() => setFormData({ ...formData, activeTab: 'dashboard' })}>Dashboard</li>
            </ul>
          </nav>
        </div>
        {formData.activeTab === 'general' && (
          <div className="profile-section">
            <h3>General</h3>
            <h4>foto de establecimiento</h4>
            {formData.image && (
              <div className="image-container">
                <img src={formData.image} alt="Profile" className="profile-image" />
              </div>
            )}
            <div className="file-upload">
              <input type="file" onChange={handleImageUpload} />
              <button onClick={handleImageUpload} className="btn-perfil">Subir</button>
            </div>

            <div className="form-group">
              <label>Nombre del negocio:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                defaultValue={actualName}
              />
            </div>
            <div className="form-group">
              <label>Correo:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Teléfono:</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Descripción:</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Dirección:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Ciudad:</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>País:</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <button className="btn-perfil" onClick={handleSubmit}>Guardar Cambios</button>
          </div>
        )}
        {formData.activeTab === 'password' && (
          <div className="profile-section">
            <h3>Cambiar Contraseña</h3>
            <div className="form-group">
              <label>Contraseña Actual:</label>
              <input
                type="password"
                value={formData.currentPassword}
                onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Nueva Contraseña:</label>
              <input
                type="password"
                value={formData.newPassword}
                onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Repetir Contraseña:</label>
              <input
                type="password"
                value={formData.repeatPassword}
                onChange={(e) => setFormData({ ...formData, repeatPassword: e.target.value })}
                className="form-control"
              />
            </div>
            <div className="btn-userperfil">
              <button onClick={handleChangePassword} className="btn-perfil">Cambiar Contraseña</button>
              <button className="btn-perfil">Guardar Cambios</button>
            </div>
          </div>
        )}
        {formData.activeTab === 'dashboard' && (
          <div className="profile-section">
            <h3>Informacion</h3>
            {/* Contenido del dashboard */}
            <Dashboard />
          </div>
        )}
      </div>
    </section>
  );
};

export default PerfilBusiness;
