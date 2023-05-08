import { useState, useEffect } from "react";
import loading from "../helpers/loading";
import useGetRequest from "../hooks/useGetRequest";
import SinglePokemon from "./SinglePokemon";
import { motion, stagger } from "framer-motion"


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
            <h2>Loading</h2>
        </div>
     )

    return(
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5,delay: 2  }}
        >
        <SinglePokemon 
            key={pokemonData.id}
            id={pokemonData.id}
            img={pokemonData.sprites.other.dream_world.front_default}
            name={pokemon.name}
            stats={pokemonData.stats}
            type={pokemonData.types}

        />
        </motion.div>

    )
}

export default Pokemon;