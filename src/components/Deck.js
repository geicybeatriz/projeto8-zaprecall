
export default function Deck(props){
    const {number, question, answer} =props;



    function showQuestion(){

    }


    return (
        <>
            <article>
                <h2>Pergunta {number}</h2>
                <ion-icon name="play-outline" onClick="showQuestion()"></ion-icon>
            </article>
        </>
    );
}