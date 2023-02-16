import { useState } from 'react'
import './App.css'
import BuscarPoke from './Components/BuscarPoke';
import ListaPoke from './Components/ListaPoke';
import VerPoke from './Components/VerPoke'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App">
      <header>
        <h1>Bienvenido</h1>
        <div>
          <img src="../src/Images/pika.gif" alt="Poke" />
        </div>
        <div className='container sombra principal'>
          <ul>
            <li>Ver Pokemones 👀</li>
            <li>Buscar un Pokemon 🔎</li>
            <li>Filtrar un Pokemon por Elemento 🕵️</li>
          </ul>
        </div>
      </header>
      <br />
      <br />
      <br />
      <br />

      <BuscarPoke/>

      <br />
      <br />
      <br />
      <br />

      <ListaPoke/>
      
    </div>
  )
}

export default App;
