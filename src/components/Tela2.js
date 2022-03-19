import Deck from "./Deck"
import Footer from "./Footer"

const nQuestions= [1,2,3,4,5,6,7,8];

export default function Tela2(){
    return(
        <>
            <div className="content-T2">
                <header>
                    <img className="logo-top" src="./assets/img/image 1.png" alt="ZapRecall logo"/>
                    <h1>ZapRecall</h1>
                </header>

                <main className="container-questions">
                    {nQuestions.map((n) => (<Deck key={n} number={n}/>))}
                </main>

                <Footer />
            </div>
        </>
    )
}
