import { Botao } from "./Botao";
import { Icon } from "./Icon";

export function HamburguerButton({onClick, isMenuOpen}) {

    return (
        <>
            <div className="div-ham">
             
                    <Botao clase={"ham-button"} onClick={onClick}>
                        { isMenuOpen ? <Icon name={"close"}/> : <Icon name={"menu"}/>}

                    </Botao>
              
            </div>
        </>
    )
}