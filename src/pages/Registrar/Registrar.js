import React, {useEffect} from "react";
import "../Registrar/Registrar.css";
import CabecalhoRegistrar from "./CabecalhoRegistrar";

function Registrar() {
    
    const voltar = () => {
        //voltar para pagina inicial
        window.history.back();
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
                    <input type="password" placeholder="Digite seu E-mail" />
                    <input type="password" placeholder="Confirme seu E-mail" />
                    <input type="password" placeholder="Digite sua senha" />
                    <input type="password" placeholder="Confirme sua senha" />
                </div>
                <div className="navegação">
                    <button className="botao-voltar" onClick={voltar}>Voltar</button>
                    <button className="botao-prosseguir">Continuar</button>
                </div>
            </div>
        </>
    );
}

export default Registrar;