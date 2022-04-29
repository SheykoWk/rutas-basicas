import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getPokemonById from '../services/getPokemonById'

const Pokemon = () => {

    const {id} = useParams()

    useEffect(() => {
        if(id){
            getPokemonById(id)
                .then((res) => {
                    console.log(res.data)
                })
        }
    }, [id])

    return (
        <div>
            pokemon: {id}
        </div>
    )
}

export default Pokemon