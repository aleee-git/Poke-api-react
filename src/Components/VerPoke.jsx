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

  <div className='lista' style={{width: '18rem'}}>
    <img src={onePoke.sprites.front_default} className='card-img-top'  alt="..."/>
    <div className='card-body'>
      <p className='card-text texto'> {onePoke.name} </p>
    </div>
  </div>

  );
}
