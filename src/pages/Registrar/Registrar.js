import React from "react";
import "../Registrar/Registrar.css";

function Registrar() {

    return (
        <>
            <div id="corpo">
                <div id="lado-esquedo-questionaio">
                    <input type="text" placeholder="Digite seu nome" />
                    <input type="password" placeholder="Digite seu E-mail" />
                    <input type="password" placeholder="Confirme seu E-mail" />
                    <input type="password" placeholder="Digite sua senha" />
                    <input type="password" placeholder="Confirme sua senha" />
                </div>
                <div id="lado-direito-questionaio">
                    <h1 id="fase1"> 1 </h1>
                    <h1 id="fase2"> 2 </h1>
                    <h1 id="fase3"> 3 </h1>
                </div>
            </div>
        </>
    );
}

export default Registrar;