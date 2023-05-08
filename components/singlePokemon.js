import { motion } from "framer-motion"

const SinglePokemon = ({img, name, stats, id, type}) =>{
    return(
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 + (id / 6)}}        
        >
                <div className="singlePokemon">
                    <img src={img} alt="" />
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
        </motion.div>
    )
}

export default SinglePokemon;