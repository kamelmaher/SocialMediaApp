import { Navigate, Outlet } from "react-router"

const ProtectedRoute = () => {
    const user = JSON.parse(localStorage.getItem("loginnedUser")!)
    if (user == "No User")
        return <Navigate to={"/auth/login"}></Navigate>
    else
        return <Outlet />
}

export default ProtectedRoute
