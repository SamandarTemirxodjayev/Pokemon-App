import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 

function PokemonItem({ pokemon }) {
    const [ pokemonData, setPokemonData ] = useState({});
    const [ loading, setLoading ] = useState(true);
  
    const fetchPokemon = async () => {
      const response = await fetch(pokemon.url);
      const results = await response.json();
      console.log(results);
      setPokemonData(results);
      setLoading(false);
    }
  
    useEffect(() => {
      fetchPokemon();
    }, []);
  
    if(loading) {
      return <div className="loading-indicator">Loading...</div>
    }
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const style = {
      backgroundColor: `rgb(${r}, ${g}, ${b})`
    }
    return (
      <>
      <div style={style} className='card'>
        <Link to={"pokemon/" + pokemonData.id}>
              <div className='name'>{pokemonData.name}</div>
              <div style={{
                display: "flex",
                justifyContent: "space-between"
              }}>
                  <div
                      style={{color: "#fff"}}
                  >
                    {pokemonData.abilities.map(ability =>(
                        <div key={ability.ability.url} className='effect_pokemon'>{ability.ability.name}</div>
                    ))}
                  </div>
                  <div className='pokemon_img'>
                    <img src={pokemonData.sprites.other.dream_world.front_default} alt="" className='img' />
                  </div>
                </div>
        </Link>
      </div>
      </>
      
    );
  }
  
  export default PokemonItem;