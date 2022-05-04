import { Navigate, Outlet } from "react-router-dom"

const ProtectedUrl = ({ isUser }) => {
    if(isUser){
        return <Outlet />
    } else {
        return <Navigate to='/login' />
    }
}

export default ProtectedUrl