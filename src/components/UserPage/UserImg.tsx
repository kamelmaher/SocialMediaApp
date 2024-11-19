import { NavLink } from "react-router-dom"
import { useAppSelector } from "../../Store/Store"
import { PostType } from "../../types/Post"
type userImgProps = {
    style?: object,
    className?: string,
    post?: PostType
}
const UserImg = ({ style, className, post }: userImgProps) => {
    const user = useAppSelector(state => state.User.loginnedUser)
    const img = post?.user.img
    return (
        <NavLink className="img" to={`/user/${post?.user.fname}`} >
            <img src={post ? img : user.img} alt="" className={`${className} rounded-circle`} style={
                !style ?
                    { width: "45px", height: "45px" }
                    :
                    style
            }
            />
        </NavLink>
    )
}

export default UserImg
