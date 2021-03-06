import React from "react";
import Container from "./Container";

export default function HomePage(){
    const [start, setStart ] = React.useState(false);
    
    return !start ? (
        <main className="home-page">
            <article>
                <img className="logo-home" src="./assets/img/image 1.png" alt="ZapRecall"/>
                <h1>ZapRecall</h1>
            </article>
            <button onClick={() => setStart(true)}>Iniciar Recall</button>
        </main>
    ) : (
        <>
            <Container setStart={setStart}/>
        </>
    );
}
