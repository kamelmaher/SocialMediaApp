import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import person from "../../../img/picture.jpg"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
type AccpuntProps = {
    isActive: boolean
}
const Account = ({ isActive }: AccpuntProps) => {
    return (
        <div className="card account-card" style={{ overflow: "hidden", background: "transparent" }}>
            <div className="card-img-top d-flex justify-content-center align-items-center" style={{ height: "150px" }}>
                {
                    !isActive ?
                        <div className="add-account pointer">
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                        :
                        <img src={person} alt="" className="img-fluid h-100 w-100" />
                }
            </div>
            <div className="card-body text-center p-2 bg-white">
                <p style={{ color: isActive ? "black" : "var(--main-color)" }}>{isActive ? "Kamel" : "Add Account"}</p>
            </div>
        </div>
    )
}

export default Account
