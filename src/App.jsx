
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { Routes, Route } from "react-router-dom";


import Header from "./Components/Header/Header";

import AzaharCoffee from "./Components/Establecimiento/AzaharCoffee/AzaharCoffee";
import Cafe1760 from "./Components/Establecimiento/Cafe1760/Cafe1760";
import CafeSorrento from "./Components/Establecimiento/CafeSorrento/CafeSorrento"
import Deltorocafe from "./Components/Establecimiento/Deltorocafe/Deltorocafe"
import GardenCafe from "./Components/Establecimiento/GardenCafe/GardenCafe"
import LaCabraLoca from "./Components/Establecimiento/LaCabraLoca/LaCabraLoca"

import Footer from "./Components/Footer/Footer";
import Nosotros from "./Components/Nosotros/Nosotros";
import Cafes from "./Components/Cafes/Cafes";
import Opiniones from "./Components/Opiniones/Opiniones";
import Reserva from "./Components/Reserva/Reserva";
import Inicio from "./Components/Inicio/Inicio"
import Login from "./LogIn";
import SignUp from "./SingUp";
import Perfil from "./Components/Perfil/Perfil";
import SignUpBusiness from "./SignUpBusiness/SignUpBusiness";
import PerfilUsuario from "./Components/Perfil/PerfilUsuario";
import { store } from "./store/store";
import { useEffect, useState } from "react";
import { LoggedHeader } from "./Components/LoggedHeader/LoggedHeader";
import { useDispatch } from "react-redux";
import { login } from "./store/slices/userSlice";
import { jwtDecode } from 'jwt-decode';

import IframeComponent from "./Components/IframeComponent/IframeComponent";// este componente contiene el chatbot
import PerfilBusiness from "./Components/Perfil/PerfilBusiness";
import BusinessLogin from "./Components/Login/BusinessLogin";
import AdminLogin from "./Components/Login/AdminLogin";
import DashboardAdmin from "./Components/DashboardAdmin/DashboardAdmin";
import { Establecimiento } from "./Components/Establecimiento/Establecimiento";

library.add(faMugHot);


function App() {
  const dispatcher = useDispatch();
  const [isLogged, setIsLogged] = useState(false)
  store.subscribe(() => {
    const state = store.getState()
    console.log(state.user)
    setIsLogged(state.user)
  })

  useEffect(() => {
    const token = localStorage.getItem("token")
    console.log(token)
    if (token) {
      const claims = jwtDecode(token)
      console.log(claims)
      const user = {
        nombre: claims.nombre,
        email: claims.sub,
        rol: claims.role
      }
      dispatcher(login(user))
    }

  }, [])

  return (
    <>
      {isLogged ? <LoggedHeader /> : <Header />}
      <div>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/lugares" element={<Cafes />} />
          <Route path="/Acerca" element={<Nosotros />} />
          <Route path="/opiniones" element={<Opiniones />} />
          <Route path="/reserva" element={<Reserva />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cafes/AzaharCoffee" element={<AzaharCoffee />} />
          <Route path="/cafes/Cafe1760" element={<Cafe1760 />} />
          <Route path="/cafes/CafeSorrento" element={<CafeSorrento />} />
          <Route path="/cafes/Deltorocafe" element={<Deltorocafe />} />
          <Route path="/cafes/GardenCafe" element={<GardenCafe />} />
          <Route path="/cafes/LaCabraLoca" element={<LaCabraLoca />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/PerfilUsuario" element={<PerfilUsuario />} />
          <Route path="/SignUpBusiness" element={<SignUpBusiness />} />
          <Route path="/loginBusiness" element={<BusinessLogin />} />
          <Route path="/perfilbusiness" element={<PerfilBusiness />} />
          <Route path="/loginAdmin" element={<AdminLogin />} />
          <Route path="/dashboardadmin" element={<DashboardAdmin />} />
          <Route path="/Business/:idBusiness" element={<Establecimiento />} />




        </Routes>
        <IframeComponent />
        <Footer />
      </div>
    </>
  );
}

export default App;
