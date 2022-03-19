export default function Answer(props){
    const {answer} = props;

    return (
        <>
            <div className="text">
                <h3>{answer}</h3>
            </div>
            <div className="buttons">
                <button className="red">Não lembrei</button>
                <button className="yellow">Quase não lembrei</button>
                <button className="green">Zap!</button>
            </div>
        </>
    )
}