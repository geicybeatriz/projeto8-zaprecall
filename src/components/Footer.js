import Success from "./Success";
import Failure from "./Failure";

export default function Footer(props){
    const {result, total, setStart} = props;
          
    return (
        <>
            <footer>
                <section>
                {result.length === total && result.includes("close-circle") ? <Failure /> 
                : result.length === total ? <Success />
                : <></>}
                </section>

                <p> {result.length}/{total} CONCLUÍDOS </p>
                <article className="icons-footer">
                    {result.map((icon, index)=> (<ion-icon  key={index} name={`${icon}`} ></ion-icon>))}
                </article>

                <article>
                {result.length === total ? (<button className="restart-button" onClick={()=> setStart(false)} >REINICIAR RECALL</button>): <></>}
                </article>
            </footer>
        </>
    )
}