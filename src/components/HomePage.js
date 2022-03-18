import React from "react";
import Tela2 from "./Tela2";

export default function HomePage(){
    const [start, setStart ] = React.useState(false);
    
    return !start ? (
        <main className="home-page">
            <article>
                <img className="logo-home" src="./assets/img/logo-telainicial.jpg" alt="ZapRecall"/>
                <h1>ZapRecall</h1>
            </article>
            <button onClick={() => setStart(true)}>Iniciar Recall</button>
        </main>
    ) : (
        <>
            <Tela2 />
        </>
    );
}
