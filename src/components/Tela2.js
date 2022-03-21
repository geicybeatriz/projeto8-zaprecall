import React from "react";
import Deck from "./Deck";
import Footer from "./Footer";

const dataQuestions = [
    {question:"O que é JSX?", answer:"Uma extensão de linguagem do JavaScript"},
    {question:"O React é __", answer:"uma biblioteca JavaScript para construção de interfaces"},
    {question:"Componentes devem iniciar com __", answer:"letra maiúscula"},
    {question:"Podemos colocar __ dentro do JSX", answer:"expressões"},
    {question:"O ReactDOM nos ajuda __ ", answer:" interagindo com a DOM para colocar componentes React na mesma página"},
    {question:"Usamos o npm para __", answer:"gerenciar os pacotes necessários e suas dependências"},
    {question:"Usamos props para __ ", answer:"passar diferentes informações para componentes "},
    {question:"Usamos estado (state) para __", answer:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
];

export default function Tela2(){
    dataQuestions.sort(() => Math.random() - 0.5);
    const [result, setResult] = React.useState('');

    return(
        <>
            <div className="content-T2">
                <header>
                    <img className="logo-top" src="./assets/img/image 1.png" alt="ZapRecall logo"/>
                    <h1>ZapRecall</h1>
                </header>

                <main className="container-questions">
                    {dataQuestions.map((data, index) => 
                        (<Deck 
                            key={index} 
                            id={index} 
                            data={data} 
                            setResult={setResult}/>))}
                </main>

                <Footer result={result}/>
            </div>
        </>
    )
}