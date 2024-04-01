

const PerfilNegocio = () => {
  // Simulación de datos del perfil del negocio
  const perfilNegocio = {
    nombre: 'Mi Negocio',
    direccion: 'Calle Principal #123',
    ciudad: 'Ciudad',
    pais: 'País',
    email: 'correo@negocio.com',
    telefono: '+1234567890',
    // Agregar más información del perfil del negocio según sea necesario
  };

  return (
    <div className="perfil-negocio">
      <h2>Perfil de Negocio</h2>
      <div className="perfil-negocio-datos">
        <p>Nombre: {perfilNegocio.nombre}</p>
        <p>Dirección: {perfilNegocio.direccion}</p>
        <p>Ciudad: {perfilNegocio.ciudad}</p>
        <p>País: {perfilNegocio.pais}</p>
        <p>Email: {perfilNegocio.email}</p>
        <p>Teléfono: {perfilNegocio.telefono}</p>
        {/* Agregar más información del perfil del negocio aquí */}
      </div>
    </div>
  );
};

export default PerfilNegocio;
