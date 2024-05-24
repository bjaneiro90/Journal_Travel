import { useState } from "react";
import { HamburguerButton } from "./HamburguerButton";
import { ProfileButton } from "./ProfileButton";
import { NavMenu } from "./NavMenu";

export function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const onMenuToogle = () => {
        setIsMenuOpen((isMenuOpen) => !isMenuOpen)
    }

    return(
        <>
            <header className="main_header">
                <HamburguerButton isMenuOpen={isMenuOpen} onClick={onMenuToogle}/>
                <ProfileButton/>
            </header>
            {isMenuOpen && <NavMenu clase={"ham-li"} classeNav={"ham-menu"} classeUl={"ham-list"}/>}
        </>
    )
}