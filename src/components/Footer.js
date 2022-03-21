
export default function Footer(props){
    const {result, total} = props;
    console.log(result, "o que recebo");
  

    console.log(result, "essa bosta aqui n renderiza");
    
    return (
        <>
            <footer>
                <section>
                {result.length === total && result.includes("close-circle") ? (
                    <article className="result-screen">
                        <span>
                            <img className="emoji" src="./assets/img/sad7.png" alt="emoji sad"/>
                            <h3>Putz...</h3>
                        </span>
                        <h2>Ainda faltam alguns... Mas não desanime!</h2>
                    </article>) 
                : result.length === total ? (
                    <article className="result-screen">
                        <span>
                            <img className="emoji" src="./assets/img/party2.png" alt="emoji party"/>
                            <h3>Parabéns!</h3>
                        </span>
                        <h2>Você não esqueceu de nenhum flashcard!</h2>
                    </article>) : <></>}
                </section>
                <p> {result.length}/{total} CONCLUÍDOS </p>
                <article className="icons-footer">
                    {result.map((icon, index)=> (<ion-icon  key={index} name={`${icon}`} ></ion-icon>))}
                </article>
            </footer>
        </>
    )
}