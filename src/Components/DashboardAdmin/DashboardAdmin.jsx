// // Dashboard.js
// import React from 'react';
// import Sidebar from './Sidebar';
// import Topbar from './Topbar';
// import CafeTable from './CafeTable';
// import "./styles.css"

// function DashboardAdmin() {
//   return (
//     <div className="book1">
//     <div className="dashboard">
//       <Sidebar />
//       <div id="content-wrapper" className="d-flex flex-column">
//         <div id="content">
//           <Topbar />
//           <div className="container-fluid">
//             <CafeTable />
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default DashboardAdmin;

//
// DashboardAdmin.js USANDO TABLAS

// import React, { useState } from 'react';
// import Sidebar from './Sidebar';
// import Topbar from './Topbar';
// import CafeTable from './CafeTable';
// import CafeForm from './CafeForm';
// import "./styles.css"

// function DashboardAdmin() {
//   const [cafes, setCafes] = useState([
//     { id: 1, name: "Garden Cafe y Chocolate", location: "centro de armenia", description:"test a"},
//     { id: 2, name: "Cafe 1760", location: "Calarca", description:"test b"},
//     { id: 3, name: "Cafe Sorrento", location: "Calarca", description:"test c" },
//     // Agrega más datos según sea necesario
//   ]);


//   const handleAddCafe = (newCafe) => {
//     setCafes([...cafes, { id: Date.now(), ...newCafe }]);
//   };

//   const handleEditCafe = (editedCafe) => {
//     const updatedCafes = cafes.map((cafe) =>
//       cafe.id === editedCafe.id ? { ...cafe, ...editedCafe } : cafe
//     );
//     setCafes(updatedCafes);
//   };

//   const handleDeleteCafe = (id) => {
//     const updatedCafes = cafes.filter((cafe) => cafe.id !== id);
//     setCafes(updatedCafes);
//   };

//   return (
//     <div className="book1">
//       <div className="dashboard">
//         {/* <Sidebar /> */}
//         <div id="content-wrapper" className="d-flex flex-column">
//           <div id="content">
//             {/* <Topbar /> */}
//             <div className="container-fluid">
//               <CafeForm onSubmit={handleAddCafe} />
//               <CafeTable
//                 cafes={cafes}
//                 onEditCafe={handleEditCafe}
//                 onDeleteCafe={handleDeleteCafe}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DashboardAdmin;

import React, { useState, useEffect } from 'react';
import CafeTable from './CafeTable';
import CafeForm from './CafeForm';

function DashboardAdmin() {
  const [cafes, setCafes] = useState([]);

  // Función para obtener la lista de cafés desde el backend
  const fetchCafes = async () => {
    try {
      const response = await fetch('http://localhost:8080/tuCafe/v1/client/listBusiness');
      if (!response.ok) {
        throw new Error('Hubo un error al obtener los datos de los cafés.');
      }
      const data = await response.json();
      setCafes(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Función para activar o desactivar un café por su ID
  const toggleCafeStatus = async (id, newStatus) => {
    try {
      const response = await fetch(`http://localhost:8080/tuCafe/v1/admin/changeStatus/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });
      console.log(response)
      if (!response.ok) {
        throw new Error('Hubo un error al cambiar el estado del café.');
      }
      // Actualizar la lista de cafés después de cambiar el estado
      fetchCafes();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Función para activar un café por su ID
  const activateCafe = async (id) => {
    console.log({ id })
    try {
      await toggleCafeStatus(id, true);
    } catch (error) {
      console.error('Error al activar el café:', error);
    }
  };

  // Función para desactivar un café por su ID
  const deactivateCafe = async (id) => {
    try {
      await toggleCafeStatus(id, false);
    } catch (error) {
      console.error('Error al desactivar el café:', error);
    }
  };

  // Cargar la lista de cafés cuando el componente se monta
  useEffect(() => {
    fetchCafes();
  }, []);

  return (
    <div className='book1'>
      <CafeTable cafes={cafes} onActivateCafe={activateCafe} onDeactivateCafe={deactivateCafe} />
      <CafeForm/>
    </div>
  );
}

export default DashboardAdmin;
