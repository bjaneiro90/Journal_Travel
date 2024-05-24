import { useState } from "react";
import { Botao } from "../components/Botao";

export function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // console.log("email:" + email)
    // console.log("password:" + pas)

    const onSubmit = async (event) => {
        event.preventDefault()
    

        console.log(email, password)

        try {
            const profile = await checkEmailMatch()
            console.log(profile)
        } catch (error) {
            
        }
    }


    const checkEmailMatch = async (email) => {

        try {
            const response = await fetch("http://localhost:8001/perfils")
            const data = await response.json()
            return data

        } catch (error) {
            
        }
    }


    return(
        <>
            <main className="lgin-main">
                <section className="lgin-section">
                    <form action="" className="lgin-form" onSubmit={onSubmit}>
                        <div className="lgin-h2">
                            <h2>Log In</h2>
                        </div>
                        <input type="email" id="email" name="email" value={email} onChange={(e) =>setEmail(e.target.value)}/>
                        <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                        <Botao clase="lgin-button" type={"submit"}>LogIn</Botao>
                    </form>
                </section>
            </main>
        </>
    )
}