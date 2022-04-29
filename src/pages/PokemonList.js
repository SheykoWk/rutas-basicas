import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import PokemonItem from "../components/PokemonItem"
import getAllPokemons from "../services/getAllPokemons"

const PokemonList = () => {

    const [pokeArray, setPokeArray] = useState([])

    useEffect(() => {
        getAllPokemons()
            .then(res => {
                setPokeArray(res.data.results)
            })
    }, [])

    return (
        <div>
            {pokeArray.map((item) => <PokemonItem pokeObj={item} key={item.url} /> )}
        </div>
    )
}

export default PokemonList