
const Login = ({ handlerUser }) => {

    return(
        <div>
            <h1>
                Estamos en el Login
            </h1>
            <button onClick={() => handlerUser(true)}>Iniciar Sesion</button>
        </div>
    )
}

export default Login