import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import person from "../../../../img/picture.jpg"
import "./post.css"
import { NavLink } from "react-router-dom"
import { faEarthAmerica, faEllipsis, faHeart, faLink, faXmark } from "@fortawesome/free-solid-svg-icons"
import { faComment as messageIcon, faHeart as likeIcon, faShareSquare as shareIcon } from "@fortawesome/free-regular-svg-icons"
import ReactType from "./ReactType"

const Post = () => {
    const interacts = [{ title: "Like", icon: likeIcon }
        , { title: "comment", icon: messageIcon }
        , { title: "Share", icon: shareIcon }
    ]
    return (
        <div className="my-card post">
            <div className="post-head d-flex gap-2">
                <div className="person-img">
                    <img src={person} alt="" className="img-fluid rounded-circle" style={{ width: "44px" }} />
                </div>
                <div className="person-details d-flex justify-content-between">
                    <div className="name">
                        <NavLink className="mb-0" to={"/user/1"}>Kamel Maher</NavLink>
                        <div>
                            <span className="pe-1">3h</span>
                            <FontAwesomeIcon icon={faEarthAmerica}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className="options">
                        <span>
                            <FontAwesomeIcon icon={faEllipsis} />
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faXmark} />
                        </span>
                    </div>
                </div>
            </div>
            <div className="post-text mt-2 p-2">
                <pre style={{ fontFamily: "inherit" }} className="mb-0">
                    {
                        `Kamel Maher Abu Shawish`
                    }
                </pre>
            </div>
            <div className="post-img w-100">
                <img src={person} alt="post-img" className="img-fluid" />
            </div>
            <div className="post-details mt-1 d-flex justify-content-between">
                <div className="reatcions">
                    <span><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></span>
                    <span><FontAwesomeIcon icon={faLink}></FontAwesomeIcon></span>
                    <span>1.5k</span>
                </div>
                <div>
                    <span className="me-1">500 comments</span>
                    <span>100 shares</span>
                </div>
            </div>
            <div className="post-interacts d-flex mt-2">
                {
                    interacts.map(e => {
                        return <ReactType title={e.title} icon={e.icon} key={e.title} />
                    })
                }
            </div>
        </div>
    )
}

export default Post
