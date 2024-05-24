import { NavMenu } from "./NavMenu";
import goku from "../imagens/songoku.png"

export function ProfileButton() {

    return (
        <>
            <div className="goku-div">
            <NavMenu classeNav={"classeNav"} classeUl={"classeUl"} />
            <button className="goku-button">
                <img className="goku-picture" src={goku} alt="" />
            </button>
            </div>
        </>
    )
}