import { motion } from "framer-motion"

const SinglePokemon = ({img, name, stats, id, type}) =>{
    return(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: (id / 10)}}        
        >
                <div className="singlePokemon">
                    <img src={img} alt="" />
                    <div className="singlePokemonContent">
                        <h2>#{id} - {name}</h2>
                        <ul className="stats"> 
                        {stats.map(stat => {
                            return(
                                <li
                                key={stat.stat.name}
                                ><strong>{stat.stat.name}</strong> : {stat.base_stat}</li>
                            )
                        })}
                        {type.map(type => {
                            return(
                                <li>{type.type.name}</li>
                            )
                        })}
                        </ul>
                    </div>

                </div>
        </motion.div>
    )
}

export default SinglePokemon;