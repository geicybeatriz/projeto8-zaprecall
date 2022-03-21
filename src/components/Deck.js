import React from "react";
import Answer from "./Answer";
import Cards from "./Cards";
import Question from "./Question";


export default function Deck(props){
    const [selected, setSelected] = React.useState('start');
    const [response, setResponse] = React.useState('');
    const {key, id, data:{question, answer}, setResult} =props;   

    return (
        <>
            {(selected === 'start') ? <Cards index={id} setSelected={setSelected} response={response} /> :
            (selected === 'question') ? <Question key={key} question={question} setSelected={setSelected}/> :
            <Answer answer={answer} setResponse={setResponse} setResult={setResult} setSelected={setSelected}/>}
        </>
    );
}