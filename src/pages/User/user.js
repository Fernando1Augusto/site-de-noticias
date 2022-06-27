import React from "react";
import "./user.css"
import user from "../../assets/images/user.png"
import sair from "../../assets/images/sair.png"
import Cabecalho from "../homePage/CabecalhoHome"

function User() {
    return (
        <div>
            <Cabecalho />
            <div className="container">
                <div className="user">
                    <div className="informacoes-pessoais">
                        <h1 id="user" >Administrador</h1>
                        <div className="informacoes-pessoais-titulo">
                            <h1>Informações Pessoais</h1>
                        </div>
                        <div className="informacoes-pessoais-conteudo">
                            <h2> Nome: Admin</h2>
                            <h2> Idade: xx</h2>
                            <h2> CPF: XXX.XXX.XXX-XX</h2>
                        </div>
                        <div className="informacoes-pessoais-titulo">
                            <h1>Informações de Contato</h1>
                        </div>
                        <div className="informacoes-pessoais-conteudo">
                            <h2> Email: anderson.lima.correa@gmail.com</h2>
                            <h2> Numero: (xx) xxxx-xxxx</h2>
                        </div>
                        <div className="informacoes-pessoais-titulo">
                            <h1> Configurações </h1>
                            <h2 id="senha"> Trocar Senhar </h2>
                            <h2 id="encerrar"> Encerrar Conta </h2>
                        </div>
                    </div>
                </div>
                <div className="quadrado">
                    <div className="lado-direito">
                        <img src={user} alt="user" />
                    </div>
                </div>
            </div>
            <div className="voltar">
                <img src={sair} alt="sair" onClick={(e) => {window.location.href="/home"}}/>
            </div>
        </div>
    );
}

export default User;