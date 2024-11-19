import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { User } from "../../types/User"
import { faUserPlus } from "@fortawesome/free-solid-svg-icons"
import { useAppDispatch } from "../../Store/Store"
import { addFriend } from "../../Store/UserSlice"
type SuggestedProps = {
    user: User
}
const Suggested = ({ user }: SuggestedProps) => {
    const dispatch = useAppDispatch()
    return (
        <div>
            <div className="card-img-top" style={{ overflow: "hidden", height: "200px" }}>
                <img src={user.img} alt="" className="img-fluid h-100 w-100" style={{ objectFit: "cover" }} />
            </div>
            <div className="card-body">
                <div className="name mb-3">
                    <h5>{user.fname} {user.lname}</h5>
                </div>
                <div className="mutual-friends"></div>
                <div className="add-friend" onClick={() => {
                    dispatch(addFriend(user))
                }}>
                    <button className="btn btn-primary">
                        <FontAwesomeIcon icon={faUserPlus} className="me-1"></FontAwesomeIcon>
                        Add Friend
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Suggested
