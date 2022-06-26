import React from "react";
import "../Registrar/Registrar.css";
import CabecalhoRegistrar from "./CabecalhoRegistrar";

function RegistrarPT2 (){

    return(
        <>
            < CabecalhoRegistrar />
            <div id="corpo">
                <div id="titulo">
                    <h1>Registrar</h1>
                </div>
                <div id="questionario">
                    <input type="text" placeholder="CPF..." />
                    <input type="text" placeholder="data de nascimento" />
                    <input type="text" placeholder="Endereço" />
                    <input type="text" placeholder="Telefone" />
                    <input type="text" placeholder="Confirmar telefone" />
                    </div>
                <div className="navegação">
                    <button className="botao-voltar" onClick={ (e) => (window.location.href= "/registrar")} >Voltar</button>
                    <p className="pg1-1">1</p>
                    <p className="pg2-2">2</p>
                    <p className="pg3-3">3</p>
                    <button className="botao-prosseguir" onClick={ (e) => (window.location.href= "/registrar-pt3")}>Continuar</button>
                </div>
            </div>
        </>
    );
}

export default RegistrarPT2;