import { faBell, faHouse, faTableCells, faUserCircle, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"
import LayoutIcon from "./LayoutIcon"
import SearchComponent from "./SearchComponent"
import logo from "../../img/icons/facebook.png"
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons"
import { useState } from "react"
import UserImg from "../components/UserPage/UserImg"
import { useAppSelector } from "../Store/Store"
import Menu from "./Menu"

const TopBar = () => {
    const [visible, setVisible] = useState(false)
    const handleFormChild = (e: boolean) => {
        setVisible(e)
    }
    const icons = [faFacebookMessenger, faTableCells, faBell]
    const pages = [faHouse, faUserGroup, faUserCircle]

    const [activePage, setActivePage] = useState(0)
    const navigate = useNavigate()
    const user = useAppSelector(state => state.User.loginnedUser)
    const counter = user.notifications.likes.filter(e => e.hasRead == false).length + user.notifications.comments.filter(e => e.hasRead == false).length + user.notifications.requests.filter(e => e.hasRead == false).length;

    return (
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
            <div className="col-9 col-sm-6 col-md-4 col-lg-3 row align-items-center justify-content-end text-end" style={{ position: "relative" }}>
                {
                    icons.map((e, i) => {
                        return <div key={i} className="col-2 me-2" style={{ position: "relative" }} onClick={() => {
                            if (e == faBell) {
                                setVisible(!visible)
                            }
                        }}>
                            {
                                e == faBell &&
                                counter > 0 &&
                                <div className="notidications-counter">
                                    {counter}
                                </div>
                            }
                            <LayoutIcon icon={e} />
                        </div>
                    })
                }
                <div className="col-2">
                    <div className="profile-img">
                        <UserImg myUser={user} />
                    </div>
                </div>
                <Menu visible={visible} handleFromChild={handleFormChild} />
            </div>
        </div>
    )
}

export default TopBar
