import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';
import './Perfil.css';
import { store } from "../../store/store";
import axios from 'axios'; // Importa Axios para hacer peticiones HTTP
import Swal from 'sweetalert2';

// Configuración de Firebase (reemplaza con tu propia configuración)
const firebaseConfig = {
  apiKey: "AIzaSyD0LDsbfRfhgbWYx0JfVEkUz6Z9A6DlEro",
  authDomain: "gestor-de-imagen.firebaseapp.com",
  projectId: "gestor-de-imagen",
  storageBucket: "gestor-de-imagen.appspot.com",
  messagingSenderId: "1078515517223",
  appId: "1:1078515517223:web:240f48c9f7414cee7ecb02"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const PerfilUsuario = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [activeTab, setActiveTab] = useState('general');
  const [actualName, setActualName] = useState("");
  const [actualEmail, setActualEmail] = useState("");
  const [actualTelefono, setActualTelefono] = useState("");
  const [actualCiudad, setActualCiudad] = useState("");
  const [actualPais, setActualPais] = useState("");
  const [file, setFile] = useState(null); // Estado para el archivo seleccionado
  const [image, setImage] = useState(null); // Estado para la URL de la imagen

  useEffect(() => {
    setActualEmail(store.getState().user?.email);
    setActualName(store.getState().user?.nombre);
    setActualTelefono(store.getState().user?.telefono);
    setActualCiudad(store.getState().user?.ciudad);
    setActualPais(store.getState().user?.pais);

    // Recuperar la URL de la imagen desde localStorage al cargar el componente
    const storedImage = localStorage.getItem('profileImage');
    if (storedImage) {
      setImage(storedImage);
    }
  }, []);

  useEffect(() => {
    // Recuperar la URL de descarga de la imagen desde Firebase Storage si existe
    const getImageUrl = async () => {
      if (file) {
        try {
          const uniqueFileName = uuidv4(); // Genera un nombre de archivo único
          const storageRef = ref(storage, uniqueFileName);
          await uploadBytes(storageRef, file);
          const url = await getDownloadURL(storageRef);
          setImage(url); // Actualiza el estado de la imagen con la URL de descarga
          localStorage.setItem('profileImage', url); // Guarda la URL en localStorage
          console.log("Imagen subida:", url);
          // Muestra una notificación de éxito
          Swal.fire({
            icon: 'success',
            title: 'Imagen subida correctamente',
            showConfirmButton: false,
            timer: 1500
          });
        } catch (error) {
          console.error("Error al subir la imagen:", error);
          alert('Fallo al subir la imagen, intente más tarde');
        }
      }
    };

    getImageUrl();
  }, [file]); // Ejecutar el efecto cada vez que cambie el archivo seleccionado

  const handleChangePassword = () => {
    // Lógica para cambiar la contraseña
    console.log("Cambiando contraseña...");
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Actualiza la imagen con la URL del archivo local
      setFile(file); // Actualiza el estado del archivo seleccionado
    }
  };

  const handleGeneralSubmit = async (e) => {
    e.preventDefault();
    console.log("Guardando cambios generales...");
    try {
      const newData = {
        nombre: actualName,
        email: actualEmail,
        telefono: actualTelefono,
        ciudad: actualCiudad,
        pais: actualPais
      };
      
      // Enviar los cambios al servidor y actualizar la base de datos MySQL
      await axios.post('http://tu-servidor.com/actualizar-perfil', newData);

      alert('Cambios guardados correctamente');
    } catch (error) {
      console.error(error);
      alert('Fallo al guardar los cambios, intente más tarde');
    }
  };

  return (
    <section className="todo-perfil">
      <h1 className="heading-perfil">Mi perfil</h1>

      <div className="profile-container">
        <div>

          <nav className="nav-perfil">
            <ul className="nav-perfil">
              <li className={activeTab === 'general' ? 'active' : ''} onClick={() => setActiveTab('general')}>General</li>
              <li className={activeTab === 'password' ? 'active' : ''} onClick={() => setActiveTab('password')}>Cambiar Contraseña</li>
            </ul>
          </nav>
        </div>
        {activeTab === 'general' && (
          <div className="profile-section">
            <h3>General</h3>
            {image && (
              <div className="image-container">
                <img src={image} alt="Profile" className="profile-image" />
              </div>
            )}
            <div className="file-upload">
              <form onSubmit={handleGeneralSubmit}>
                <input type="file" onChange={handleImageUpload} />
                <button type="submit" className="btn-perfil">Subir</button>
              </form>
            </div>

            <form onSubmit={handleGeneralSubmit}>
              <div className="form-group">
                <label>Nombre:</label>
                <input defaultValue={actualName} 
                type="text" 
                className="form-control" />
              </div>
              <div className="form-group">
                <label>Telefono:</label>
                <input defaultValue={actualTelefono} type="text" className="form-control" onChange={(e) => setActualTelefono(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Correo:</label>
                <input defaultValue={actualEmail} type="email" className="form-control" />
              </div>
              <div className="form-group">
                <label>Ciudad:</label>
                <input defaultValue={actualCiudad} type="text" className="form-control" onChange={(e) => setActualCiudad(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Pais:</label>
                <input defaultValue={actualPais} type="text" className="form-control" onChange={(e) => setActualPais(e.target.value)} />
              </div>
              <button type="submit" className="btn-perfil">Guardar Cambios</button>
            </form>

          </div>
        )}
        {activeTab === 'password' && (
          <div className="profile-section">
            <h3>Cambiar Contraseña</h3>
            <div className="form-group">
              <label>Contraseña Actual:</label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Nueva Contraseña:</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Repetir Contraseña:</label>
              <input
                type="password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="btn-userperfil">
              <button onClick={handleChangePassword} className="btn-perfil">Cambiar Contraseña</button>
              <button onClick={handleGeneralSubmit} className="btn-perfil">Guardar Cambios</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PerfilUsuario;
