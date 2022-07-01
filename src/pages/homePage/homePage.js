import React from "react";
import Box from '@mui/material/Box';
import icon from "../../assets/images/user.png";
import jornal from "../../assets/images/newspaper.png";
import globo from "../../assets/images/globo.png";
import sair from "../../assets/images/sair.png";
import Cabecalho from "./CabecalhoHome";
import "./homePage.css";

function HomePage() {
    return (
        <>
            <Cabecalho />
            <div id="corpo1">
                <div id="titulo1">
                    <h2>Bem vindo admin</h2>
                </div>
                <div id="quadros">
                    <div className="quadro1" onClick={(e) => {window.location.href = "/user"}}>         
                        <Box
                            sx={{
                                width: 300,
                                height: 300,
                                backgroundColor: 'primary.dark',
                                '&:hover': {
                                    backgroundColor: 'primary.main',
                                    opacity: [0.9, 0.8, 0.7],
                                    border: '1px solid #fff',
                                },
                            }}
                        >
                            <div className="icon-user">
                                <img src={icon} alt="icon" />
                            </div>
                            <div className="texto">
                                <h3> Perfil </h3>
                                <h4> Gerencie suas informações </h4>
                            </div>


                        </Box>
                    </div>
                    <div className="quadro2" onClick={(e) => {window.open("https://www.infomoney.com.br/mercados/ibovespa-hoje-bolsa-de-valores-ao-vivo-28062022/#:~:text=14h05%20–%20Ibovespa%20opera%20na%20mínima%2C%20em%20linha%20com%20NY&text=O%20Ibovespa%20opera%20com%20baixa,lutava%20para%20manter%20sua%20recuperação.")}}>
                        <Box
                            sx={{
                                width: 300,
                                height: 300,
                                backgroundColor: 'primary.dark',
                                '&:hover': {
                                    backgroundColor: 'primary.main',
                                    opacity: [0.9, 0.8, 0.7],
                                    border: '1px solid #fff',
                                },
                            }}
                        >
                            <div className="icon-user">
                                <img src={globo} alt="globo" />
                            </div>
                            <div className="texto">
                                <h3> últimas Notícias</h3>
                                <h4>Acompanhe as notícias de caracter geral do mundo dos fundos imobiliários</h4>
                            </div>
                        </Box>
                    </div>
                    <div className="quadro3" onClick={(e) => {window.open("https://fiis.com.br/noticias/mght11-mantem-distribuicao-desafios-do-setor/")}} >
                        <Box
                            sx={{
                                width: 300,
                                height: 300,
                                backgroundColor: 'primary.dark',
                                '&:hover': {
                                    backgroundColor: 'primary.main',
                                    opacity: [0.9, 0.8, 0.7],
                                    border: '1px solid #fff',
                                },
                            }}
                        >
                            <div className="icon-user">
                                <img src={jornal} alt="jornal" />
                                <div className="texto">
                                    <h3> Mais Relevantes </h3>
                                    <h4>Acompanhe as melhores cotas e notícias sugeridas de acordo com seu perfil.</h4>
                                </div>
                            </div>
                        </Box>
                    </div>
                </div>
            </div>
            <div className=" btn-sair">
                <img src={sair} alt="sair" onClick={(e)=> {window.location.href="/login"}}/>
            </div>
        </>
    );
}

export default HomePage;