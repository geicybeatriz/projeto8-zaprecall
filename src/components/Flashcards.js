import React from "react";
import Answer from "./Answer";


export default function Flashcards(props){
    const {question, answer} = props;
    const [flipCard, setFlipCard] = React.useState(false);

    return !flipCard ? (
        <>
            <div className="face open-question">
                <div className="text">
                    <h3>{question}</h3>
                </div>
                <div className="arrow-flip-card">
                    <img 
                        className="flip-card" 
                        src="./assets/img/vector.png" 
                        onClick={() => setFlipCard(true)} alt="flip card"/>
                </div>
            </div>
        </>
    ) : (
        <>
            <div className="face open-answer">
                <Answer answer={answer}/>
            </div>
        </>
    );
}

