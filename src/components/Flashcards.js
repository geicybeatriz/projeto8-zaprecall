

export default function Flashcards(props){
    const {question, answer} = props

    return (
        <>
            <div className="face open-question">
                <div>
                    <h3>{question}</h3>
                </div>
                <div>
                    <img className="flip-card" src="./assets/img/vector.png" onClick="turnCard()" alt="flip card"/>
                </div>
            </div>
            <div className="face open-answer hidden">
                <div>
                    <h3>{answer}</h3>
                </div>
                <div className="buttons">
                    <button className="red">Não lembrei</button>
                    <button className="yellow">Quase não lembrei</button>
                    <button className="green">Zap!</button>
                </div>

            </div>
        </>
    );

}