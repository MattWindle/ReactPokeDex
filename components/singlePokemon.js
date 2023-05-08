const SinglePokemon = ({img, name, stats}) =>{
    return(
        <div className="singlePokemon">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <ul className="stats"> 
            {stats.map(stat => {
                return(
                    <li
                    key={stat.stat.name}
                    ><strong>{stat.stat.name}</strong> : {stat.base_stat}</li>
                )
            })}
            </ul>
        </div>
    )
}

export default SinglePokemon;