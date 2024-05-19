import { Exercicio2 } from "./Exercicio2";
import goku from "../imagens/songoku.png"

export function ProfileButton() {

    return (
        <>
            <div className="goku-div">
            <Exercicio2 classeNav={"classeNav"} classeUl={"classeUl"} />
            <button className="goku-button">
                <img className="goku-picture" src={goku} alt="" />
            </button>
            </div>
        </>
    )
}