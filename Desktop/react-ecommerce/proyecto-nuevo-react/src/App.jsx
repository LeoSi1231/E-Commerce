import Boton from "./componentes/Boton"
import {useState} from "react"
import Formulario from "./componentes/Formulario"
import {Routes, Route} from "react-router-dom"
 
function App() {

  return <>
  <Routes>
<Route path="/titulo" element={<h1>TITULO</h1> }/>
<Route path= "/boton" element={<button>BOTON </button> }/>

  </Routes>
  </>
}