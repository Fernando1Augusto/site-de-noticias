import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import "../Login/Components/Login.css";
import Cabecalho from '..//Login/Components/CabecalhoLogin';

function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    //verificando se usuario digitou email e senha corretamente
    const verifica = () => {
        if (email === "admin@gmail.com" && senha === "admin") {
            alert("Login realizado com sucesso!");
            window.location.href = "/home";
        }
        else {
            alert("Login ou senha incorretos!");
        }
    }

    const recupera = () => {
        //redireciona para a pagina de cadastro
        window.location.href = "/recupera";

    }


    return (
        <>
            <Cabecalho />
            <div className='Corpo-login'>
                <h1>Login</h1>
                <input id='input1' type="text" placeholder='Digite seu e-mail...' onChange={(e) => setEmail(e.target.value)} />
                <input id='input2' type="password" placeholder='Digite sua senha...' onChange={(e) => setSenha(e.target.value)} />
            </div>
            <div className='botoes-login'>
                <p onClick={recupera} id="recupera">Esqueci minha senha.</p>

                <button onClick={verifica}>Entrar</button>
            </div>

        </>
    );
}

export default Login;