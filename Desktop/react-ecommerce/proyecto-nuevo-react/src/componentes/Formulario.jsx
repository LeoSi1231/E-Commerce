import Boton from "./Boton"
import {useState} from "react"

function Formulario () {
    const [Nombre, setNombre] = useState("")

    const handleNombre =(evento) => {
        setNombre(evento.target.value)
    }

    const handleBoton = () => {
        console.log(Nombre)
    }

    return (
    <div>
        <input type ="text" 
        placeholder="Email" 
        value ={Nombre}
        onChange = {handleNombre}/>
        <Boton texto="Enviar" color="green" colorLetra="white"
        funcion={handleBoton}/>

    </div>
    )

}

export default Formulario