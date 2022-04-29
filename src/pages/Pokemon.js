import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getPokemonById from '../services/getPokemonById'

const Pokemon = () => {

    const {id} = useParams()

    const [pokeName, setPokeName] = useState('')

    useEffect(() => {
        if(id){
            getPokemonById(id)
                .then((res) => {
                    console.log(res.data)
                    setPokeName(res.data.name)
                })
        }
    }, [id])

    return (
        <div>
            pokemon: {pokeName}
        </div>
    )
}

export default Pokemon