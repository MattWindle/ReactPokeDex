import { useState , useEffect} from "react";
import Pokemon from "./pokemon";

const App = () => {
const [pokemons, setPokemon] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=3')
        .then((response) => response.json())
        .then((data) => {
            setPokemon(data.results)
        });
  }, [])


    return (
        <>
        <h1>Kanto Pokedex</h1>
        <div className="grid">
            {pokemons.map(p => <Pokemon key={p.name} pokemon={p} />)}
        </div>
        </>
    )
}

export default App;