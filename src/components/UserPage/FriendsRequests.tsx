import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../Store/Store"
import { addFriend, deleteRequest } from "../../Store/UserSlice"
import { User } from "../../types/User"
import UserImg from "./UserImg"
import "./request.css"

const FriendsRequests = () => {
    const dispatch = useAppDispatch()
    const myUser = useAppSelector(state => state.User.loginnedUser)
    const users = useAppSelector(state => state.User.users)
    const requests = myUser.notifications.requests
    const myRequests = requests.map(reqeust => {
        const user = users.find(user => {
            if (reqeust.userId == user.id) return user
        })!
        return user
    })
    const [response, setRespnse] = useState<boolean | null>()
    const responseFriend = (user: User, response: boolean) => {
        if (response) dispatch(addFriend(user))
        dispatch(deleteRequest(user.id))
        setRespnse(response)
    }
    return (
        <>
            {
                myRequests.length > 0 &&
                <div className="my-card">
                    <p>Friends Requests</p>
                    <div className="requests mt-3 ">
                        {
                            myRequests.map(user => <div key={user.id} className="request d-flex mb-3">
                                <UserImg myUser={user}></UserImg>
                                <div className="details d-flex justify-content-between">
                                    <div>{user.fname} {user.lname}</div>
                                    {
                                        response == null ?
                                            <div>
                                                <button className="btn btn-primary me-2" onClick={() => responseFriend(user, true)}>Accept</button>
                                                <button className="btn btn-secondary" onClick={() => responseFriend(user, false)}>Decline</button>
                                            </div>
                                            :
                                            <button className={`btn btn-${response ? "success" : "danger"}`}>
                                                {response ? "Accepted" : "Rejected"}
                                            </button>
                                    }

                                </div>
                            </div>)
                        }
                    </div>
                </div>
            }

        </>
    )
}

export default FriendsRequests
