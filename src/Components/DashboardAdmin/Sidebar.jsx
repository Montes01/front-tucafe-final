// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/gestion">gestion de usuarios</Link></li>
        
        {/* Agrega más enlaces según sea necesario */}
      </ul>
    </div>
  );
}

export default Sidebar;
