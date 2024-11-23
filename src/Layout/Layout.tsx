import "./Layout.css"
import { Outlet } from "react-router-dom"
import ListContainer from "../components/List/ListContainer"
import TopBar from "./TopBar"
const Layout = () => {
    return (
        <div className="main-layout">
            <TopBar />
            <div className="row justify-content-lg-start justify-content-center p-md-3 p-0 content">
                <div className=" col-3 d-none d-lg-block"></div>
                <div className="col-3 d-none d-lg-block sidebar">
                    <ListContainer />
                </div>
                <div className="col-12 col-lg-6 col-sm-9 d-flex justify-content-center align-items-start">
                    <div className="w-100">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout
