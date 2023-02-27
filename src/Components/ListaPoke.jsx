import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DisplayPoke from './DisplayPoke';

export default function ListaPoke() {

    const [pokemons, setPokemons] = useState([{
        name : "Ditto",
        url : "https://pokeapi.co/api/v2/pokemon/1"
    }]);

    const getPokemons = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")
        .then((respuesta) => {
            console.log(respuesta);
            setPokemons(respuesta.data.results);
            console.log(pokemons)
        })
    }

    useEffect(() => {
        getPokemons();
    },[])

  return (
    <div>
        <DisplayPoke pokemons={pokemons}/>
    </div>
  );
}
