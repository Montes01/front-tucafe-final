

const EstadisticasClave = () => {
  // Simulación de datos de estadísticas clave
  const estadisticas = {
    ingresosMensuales: 15000,
    clientesAtendidos: 200,
    productosVendidos: 500,
    // Agregar más estadísticas clave según sea necesario
  };

  return (
    <div className="estadisticas-clave">
      <h2>Estadísticas Clave</h2>
      <div>
        <p>Ingresos Mensuales: ${estadisticas.ingresosMensuales}</p>
        <p>Clientes Atendidos: {estadisticas.clientesAtendidos}</p>
        <p>Productos Vendidos: {estadisticas.productosVendidos}</p>
        {/* Agregar más estadísticas clave aquí */}
      </div>
    </div>
  );
};

export default EstadisticasClave;
