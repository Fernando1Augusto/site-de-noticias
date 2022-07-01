import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../../pages/Entrar/Index";
import Login from "../../pages/Login/Login";
import React from "react";
import Registrar from "../../pages/Registrar/Registrar";
import RegistrarPT2 from "../../pages/Registrar/RegistrarPT2";
import RegistrarPT3 from "../../pages/Registrar/RegistrarPT3";
import Recupera from "../../pages/Entrar/recupera/Recupera";
import HomePage from "../../pages/homePage/homePage";
import User from "../../pages/User/user";

function RoutesApp () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/entrar" element={<Index/>} />
                <Route path="/" element={<Index/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/registrar" element={<Registrar/>} />
                <Route path="/registrar-pt2" element={<RegistrarPT2/>} />
                <Route path="/registrar-pt3" element={<RegistrarPT3/>} />
                <Route path="/recupera" element={<Recupera/>} />
                <Route path="/home" element={<HomePage/>} />
                <Route path="/user" element={<User />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;