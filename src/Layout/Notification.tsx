// import { useNavigate } from "react-router"
import UserImg from "../components/UserPage/UserImg"
import { Notify } from "../types/Notification"
import { useAppDispatch, useAppSelector } from "../Store/Store"
import { readNotify } from "../Store/UserSlice"
type NotificationProps = {
    notification: Notify,
}
const Notification = ({ notification }: NotificationProps) => {
    // const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const users = useAppSelector(state => state.User.users)
    const myUser = users.filter(e => e.id == notification.userId)[0]
    return (
        <li className="notification d-flex gap-2 align-items-center pt-2 pointer"
            onClick={() => {
                // navigate(`/${notification.type == "request" ? "requests" : "post"}`)
                dispatch(readNotify(notification))
            }
            }>
            <UserImg myUser={myUser} style={{ width: "40px", height: "40px" }} />
            <div className="notification-content">
                <p style={{ fontSize: "14px" }}> <span className="fw-semibold">{myUser.fname} {myUser.lname}</span> has
                    {notification.type == "request" ? " sent You a friend request" : notification.type == "like" ? " liked your post" : " commented on your post"}
                </p>
            </div>
        </li >
    )
}

export default Notification
