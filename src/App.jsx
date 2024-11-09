import { useState } from 'react'
import { Formulario } from './components/Formulario'
import {  Header }  from './components/Header'
import { ListadoRequirems } from './components/ListadoRequirems'
import './App.css'

function App() {
  const [requirems, setRequirems] = useState([])

  return (
    <div className="mx-auto">
    <Header /> 

      <div className=' container mt-12 flex'>
      <Formulario
      requirems={requirems}
      setRequirems={setRequirems}
        /> 
      <ListadoRequirems
        requirems={requirems}
        setRequirems={setRequirems}
        />   
      </div> 
    </div>
  )
}

export default App
