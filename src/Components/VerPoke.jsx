import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function VerPoke({pokemon}) {

    const [onePoke, setOnePoke] = useState ({
        name : "",
        sprites : {front_default: ""}
    })

    useEffect (()=> {
        getPokemon(pokemon.url)
    })

    const getPokemon = (url) => {
      axios.get(url)
      .then((respuesta) => {setOnePoke(respuesta.data)})
    }

  return (
    <div className='container lista'>
      <div className='texto'> {onePoke.name} </div>
      <div className='imagen'>
      <img src={onePoke.sprites.front_default} alt="poke-imagen" />
      </div>
    </div>
  );
}
