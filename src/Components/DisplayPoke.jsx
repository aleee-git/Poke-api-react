import React from 'react';
import VerPoke from './VerPoke';
export default function DisplayPoke({pokemons}) {
  return (
    <div>
        {pokemons.map((lista) => <VerPoke pokemon={lista}/>)}
    </div>
  );
}
