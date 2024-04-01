// import {  NavLink } from 'react-router-dom';
// import { cafes } from "../Conts/Conts.js";


// function Cafes() {
//   return (
//     <section className="menu" id="menu">
//       <h1 className="heading">Lugares mas populares</h1>

//       <div className="box-container">
       
//       {
//         cafes.map((cafe,index) =>{
//           return(
            
//         <div className="box" key = {index}> 
          
//         <div className="content">
//           <h3>{cafe.titulo}</h3>
//           <br />
//           <div className="image-gallery">
//             <img src ={cafe.imagen} alt="" />
//           </div>
//           <p>{cafe.mensaje}</p>
//           <NavLink to={cafe.ruta} className="btn-link">
//         <button className="btn">Ver más</button>
//         </NavLink>
//         </div>
//         </div>
//           )
        
//       })
//     }    
//       </div>
//     </section>
//   );
// }


// export default Cafes;

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Cafes() {
  const [cafes, setCafes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/tuCafe/v1/business/getBusinessActive')
      .then(response => {
        if (!response.ok) {
          throw new Error('Hubo un error al obtener los datos de los cafés.');
        }
        return response.json();
      })
      .then(data => {
        setCafes(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <section className="menu" id="menu">
      <h1 className="heading">Lugares más populares</h1>
      <div className="box-container">
        {cafes.map((cafe, index) => (
          <div className="box" key={index}>
            <div className="content">
              <h3>{cafe.name}</h3>
              <div className="image-gallery">
                <img src={cafe.image} alt={cafe.name} />
              </div>
              <p>{cafe.description}</p>
              <NavLink to={cafe.email} className="btn-link">
                <button className="btn">Ver más</button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cafes;
