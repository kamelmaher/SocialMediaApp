import { Outlet } from "react-router"
import { useAppDispatch } from "./Store/Store"
import { useEffect } from "react"
import { getLoginnedUser, getUsers } from "./Store/UserSlice"
import { getPosts } from "./Store/PostSlice"

const Loader = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getUsers())
        dispatch(getLoginnedUser())
        dispatch(getPosts())
    }, [])
    return (
        <Outlet />
    )
}

export default Loader
