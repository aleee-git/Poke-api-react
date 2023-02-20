import React from 'react';

export default function Header() {
  return (
  <div className='header'>
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
  </div>
  );
}
