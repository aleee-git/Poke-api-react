import { useState } from 'react'
import './App.css'
import BuscarPoke from './Components/BuscarPoke';
import ListaPoke from './Components/ListaPoke';
import VerPoke from './Components/VerPoke'
import Header from './Components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App">
      
      <Header/>
      
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
