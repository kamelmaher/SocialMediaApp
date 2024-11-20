import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { User } from "../../types/User"
import { faUserPlus, faUserXmark } from "@fortawesome/free-solid-svg-icons"
import { useAppDispatch, useAppSelector } from "../../Store/Store"
import { notify } from "../../Store/UserSlice"
import { useState } from "react"

type SuggestedProps = {
    user: User
}

const Suggested = ({ user }: SuggestedProps) => {
    const dispatch = useAppDispatch();
    const loginnedUser = useAppSelector(state => state.User.loginnedUser);
    let isrequested = false
    user.notifications.requests.map(e => {
        if (e.userId == loginnedUser.id) {
            isrequested = true
        }
    })
    const [added, setAdded] = useState(isrequested);

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
                    setAdded(!added)
                    dispatch(notify({ id: Math.floor(Math.random() * 1000) + 1, userId: user.id, type: "request", hasRead: false }))

                }}>
                    <button className={`btn btn-${added ? "secondary" : "primary"}`}>
                        {
                            !added ?
                                <>
                                    <FontAwesomeIcon icon={faUserPlus} className="me-1"></FontAwesomeIcon>
                                    Add Friend
                                </>
                                :
                                <>
                                    <FontAwesomeIcon icon={faUserXmark} className="me-1"></FontAwesomeIcon>
                                    Cancel
                                </>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Suggested
