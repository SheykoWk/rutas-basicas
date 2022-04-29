import { useNavigate } from "react-router-dom"

const Home = () => {

    const navigate = useNavigate()

    return(
        <div>
            <h1>
                Estamos en el Home
            </h1>
            <button onClick={() => navigate('/about')} >Iniciar Sesion</button>
        </div>
    )
}

export default Home