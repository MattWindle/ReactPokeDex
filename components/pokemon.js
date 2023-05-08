import { useState, useEffect } from "react";
import loading from "../helpers/loading";
import useGetRequest from "../hooks/useGetRequest";
import SinglePokemon from "./SinglePokemon";


const Pokemon = ({pokemon}) => {
const [pokemonData, setpokemonData] = useState([])
const { get, loadingState } = useGetRequest(pokemon.url)

useEffect(() => {
    const fetchPokemon = async () => {
        const singlePokemon = await get();
        setpokemonData(singlePokemon);
    };
    fetchPokemon();
  }, [get])

if(loadingState !== loading.loaded)
    return( 
        <div className="loadingImg" >
        </div>
     )

    return(
        <SinglePokemon 
            key={pokemonData.id}
            id={pokemonData.id}
            img={pokemonData.sprites.other.dream_world.front_default}
            name={pokemon.name}
            stats={pokemonData.stats}
            type={pokemonData.types}

        />

    )
}

export default Pokemon;