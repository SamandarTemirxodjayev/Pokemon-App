import PokemonItem from "../PokemonItem"

function Home({ pokemons }) {
  
  return (
    <>
    <div className="listcard container">
    {pokemons.map(pokemon => (
        <PokemonItem 
            pokemon={pokemon} 
            key={pokemon.url}
        />
    ))}
    </div>
    </>
    
  );
}

export default Home;
