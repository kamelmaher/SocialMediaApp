import { useNavigate } from "react-router"
import ListItem from "./ListItem"
import "./list.css"
import { faBookmark, faCalendarCheck, faClockRotateLeft, faNewspaper, faStore, faTv, faUserGroup, faUsersRectangle } from "@fortawesome/free-solid-svg-icons"
import { useAppSelector } from "../../Store/Store"
import UserImg from "../UserPage/UserImg"

const ListContainer = () => {
    const listtitels = ["Friends", "Memories", "Saved", "Groups", "Video", "MarketPlace", "Feeds", "Events"]
    const listIcons = [faUserGroup, faClockRotateLeft, faBookmark, faUsersRectangle, faTv, faStore, faNewspaper, faCalendarCheck]
    const colors = ["#1a81f4", "#1a81f4", "#ba47c8", "#1a83f5", "#1a83f5", "#1a83f5", "#1a83f5", "#ed3958"]
    const navigate = useNavigate()
    const user = useAppSelector(state => state.User.loginnedUser)
    return (
        <div>
            <ul>
                <li className="d-flex list-item pointer" onClick={() => {
                    navigate(`/user/${user.id}`)
                }}>
                    <div className="profile">
                        <UserImg myUser={user} />
                    </div>
                    <div>
                        <p>{user.fname} {user.lname}</p>
                    </div>
                </li>
                {
                    listtitels.map((e, i) => {
                        return <ListItem title={e} icon={listIcons[i]} key={e} color={colors[i]} handleClick={() => {
                            navigate(`/list/${e}`)
                        }} />
                    })
                }
            </ul>
        </div>
    )
}

export default ListContainer
