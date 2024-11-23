import { useNavigate } from "react-router"
import { useAppSelector } from "../../Store/Store"
import { useEffect, useState } from "react"
import { User } from "../../types/User"

type UserSectionProps = {
    text: string,
    images?: (string | undefined)[],
    friends?: number[]
}
const UserSection = ({ text, images, friends }: UserSectionProps) => {
    const navigate = useNavigate()
    const [myFriends, setMyFriends] = useState<User[]>([])
    const users = useAppSelector(state => state.User.users)
    useEffect(() => {
        if (friends)
            setMyFriends(friends?.map(friendId => {
                const friend = users.find(user => user.id == friendId)!
                return friend
            }))
    }, [])

    return (
        <div className="my-card">
            <div className="user-section-heading d-flex justify-content-between">
                <h4>{text.toUpperCase()}</h4>
                <span>show all {text}</span>
            </div>
            <div className="row mt-2">
                {
                    images &&
                    images.map((e, i) => {
                        return <div key={i}>
                            {
                                e != undefined &&
                                <div className="col-4 p-1 pointer">
                                    <div className="img">
                                        <img src={e} alt="" style={{ width: "100%", maxHeight: "130px", objectFit: "cover" }} />
                                    </div>
                                </div>
                            }
                        </div>
                    }
                    )
                }
                {
                    myFriends &&
                    myFriends.map(e => {
                        return <div key={e.id} className="col-4 p-1 pointer" onClick={() => navigate(`/user/${e.id}`)}>
                            <div className="img">
                                <img src={e.img} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
                            </div>
                            <div className="name mt-2 text-center" style={{ fontSize: "14px" }}>
                                <h6>{e.fname} {e.lname}</h6>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default UserSection
