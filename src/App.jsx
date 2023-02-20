import Header from './Components/Header';
import BuscarPoke from './Components/BuscarPoke';
import ListaPoke from './Components/ListaPoke';
import FiltrarPoke from './Components/FiltrarPoke';

import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App">

      <Header/>

      <Routes>
        {/* <Route path="/" element={ <Header /> } /> */}
        <Route path="/BuscarPoke" element={ <BuscarPoke /> } />
        <Route path="/ListaPoke" element={ <ListaPoke /> } />
        <Route path="/FiltrarPoke" element={ <FiltrarPoke /> } />
      </Routes>
      
    </div>
  )
}

export default App;
