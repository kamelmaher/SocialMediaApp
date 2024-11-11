import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import logo from "../../img/icons/facebook.png"
import person from "../../img/picture.jpg"
import "./Layout.css"
import { faBell, faHouse, faTableCells, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { faCircleUser as faCircle } from "@fortawesome/free-regular-svg-icons"
import { useState } from "react"
import LayoutIcon from "./LayoutIcon"
import SearchComponent from "./SearchComponent"
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons"
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import AdPage from "../components/Ads/AdPage"
import ListContainer from "../components/List/ListContainer"
const Layout = () => {
    const [activePage, setActivePage] = useState(0)
    const pages = [faHouse, faUserGroup, faCircle]
    const icons = [faFacebookMessenger, faTableCells, faBell]
    const navigate = useNavigate();
    return (
        <div className="main-layout">
            <div className="row justify-content-between ps-3 pe-3 app-nav">
                <div className="col-3 d-flex gap-2 pb-2 logo">
                    <div>
                        <img src={logo} alt="" style={{
                            width: "40px"
                        }} />
                    </div>
                    <SearchComponent />
                </div>
                <div className="col-6 main-navbar d-none d-lg-block ">
                    <div className="row justify-content-center h-100">
                        {
                            pages.map((e, i) => {
                                return <div key={i} className={`col-md-3 icon ${activePage == i && "active"}`} onClick={() => {
                                    if (e == faHouse) navigate("/")
                                    setActivePage(i)
                                }} >
                                    <FontAwesomeIcon icon={e} />
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="col-9 col-sm-6 col-md-4 col-lg-3 row align-items-center justify-content-end text-end">
                    {
                        icons.map((e, i) => {
                            return <div key={i} className="col-2 me-2">
                                <LayoutIcon icon={e} />
                            </div>
                        })
                    }
                    <div className="col-2">
                        <div className="profile-img">
                            <NavLink to={`/user/1`}>
                                <img src={person} alt="" style={{
                                    width: "42px"
                                }} className="rounded-circle" />
                            </NavLink>
                        </div>
                    </div>
                    {/* <div className="menu">

                    </div> */}
                </div>
            </div>
            <div className="row justify-content-lg-between justify-content-center p-md-3 p-0 content">
                <div className="col-3 d-none d-lg-block sidebar">
                    <ListContainer />
                </div>
                <div className="col-12 col-lg-6 col-sm-9 d-flex justify-content-center align-items-start padding">
                    <div className=" ">
                        <Outlet />
                    </div>
                </div>
                <div className="col-3 d-none d-lg-block ">
                    <AdPage />
                </div>
            </div>
        </div>
    )
}

export default Layout
