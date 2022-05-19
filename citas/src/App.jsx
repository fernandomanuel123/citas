import Header from "./components/Header"
import Formulario from "./components/Formulario"

function App() {

  const sumar = () =>{

    console.log(2+2)
  }

  sumar()

  return (
    <>
    <Header/>
    <Formulario/>
    </>
  )
}

export default App
