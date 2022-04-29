import { Link } from "react-router-dom"

const PokemonItem = ({pokeObj}) => {

    const url = pokeObj.url;
    const arr = url.split('/')
    const id = arr[arr.length - 2]

    return(
        <div>
            <Link to={`/pokemons/${id}`} >
                <h1>{pokeObj.name}</h1>
            </Link>
        </div>
    )
}

export default PokemonItem