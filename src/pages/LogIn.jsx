import { useState } from "react";
import { Botao } from "../components/Botao";
import { PostCard } from "../components/PostCard";

export function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [ConfirmationInfo, setConfirmationInfo] = useState('')
    const [error, setError] = useState('')
    const [user, setUser] = useState('')

   

    const onSubmit = async (event) => {
        event.preventDefault()
        
        setEmailError('');
        setPasswordError('')
        setConfirmationInfo('')
        setError('')


        try {
            const profile = await checkEmailMatch(email)
         
            
            if(!profile) {
                setEmailError("email nao existe")
                return;
            }

           if(profile.password !== password ) {
                setPasswordError("password errada")
                return;
           }

           console.log(profile)
           setUser(profile)
            console.log(profile.token)
            localStorage.setItem("userToken", profile.token)

            setConfirmationInfo("Acesso Confirmado")
        } catch (error) {
            setError("error")
        }
    }


    const checkEmailMatch = async (email) => {

        try {
            const response = await fetch("http://localhost:8001/perfils")
            const data = await response.json()

            const profile = data.find(usuario => usuario.email === email);
      
            return profile

        } catch (error) {
          setError("error")
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
                        <div className="lgin-div">
                            <input type="email" id="email" name="email" value={email} onChange={(e) =>setEmail(e.target.value)}/>
                            {emailError && <p className="lgin-error">{emailError}</p>}
                        </div>
                        <div className="lgin-div">
                        <input type="password" id="password" name="password" value= {password} onChange={(e) => setPassword(e.target.value)} />
                            {passwordError && <p className="lgin-error">{passwordError}</p>}
                        </div>
                        <Botao clase="lgin-button" type={"submit"}>LogIn</Botao>
                        {ConfirmationInfo ? <p className="lgin-conf">{ConfirmationInfo}</p> :
                        <p className="lgin-conf">{error}</p>}
                    </form>
                </section>
            </main>

            {user && 
                <div>
                    <h1>{user.name}</h1> 
                    <h2>{user.address}</h2>
                    <h3>Comentários</h3>   
                    <ul>
                        {user.comments.map((post) => {
                            return <PostCard post={post} key={post.id}/>
                        })}
                    </ul>
                </div>}
        </>
    )
}