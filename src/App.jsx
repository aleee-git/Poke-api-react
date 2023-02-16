import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import BuscarPoke from './Components/BuscarPoke';

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App">
      {/* <Routes>
        <Route path="./Components/BuscarPoke" element={ <Buscar /> } />
        <Route path="./Components/FiltrarPoke" element={ <Filtrar /> } />
      </Routes> */}


{/* <Router>
      <Navbar />
      <Switch>
      <Route exact path="/" component={App} />
        <Route exact path="./Components/BuscarPoke" component={BuscarPoke} />
        <Route exact path="./Components/FiltrarPoke.jsx" component={BuscarPoke} />
        <Route exact path="*" component={BuscarPoke} />
      </Switch>
    </Router> */}



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
    </div>
  )
}

// function Navbar (){
//   return (
//     <nav>
//           <Link to="./Components/BuscarPoke" target={'_blank'}>Aqui</Link>
//     </nav>
//   )

// }

export default App;
