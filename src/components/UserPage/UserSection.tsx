import { useNavigate } from "react-router"
import { User } from "../../types/User"

type UserSectionProps = {
    text: string,
    images?: string[],
    friends?: User[]
}
const UserSection = ({ text, images, friends }: UserSectionProps) => {
    const navigate = useNavigate()
    return (
        <div className="my-card">
            <div className="user-section-heading d-flex justify-content-between">
                <h4>{text.toUpperCase()}</h4>
                <span>show all {text}</span>
            </div>
            <div className="row mt-2">
                {
                    images &&
                    images.map((e, i) => <div key={i} className="col-4 p-1 pointer">
                        <div className="img">
                            <img src={e} alt="" style={{ width: "100%", maxHeight: "130px", objectFit: "cover" }} />
                        </div>
                    </div>)
                }
                {
                    friends &&
                    friends.map(e => {
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
