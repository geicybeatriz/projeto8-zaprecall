import React from "react";
import Header from "./Header";
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

export default function Container(props){
    const {setStart} = props;
    dataQuestions.sort(() => Math.random() - 0.5);
    const [result, setResult] = React.useState([]);
    
    return(
        <>
            <div className="content-T2">
                <Header />

                <main className="container-questions">
                    {dataQuestions.map((data, index) => 
                        (<Deck 
                            key={index} 
                            id={index} 
                            data={data} 
                            setResult={setResult}
                            result={result}/>))}
                </main>

                <Footer setStart={setStart} result={result} total={dataQuestions.length} />
            </div>
        </>
    )
}