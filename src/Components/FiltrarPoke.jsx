import React from 'react';
import { useState, useEffect } from 'react';
import ListaPoke from './ListaPoke';
export default function FiltrarPoke() {

  const [types, setTypes] = useState([]);

  const [selected, setSelected] = useState('')

  const getTypes = async () => {
    let listaTipos = await fetch('https://pokeapi.co/api/v2/type');
    let tipos = await listaTipos.json();
    tipos = tipos.results;
    setTypes(tipos)
  }

  useEffect(() => {
getTypes()
  },[])


const filtrarPoke = (elemento) => {
setSelected(elemento.target.value)
}

  return ( 
  <>
  <select onChange={filtrarPoke} value={selected}>
    <option id='opcion' value="" disabled selected>--- Selecciona un Tipo ---</option>
    {types.map((elemento) => (
    <option id='opcion' value={elemento.name}>{elemento.name}</option>
    ))}
  </select>
  
  <ListaPoke selected={selected}/>
  </>
  );
}
