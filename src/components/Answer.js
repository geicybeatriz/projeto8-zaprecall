import React from "react";

export default function Answer(props){
    const {answer,setResponse, setSelected, result, setResult} = props;

    function finishAnswer(selected, name){
        setSelected(selected);
        setResponse(name);
        setResult([...result, name]);
    }

    return (
        <> 
            <article className="card">
                <div className="open-answer">
                    <div className="text">
                        <h3>{answer}</h3>
                    </div>
                    <div className="buttons">
                        <button className="red" onClick={() => finishAnswer('start',"close-circle")}>Não lembrei</button>
                        <button className="yellow" onClick={() => finishAnswer('start',"help-circle")}>Quase não lembrei</button>
                        <button className="green" onClick={() => finishAnswer('start',"checkmark-circle")}>Zap!</button>
                    </div>
                </div>
            </article>
        </>
    )
}