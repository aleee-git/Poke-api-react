import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function VerPoke({pokemon, selected}) {

  const [tipo, setTipo] = useState([])
    const [onePoke, setOnePoke] = useState ({
        name : "",
        sprites : {front_default: ""}
    })

    useEffect (()=> {
        getPokemon(pokemon.url)
    })

    const getPokemon = (url) => {
      axios.get(url)
      .then((respuesta) => {
        setOnePoke(respuesta.data)
        setTipo(respuesta.data.types["0"].type)
      })
    }

  return (
  <>
  {selected == undefined? (
  <div className='lista'>
    <div className="texto">
    <p className='nombre'> {onePoke.name} </p>
    <p> Tipo: {tipo.name} </p>
    </div>
    <img src={onePoke.sprites.front_default} className='card-img-top'  alt="..."/>
  </div>
  ) : (
  selected== tipo.name? (
  <div className='lista'>
    <p className='nombre'> {onePoke.name} </p>
    <p className='tipo'> {tipo.name}</p>
    <img src={onePoke.sprites.front_default} className='card-img-top'  alt="..."/>
  

</div>
): null

)
  }
  </>

  );
}
