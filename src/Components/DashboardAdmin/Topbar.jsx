// Topbar.js
import React from 'react';

function Topbar() {
  const handleLogout = () => {
    // Aquí debes implementar la lógica para cerrar sesión
    // Por ejemplo, podrías limpiar el token de autenticación del usuario en el almacenamiento local o en una cookie
    // Luego, redirigir al usuario a la página de inicio de sesión o a la página principal de la aplicación
    // Aquí hay un ejemplo básico de cómo podrías hacerlo:
    localStorage.removeItem('token'); // Eliminar el token de autenticación almacenado
    window.location.href = '/login'; // Redirigir al usuario a la página de inicio de sesión
  };

  return (
    <div className="topbar">
      <div className="logout-button">
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    </div>
  );
}

export default Topbar;
