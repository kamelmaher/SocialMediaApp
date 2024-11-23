import { Navigate, Outlet } from "react-router"

const ProtectedRoute = () => {
    const user = localStorage.getItem("loginnedUser")
    if (!user)
        return <Navigate to={"/auth/login"}></Navigate>
    else
        return <Outlet />
}

export default ProtectedRoute
