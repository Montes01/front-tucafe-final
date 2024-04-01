// CafeTable.js
// import React from 'react';
// import cafes from './data';

// function CafeTable() {
//   return (
//     <div className="cafe-table-container">
//       <h2 className="table-heading">Cafés</h2>
//       <div className="table-responsive">
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Nombre</th>
//               <th>Ubicación</th>
//               {/* Agrega más encabezados según sea necesario */}
//             </tr>
//           </thead>
//           <tbody>
//             {cafes.map(cafe => (
//               <tr key={cafe.id}>
//                 <td>{cafe.name}</td>
//                 <td>{cafe.location}</td>
//                 {/* Agrega más datos según sea necesario */}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default CafeTable;



// import{ useState } from 'react';

// function CafeTable({ cafes, onEditCafe, onDeleteCafe }) {
//   const [editingCafe, setEditingCafe] = useState(null);

//   const handleEditClick = (cafe) => {
//     setEditingCafe(cafe);
//   };

//   const handleSaveEdit = (editedCafe) => {
//     onEditCafe(editedCafe);
//     setEditingCafe(null);
//   };

//   const handleCancelEdit = () => {
//     setEditingCafe(null);
//   };

//   const renderTableCell = (cafe, field) => {
//     if (editingCafe?.id === cafe.id) {
//       return (
//         <input
//           type="text"
//           value={editingCafe[field]}
//           onChange={(e) => setEditingCafe({ ...editingCafe, [field]: e.target.value })}
//         />
//       );
//     }
//     return cafe[field];
//   };

//   return (
//     <div className="cafe-table-container">
//       <h2 className="table-heading">Lista de Cafés</h2>
//       <div className="table-responsive">
//         <table className="table">
//           <thead>
//             <tr className='table-cell'>
//               <th>Nombre</th>
//               <th>Ubicación</th>
//               <th>Descripción</th>
//               <th>Acciones</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cafes.map((cafe) => (
//               <tr key={cafe.id}>
//                 <td className="table-cell">{renderTableCell(cafe, 'name')}</td>
//                 <td className="table-cell">{renderTableCell(cafe, 'location')}</td>
//                 <td className="table-cell">{renderTableCell(cafe, 'description')}</td>
//                 <td>
//                   {editingCafe?.id === cafe.id ? (
//                     <>
//                       <button className="save-button" onClick={() => handleSaveEdit(editingCafe)}>Guardar</button>
//                       <button className="cancel-button" onClick={handleCancelEdit}>Cancelar</button>
//                     </>
//                   ) : (
//                     <>
//                       <button className="edit-button" onClick={() => handleEditClick(cafe)}>Editar</button>
//                       <button className="delete-button" onClick={() => onDeleteCafe(cafe.id)}>Eliminar</button>
//                     </>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default CafeTable;


function CafeTable({ cafes, onActivateCafe, onDeactivateCafe }) {
  return (
    <section className="menu" id="menu">
      <h1 className="heading-admin">Dashboard Admin</h1>
      <div className="box-container">
        {cafes.map(cafe => (
          <div className="box" key={cafe.id}>
            <div className="content">
              <h3>{cafe.name}</h3>
              <div className="image-gallery">
                <img src={cafe.image} alt={cafe.name} />
              </div>
              <p>{cafe.description}</p>
              <p>Ubicación: {cafe.address}</p>
              <p>Estado: {cafe.status ? 'Activo' : 'Inactivo'}</p>
              <div className="btn-group">
                {cafe.status ? (
                  <button className='btn-perfil' onClick={() => onDeactivateCafe(cafe.id_business)}>
                    Desactivar
                  </button>
                ) : (
                  <button className='btn-perfil' onClick={() =>{onActivateCafe(cafe.id_business)}}>
                    Activar
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CafeTable;

