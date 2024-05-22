import { useState } from "react";


export function Counter() {

const [texto, setTexto] = useState(true)

const handleText = () => {
    setTexto(!texto)
}

let varText;
let incrementText

if(texto) {
    varText = "visivel";
    incrementText = "invisivel"
} else {
    varText = null;
    incrementText = "visivel"
}


return (
    <div>
        <h2>{varText}</h2>
        <button onClick={handleText}>{incrementText}</button>
    </div>
)

}