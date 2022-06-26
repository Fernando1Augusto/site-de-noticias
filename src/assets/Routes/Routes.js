import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../../pages/Entrar/Index";
import Login from "../../pages/Login/Login";
import React from "react";
import Registrar from "../../pages/Registrar/Registrar";
import RegistrarPT2 from "../../pages/Registrar/RegistrarPT2";
import RegistrarPT3 from "../../pages/Registrar/RegistrarPT3";

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
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;