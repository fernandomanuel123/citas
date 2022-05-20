import { useState,useEffect } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = (id)=>{
    const PacientesActualizados = pacientes.filter(pacienteEliminar => pacienteEliminar.id !== id)
    setPacientes(PacientesActualizados)
  }

  useEffect(()=>{
    localStorage.setItem('pacientes',JSON.stringify(pacientes))
  },[pacientes]);

  return (
    <div className="container mx-auto mt-20">
    <Header/>
    <div className="mt-12 md:flex">
    <Formulario
      setPacientes = {setPacientes}
      pacientes = {pacientes}
      paciente = {paciente}
      setPaciente = {setPaciente}
    />
    <ListadoPacientes
      pacientes = {pacientes}
      setPaciente = {setPaciente}
      eliminarPaciente = {eliminarPaciente}
      />      

    </div>    
    </div>
  )
}

export default App
