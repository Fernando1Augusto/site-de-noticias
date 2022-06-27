import React from "react";
import "./recupera.css";
import Cabecalho from "../../Login/Components/CabecalhoLogin";

function Recupera() {
    const alerta = () => {
        alert("Email enviado com sucesso!\nPor favor verifique sua caixa de entrada.");
    }

    return (
        <div>
            <Cabecalho />
            <div className="corpo">
                <h1>Recuperação de senha</h1>
                <form className="texto">
                    <label>Email</label>
                    <input type="email" name="email" />
                    <button type="submit" onClick={alerta}>Enviar</button>
                </form>
                <button className="botao" onClick={(e) => {window.location.href="/login"}}>Voltar</button>
            </div>
        </div>

    );
}

export default Recupera;