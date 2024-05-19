import { HamburguerButton } from "./HamburguerButton";
import { ProfileButton } from "./ProfileButton";

export function Header() {

    return(
        <>
            <header className="main_header">
                <HamburguerButton/>
                <ProfileButton/>
            </header>
        </>
    )
}