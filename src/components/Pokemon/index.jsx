import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import PokemonType from '../PokemonTypes';
import './App.css'

function Pokemon(props) {
  const { id } = useParams()
  const [pokemonDatas, setpokemonDatas] = useState(null);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => {
        setpokemonDatas(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [props.id]);

  if (!pokemonDatas) {
    return <div className="loading-indicator">Loading...</div>;
  }

  return (
    <>
      <div className="namePokemonItem">
        <h1>{pokemonDatas.name}</h1>
        <div className="boxPokemon">
          <img src={pokemonDatas.sprites.other.dream_world.front_default} alt={pokemonDatas.name} className='imgPokemon'/>
          <div className="types">
            <h2>Abilities: </h2>
            <ul>
              {pokemonDatas.abilities.map(ability => (
                <li key={ability.ability.name}>{ability.ability.name}</li>
              ))}
            </ul>
            <h2>Pokemon Types: </h2>
            <PokemonType pokemonName={id} />
          </div>
        </div>
        <Link to='/' className='homeUrl'>Main Menu</Link>
      </div>
    </> 
  );
}

export default Pokemon;
