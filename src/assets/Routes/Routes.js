import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../../pages/Entrar/Index";
import Login from "../../pages/Login/Login";
import React from "react";
import Registrar from "../../pages/Registrar/Registrar";

function RoutesApp () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/entrar" element={<Index/>} />
                <Route path="/" element={<Index/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/registrar" element={<Registrar/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;