import { Link } from "react-router-dom"

const PokemonItem = ({pokeObj}) => {

    console.log(pokeObj)

    const url = pokeObj.url;
    

    return(
        <div>
            <Link to={`/pokemons/${pokeObj.id}`} >
                <h1>{pokeObj.name}</h1>
            </Link>
        </div>
    )
}

export default PokemonItem