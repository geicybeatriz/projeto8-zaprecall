import React from "react";
import Answer from "./Answer";
import Cards from "./Cards";
import Question from "./Question";


export default function Deck(props){
    const [selected, setSelected] = React.useState('start');
    const [response, setResponse] = React.useState('');
    const {id, data:{question, answer}, setResult, result} =props;   

    return (
        <>
            {(selected === 'start') ? <Cards index={id} setSelected={setSelected} response={response} /> :
            (selected === 'question') ? <Question key={id} question={question} setSelected={setSelected}/> :
            <Answer key={id} answer={answer} setResponse={setResponse} setResult={setResult} result={result} setSelected={setSelected}/>}
        </>
    );
}