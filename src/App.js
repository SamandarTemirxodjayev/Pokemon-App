
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Pokemon from './components/Pokemon';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  const [ pokemons, setPokemons ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  const fetchPokemons = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=100");
    const { results } = await response.json();
    setPokemons(results);
    setLoading(false);
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  if(loading) {
    return <div className="loading-indicator">Loading</div>
  }

  return (
    <div>
    <Header />
    <Search />
    <Routes>
      <Route 
        path='/'
        element={
          <Home pokemons={pokemons}/>
        }
      />
      <Route path='/pokemon/:id' element={<Pokemon />} />
    </Routes>
    </div>
  );
}
export default App;
