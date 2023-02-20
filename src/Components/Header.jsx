import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  return (
  <div className='header'>
    <h1>Bienvenido</h1>
    <div>
      <img src="../src/Images/pika.gif" alt="Poke" />
    </div>
    <div className='container sombra principal'>
    <Link to="BuscarPoke" className='enlace'> Buscar un Pokemón 🔎 </Link>
    <Link to="ListaPoke" className='enlace'> Ver Pokemones 👀 </Link>
    <Link to="FiltrarPoke" className='enlace'> Filtrar Pokemón 🕵️ </Link>
    </div>
  </div>
  );
}
