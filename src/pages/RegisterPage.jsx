import { useEffect, useState } from "react";
import { Botao } from "../components/Botao";

export function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


  useEffect(() => {
    const checkEmailMatch = async () => {
      if (email) {
        console.log(email);
        try {
          const response = await fetch("http://localhost:8001/perfils");
          const data = await response.json();
          const profile = data.find(profile => profile.email === email);
          if (profile) {
            console.log('O email inserido já está registrado.');
          } else {
            console.log('email ok');
          }
        } catch (error) {
          console.error("Erro ao verificar email:", error)
        }
      }
    };
    checkEmailMatch();
  }, [email]);

  useEffect(() => {
    if (password.length > 0 && password.length <= 5) {
      console.log('A senha deve ter mais do que 5 caracteres.');
    } else {
      console.log('Senha permitida');
    }
  }, [password]);
    return (
        <>
            <main className="lgin-main">
                <section className="lgin-section">
                    <form className="lgin-form" action="">
                        <div className="lgin-h2">
                            <h2>Registo</h2>
                        </div>
                        <div>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Nome"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        </div>
                        <div>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        </div>
                        <div>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        </div>
                        <Botao type="submit" clase="lgin-button">Registrar</Botao>
                    </form>
                </section>
            </main>
        </>
    )
}