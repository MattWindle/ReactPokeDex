import { useState, useEffect } from "react";
import loading from "../helpers/loading";
import useGetRequest from "../hooks/useGetRequest";

const Pokemon = ({pokemon}) => {

const [pokemonData, setpokemonData] = useState([])
const { get, loadingState } = useGetRequest(pokemon.url)

useEffect(() => {
    const fetchPokemon = async () => {
        const singlePokemon = await get();
        setpokemonData(singlePokemon);
    }
    setTimeout(fetchPokemon, 1500);
    ;
  }, [get])

if(loadingState !== loading.loaded)
    return( <h2>{loadingState}</h2> )

    return(
        <div className="singlePokemon">
            <img src={pokemonData.sprites.other.dream_world.front_default} alt="" />
            <h2>{pokemon.name}</h2>
            <ul className="stats">
            {pokemonData.stats.map(stat => {
                return(
                    <li><strong>{stat.stat.name}</strong> : {stat.base_stat}</li>
                )
            })}
            {pokemonData.types.map(type => {
                return(
                    <li>{type.type.name}</li>
                )
            })}
            </ul>
        </div>
    )
}

export default Pokemon;