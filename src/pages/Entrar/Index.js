import React from "react";
import "../Entrar/components/Entrar.css";
import { Button } from "@mui/material";
import Cabecalho from "./components/Cabecalho";

function Index() {
    return (
        <>
            <Cabecalho />
            <div id="inicio-corpo">
                <div id="inicio">
                    <h1>Sua Leitura Diária.</h1>
                </div>
                <div id="btn-entrar">
                    <Button variant="contained"  onClick={() => {window.location.href = "/login";}}>Entrar</Button>
                </div>
                <div id="btn-cadastrar" >
                    <Button variant="contained" onClick={() => {window.location.href="/registrar" }}>Ainda não tem conta?</Button>
                </div>
            </div>
        </>
    );
}

export default Index;