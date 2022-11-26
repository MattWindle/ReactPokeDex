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
    return( 
        <div className="loadingImg" >
            <img src={'./loading.gif'} alt="" />
        </div>
     )

    return(
        <div className="singlePokemon">
            {console.log(pokemonData)}
            <img src={pokemonData.sprites.other.dream_world.front_default} alt="" />
            <h2>#{pokemonData.id} {pokemon.name}</h2>
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