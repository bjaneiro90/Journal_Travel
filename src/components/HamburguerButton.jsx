export function HamburguerButton({onClick}) {

    return (
        <>
            <div className="div-ham">
                <button onClick={onClick}className="ham-button">
                <span className="material-symbols-outlined">menu</span>
                </button>
            </div>
        </>
    )
}