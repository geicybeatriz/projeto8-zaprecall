import React from "react";

export default function HomePage(){
    // const [start, setStart ] = React.useState();
    
    return (
        <main className="home-page">
            <article>
                <img className="logo-home" src="./assets/img/logo-telainicial.jpg" alt="ZapRecall"/>
                <h1>ZapRecall</h1>
            </article>
            <button onClick="">Iniciar Recall</button>
        </main>
    );
}
