import "./Layout.css"
import { Outlet } from "react-router-dom"
import AdPage from "../components/Ads/AdPage"
import ListContainer from "../components/List/ListContainer"
import TopBar from "./TopBar"
import { useEffect } from "react"
import { useAppDispatch } from "../Store/Store"
import { getPosts } from "../Store/PostSlice"
import { getLoginnedUser, getUsers } from "../Store/UserSlice"
const Layout = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getPosts())
        dispatch(getUsers())
        dispatch(getLoginnedUser())
    }, [])

    return (
        <div className="main-layout">
            <TopBar />
            <div className="row justify-content-lg-between justify-content-center p-md-3 p-0 content">
                <div className="col-3 d-none d-lg-block sidebar">
                    <ListContainer />
                </div>
                <div className="col-12 col-lg-6 col-sm-9 d-flex justify-content-center align-items-start padding">
                    <div className="w-100">
                        <Outlet />
                    </div>
                </div>
                <div className="col-2 d-none d-lg-block ">
                    <AdPage />
                </div>
            </div>
        </div>
    )
}

export default Layout
