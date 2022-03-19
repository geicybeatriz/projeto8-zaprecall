import React from "react";
import Flashcards from "./Flashcards";

export default function Deck(props){
    const [selected, setSelected] = React.useState(false);
    const {key, question, answer} =props.data;   
    
    return !selected ? (
        <>
            <article className="deck-flashcards">
                <h2>Pergunta {props.id+1} </h2>
                <ion-icon name="play-outline" onClick={() => setSelected(true)} ></ion-icon>
            </article>
        </>
    ) : (
        <>
            
            <article className="card ">
                <Flashcards key={key} question={question} answer={answer}/>
            </article>
        </>
    );
}