import React, { useEffect, useState } from "react";

function PokemonStats({ pokemonName }) {
  const [pokemonStats, setPokemonStats] = useState({});

  useEffect(() => {
    async function fetchPokemonStats() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const data = await response.json();
      setPokemonStats({
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        speed: data.stats[5].base_stat,
        defense: data.stats[2].base_stat,
        specialAttack: data.stats[3].base_stat,
        specialDefense: data.stats[4].base_stat,
      });
    }
    fetchPokemonStats();
  }, [pokemonName]);

  return (
    <div className="typesPokemon">
      <p>HP: {pokemonStats.hp}</p>
      <p>Attack: {pokemonStats.attack}</p>
      <p>Speed: {pokemonStats.speed}</p>
      <p>Defense: {pokemonStats.defense}</p>
      <p>Special Attack: {pokemonStats.specialAttack}</p>
      <p>Special Defense: {pokemonStats.specialDefense}</p>
    </div>
  );
}

export default PokemonStats;
