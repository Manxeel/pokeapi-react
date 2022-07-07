import './Pokemon.css'
const Pokemon = ({ pokemon }) => {
    return (
    <div className="pokemon-card">
        <h1 className="pokemon-title">#{pokemon.id} {pokemon.name}</h1>
        <div className="pokemon-img-container">
            <img className="pokemon-img" src={pokemon.sprites.front_default} alt={pokemon.name}/>
        </div>
            <div className='pokemon-type'>
                {pokemon.types.map((pokemonTipo, index) => (
                    <div key={index}>
                        <p className={`pokemon-type-default ${pokemonTipo.type.name}`}>{pokemonTipo.type.name}</p>    
                    </div>
                ))}   
            </div>
    </div>
    )
}
export default Pokemon