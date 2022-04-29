import { Link } from "react-router-dom"

const Menu = () => {
    return(
        <div>
            <Link to='/'>Home</Link>
            <br/>
            <Link to='/about' >About</Link>
            <br/>
            <Link to='/login' >Login</Link>
            <br/>
            <Link to='/redirect' >Redirect</Link>
        </div>
    )
}

export default Menu