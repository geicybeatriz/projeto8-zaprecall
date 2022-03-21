import React from "react";

export default function Cards(props){
    const {index, setSelected, response} = props;
    return (
        <>
            <article className="deck-flashcards" >
                <h2 className={response}>Pergunta {index+1} </h2>
                {(response === '') ? <ion-icon name="play-outline" onClick={() => setSelected('question')} ></ion-icon> :
                <ion-icon name={response} ></ion-icon>} 
            </article>
        </>
    );
}