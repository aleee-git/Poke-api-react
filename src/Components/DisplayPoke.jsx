import React from 'react';
import VerPoke from './VerPoke';
export default function DisplayPoke({pokemons, selected}) {
  
  return (
    <div className='row'>
        {pokemons.map((lista) => <VerPoke pokemon={lista} selected={selected}/>)}
    </div>
  );
}
