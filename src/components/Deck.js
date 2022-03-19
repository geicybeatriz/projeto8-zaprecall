import React from "react";
import Flashcards from "./Flashcards";

const dataQuestions = [
    {number: 1, question:"O que é JSX?", answer:"Uma extensão de linguagem do JavaScript"},
    {number: 2, question:"O React é __", answer:"uma biblioteca JavaScript para construção de interfaces"},
    {number: 3, question:"Componentes devem iniciar com __", answer:"letra maiúscula"},
    {number: 4, question:"Podemos colocar __ dentro do JSX", answer:"expressões"},
    {number: 5, question:"O ReactDOM nos ajuda __ ", answer:" interagindo com a DOM para colocar componentes React na mesma página"},
    {number: 6, question:"Usamos o npm para __", answer:"gerenciar os pacotes necessários e suas dependências"},
    {number: 7, question:"Usamos props para __ ", answer:"passar diferentes informações para componentes "},
    {number: 8, question:"Usamos estado (state) para __", answer:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
];




export default function Deck(props){
    const [selected, setSelected] = React.useState(false);
    const {number} =props;

    dataQuestions.sort(comparator);
    
    return !selected ? (
        <>
            <article className="deck-flashcards">
                <h2>Pergunta {number}</h2>
                <ion-icon name="play-outline" onClick={() => setSelected(true)} ></ion-icon>
            </article>
            <article className="card hidden">
                    {dataQuestions.map((data) => (<Flashcards key={data.number} question={data.question} answer={data.answer}/>))}
            </article>
        </>
    ): (
        <>
            <article className="deck-flashcards hidden">
                <h2>Pergunta {number}</h2>
                <ion-icon name="play-outline" onClick={() => setSelected(true)} ></ion-icon>
            </article>
            <article className="card ">
                    {dataQuestions.map((data) => (<Flashcards key={data.number} question={data.question} answer={data.answer}/>))}
            </article>
        </>
    );
}

function comparator(){
    return Math.random() - 0.5;
}

