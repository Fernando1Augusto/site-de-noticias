import React from "react";
import "../Registrar/Registrar.css";
import Box from '@mui/material/Box';
import CabecalhoRegistrar from "./CabecalhoRegistrar";
import icon from "../../assets/images/user.png";

function RegistrarPT3() {

    return (
        <>
            < CabecalhoRegistrar />
            <div id="corpo">
                <div id="titulo">
                    <h1>Queremos te conhecer....</h1>
                    <h2> Qual perfil de investidor que você se considera:</h2>
                </div>
                <div id="quadros">
                    <div className="quadro1">
                        <Box
                            sx={{
                                width: 300,
                                height: 300,
                                backgroundColor: 'primary.dark',
                                '&:hover': {
                                    backgroundColor: 'primary.main',
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}
                        >
                            <div className="icon-user">
                                <img src={icon} alt="icon" />
                            </div>
                            <div className="texto">
                                <h4> Investidor consevador</h4>
                                <h5> Busca a preservação de recursos, com zero tolerância a perdas e busca alta liquidez. Este perfil é comum para quem está começando a investir.</h5>
                            </div>


                        </Box>
                    </div>
                    <div className="quadro2">
                        <Box
                            sx={{
                                width: 300,
                                height: 300,
                                backgroundColor: 'primary.dark',
                                '&:hover': {
                                    backgroundColor: 'primary.main',
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}
                        >
                            <div className="icon-user">
                                <img src={icon} alt="icon" />
                            </div>
                            <div className="texto">
                                <h4> Investidor Moderado </h4>
                                <h5> É aquele que tolera um pouco mais de risco, a fim de conseguir uma rentabilidade igualmente maior. A menor liquidez e perdas controladas são aceitas, porém não se abre mão da proteção patrimonial.</h5>
                            </div>
                        </Box>
                    </div>
                    <div className="quadro3">
                        <Box
                            sx={{
                                width: 300,
                                height: 300,
                                backgroundColor: 'primary.dark',
                                '&:hover': {
                                    backgroundColor: 'primary.main',
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}
                        >
                            <div className="icon-user">
                                <img src={icon} alt="icon" />
                            </div>
                            <div className="texto">
                                <h4> Investidor Arrojado </h4>
                                <h5> É o que assume maiores riscos para conseguir o maior retorno possível.
                                    Essa classificação é dada aos investidores que já conhecem o funcionamento do mercado financeiro e as características dos ativos. </h5>
                            </div>
                        </Box>
                    </div>
                </div>
                <div className="navegação">
                    <button className="botao-voltar" onClick={(e) => (window.location.href = "/registrar-pt2")} >Voltar</button>
                    <p className="pg1-1-1">1</p>
                    <p className="pg2-2-2">2</p>
                    <p className="pg3-3-3">3</p>
                    <button className="botao-prosseguir" onClick={(e) => (window.location.href = "/login")}>finalizar</button>
                </div>
            </div>
        </>
    );
}

export default RegistrarPT3;