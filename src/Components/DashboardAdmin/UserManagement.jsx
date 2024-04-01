// UserManagement.js (Componente para la gestión de usuarios)
import React, { useState, useEffect } from 'react';
import { getAllUsers, createUser, updateUser, deleteUser } from './api'; // Importa funciones para interactuar con el backend

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
  });

  useEffect(() => {
    // Cargar la lista de usuarios al cargar el componente
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const usersData = await getAllUsers();
    setUsers(usersData);
  };

  const handleCreateUser = async () => {
    await createUser(formData);
    fetchUsers(); // Recargar la lista de usuarios después de crear uno nuevo
  };

  const handleUpdateUser = async (userId) => {
    await updateUser(userId, formData);
    fetchUsers(); // Recargar la lista de usuarios después de actualizar uno existente
  };

  const handleDeleteUser = async (userId) => {
    await deleteUser(userId);
    fetchUsers(); // Recargar la lista de usuarios después de eliminar uno
  };

  return (
    <div>
      {/* Formulario para crear un nuevo usuario */}
      <form onSubmit={handleCreateUser}>
        {/* Campos de entrada para nombre, correo electrónico, rol, etc. */}
        <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <input type="text" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} />
        <button type="submit">Crear Usuario</button>
      </form>

      {/* Lista de usuarios */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {/* Mostrar información del usuario */}
            <span>{user.name}</span>
            <span>{user.email}</span>
            <span>{user.role}</span>
            {/* Botones para editar y eliminar usuarios */}
            <button onClick={() => handleUpdateUser(user.id)}>Editar</button>
            <button onClick={() => handleDeleteUser(user.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserManagement;
