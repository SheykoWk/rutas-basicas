import { Link, useNavigate, Outlet } from "react-router-dom"

const Menu = () => {

    const navigate = useNavigate()

    return(
        <div>
            <div>
                <Link to='/'>Home</Link>
                <br/>
                <Link to='/about' >About</Link>
                <br/>
                <Link to='/blog' >Blog</Link>
                <br/>
                <Link to='/contact' >Contact</Link>
                <br/>
                <Link to='/login' >Login</Link>
                <br/>
                <Link to='/redirect' >Redirect</Link>
                <br/>
                <Link to='/pokemons' >Pokemons</Link>
                <br/>
                <button onClick={() => navigate(-1) } >Regresar</button>
                <button onClick={() => navigate(+1) } >Avanzar</button>
            </div>
        </div>
    )
}

export default Menu