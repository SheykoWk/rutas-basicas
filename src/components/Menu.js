import { Link, useNavigate } from "react-router-dom"

const Menu = () => {

    const navigate = useNavigate()

    return(
        <div>
            <Link to='/'>Home</Link>
            <br/>
            <Link to='/about' >About</Link>
            <br/>
            <Link to='/login' >Login</Link>
            <br/>
            <Link to='/redirect' >Redirect</Link>
            <br/>
            <button onClick={() => navigate(-1) } >Regresar</button>
            <button onClick={() => navigate(+1) } >Avanzar</button>
        </div>
    )
}

export default Menu