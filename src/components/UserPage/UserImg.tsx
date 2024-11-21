import { NavLink } from "react-router-dom"
import { User } from "../../types/User"
type userImgProps = {
    style?: object,
    className?: string,
    myUser: User
}
const UserImg = ({ style, className, myUser }: userImgProps) => {
    return (
        <>
            {
                myUser &&
                <NavLink className="img" to={`/user/${myUser.id}`} >
                    <img src={myUser.img} className={`${className} rounded-circle`} loading="lazy" style={
                        !style ?
                            { width: "45px", height: "45px" }
                            :
                            style
                    }
                    />
                </NavLink>
            }
        </>

    )
}

export default UserImg
