

const ResumenActividad = () => {
  // Simulación de datos de actividad reciente
  const actividadReciente = [
    { tipo: 'Reserva',   descripcion: 'Nueva reserva para el sábado', fecha: '2024-03-05' },
    { tipo: 'Comentario', descripcion: 'Nuevo comentario en la página de Facebook', fecha: '2024-03-04' },
    // Agregar más datos de actividad reciente según sea necesario
  ];

  return (
    <div className="resumen-actividad">
      <h2>Actividad Reciente</h2>
      <ul>
        {actividadReciente.map((actividad, index) => (
          <li key={index}>
            <br />
            <strong>{actividad.tipo}:</strong> {actividad.descripcion} - {actividad.fecha}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResumenActividad;
