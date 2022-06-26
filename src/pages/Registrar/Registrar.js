import React, {useEffect} from "react";
import "../Registrar/Registrar.css";
import CabecalhoRegistrar from "./CabecalhoRegistrar";
import { Link } from "react-router-dom";

function Registrar() {
    
    const voltar = () => {
        //voltar para pagina inicial
        window.history.back();
    }

    const proxima = () => {
       //ir para proxima pagina
       window.location.href = "/registrar-pt2";
    }

    return (
        <>
          < CabecalhoRegistrar />
            <div id="corpo">   
                <div id="titulo">
                    <h1>Registrar</h1>
                </div>
                <div id="questionario">
                    <input type="text" placeholder="Digite seu nome" />
                    <input type="text" placeholder="Digite seu E-mail" />
                    <input type="text" placeholder="Confirme seu E-mail" />
                    <input type="password" placeholder="Digite sua senha" />
                    <input type="password" placeholder="Confirme sua senha" />
                </div>
                <div className="navegação">
                    <button className="botao-voltar" onClick={voltar}>Voltar</button>
                    <p className="pg1">1</p>
                    <p className="pg2">2</p>
                    <p className="pg3">3</p>
                    <button className="botao-prosseguir" onClick={proxima} >Continuar</button>
                </div>
            </div>
        </>
    );
}

export default Registrar;