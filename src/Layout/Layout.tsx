import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import logo from "../../img/icons/facebook.png"
import "./Layout.css"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const Layout = () => {
    return (
        <div className="main-layout">
            <div className="row">
                <div className="col-md-4 d-flex gap-2">
                    <div>
                        <img src={logo} alt="" style={{
                            width: "40px"
                        }} />
                    </div>
                    <div className="search d-flex gap-2">
                        <div className="search-icon">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                        <p className="search-text">Search Facebook</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout
