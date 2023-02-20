import React from 'react';
import VerPoke from './VerPoke';
export default function DisplayPoke({pokemons}) {
  return (
    <div className='row'>
        {pokemons.map((lista) => <VerPoke pokemon={lista}/>)}
    </div>
  );
}
