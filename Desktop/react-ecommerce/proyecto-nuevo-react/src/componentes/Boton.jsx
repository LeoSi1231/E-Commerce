function Boton({texto, color, colorLetra,funcion}) {
    return (
        <>
        <button 
        onClick = {funcion} 
        style = {{background: color , color:colorLetra }}>{texto} 
        </button>
        
        </>
    )
}

export default Boton