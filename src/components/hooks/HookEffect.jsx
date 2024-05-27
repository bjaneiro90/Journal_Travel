import { useEffect, useState } from "react"

export function HookEffect() {

    const [click, setClick] = useState(0)
    const [clickB, setClickB] = useState(0)
    const [user, setUser] = useState('')


    // useEffect(() => {
    //     console.log("aparece em apenas uma vez")
    // }, [])


    // useEffect(() => {
    //     console.log("vai aparecer sempre")
    // })

    // useEffect(() => {
    //     console.log("aparece depois do click")
    // }, [click])

    // useEffect(() => {
    //     console.log("aparece depois do clickB")
    // }, [clickB])


    useEffect(() => {
        const timer = setTimeout(() => {
            console.log(`O incrementador foi alterado ${click}`)
        }, 2000);

        return () => {
            clearTimeout(timer)
        }
    }, [click])


    useEffect(() => {
        const showDetails = async () => {
            try {
                const response = await fetch("http://localhost:8001/perfils")
                const data = await response.json()
                console.log(data)
                setUser(data)
            } catch (error) {
                console.log("erro")
            }
        }
        showDetails()
    },[])

    const handleClick = () => {
        setClick((prevClick) => prevClick + 1)
    }

    const handleClickB = () => {
        setClickB((prevClick) => prevClick + 1)
    }

    return (
        <>
            <div style={{padding: "8rem"}}>
                <button onClick={handleClick}>click me</button>
                <p>{click}</p>
            </div>
            <div style={{padding: "8rem"}}>
                <button onClick={handleClickB}>click me</button>
                <p>{clickB}</p>
            </div>


            {user && (
                <div>
                    {user.map(user => (
                        <div key={user.id}>
                            <h1>{user.name}</h1>
                            <p>{user.email}</p>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}