import { useNavigate } from "react-router"
import UserImg from "../components/UserPage/UserImg"
import { User } from "../types/User"
type SearchResultProps = {
    user: User
}
const SearchResult = ({ user }: SearchResultProps) => {
    const navigate = useNavigate()
    return (
        <div className="d-flex hover p-2" onClick={() => navigate(`/user/${user.id}`)}>
            <UserImg myUser={user} style={{ width: "30px", height: "30px" }} />
            <div className="ms-2">
                <p>{user.fname} {user.lname}</p>
            </div>
        </div>
    )
}

export default SearchResult
