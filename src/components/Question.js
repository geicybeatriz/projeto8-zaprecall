import React from "react";

export default function Question(props){
    const {question, setSelected} = props;

    return (
        <>
            <article className="card ">
                <div className="open-question">
                    <div className="text">
                        <h3>{question}</h3>
                    </div>
                    <div className="arrow-flip-card">
                        <img 
                            className="flip-card" 
                            src="./assets/img/vector.png" 
                            onClick={() => setSelected('answer')} alt="flip card"/>
                    </div>
                </div>
            </article>
        </>
    );
}

