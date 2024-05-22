import { Exercicio4 } from "./Exercicio4"

export function Exercicio2({ classeNav, classeUl}) {

    // Exercicio 3
    const links = [
        {
          name: "Home",
          url: "/home"
        },
        {
          name: "All Posts",
          url: "/allposts"
        }
      ]
    return(
        <>
            {/* Exercicio 3
            <nav className={classeNav}>
                <ul className={classeUl}>
                {links.map((link) => {
                    return (
                        <li><a href={link.url}>{link.name}</a></li>
                    )
                })}
                    
                </ul>
            </nav> */}

            <nav className={classeNav}>
                <ul className={classeUl}>
                {links.map((link, index) => {
                    return (
                        <Exercicio4 key={index} url={link.url} name={link.name}/>
                    )
                })}
                    
                </ul>
            </nav>
        </>
    )
}