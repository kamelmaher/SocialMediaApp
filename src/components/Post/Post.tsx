import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import person from "../../../img/picture.jpg"
import "./post.css"
import { NavLink } from "react-router-dom"
import { faEarthAmerica, faEllipsis, faHeart, faLink, faXmark } from "@fortawesome/free-solid-svg-icons"
import { faComment as messageIcon, faHeart as likeIcon, faShareSquare as shareIcon } from "@fortawesome/free-regular-svg-icons"
import ReactType from "./ReactType"
import { useState } from "react"

const Post = () => {
    const interacts = [{ title: "Like", icon: likeIcon }
        , { title: "comment", icon: messageIcon }
        , { title: "Share", icon: shareIcon }
    ]
    console.log("rendered")
    const [deletePost, setDeletePost] = useState(false);
    return (
        <div className="my-card post">
            {
                !deletePost ?
                    <>
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
                                    <span onClick={() => {
                                        setDeletePost(true)
                                    }}>
                                        <FontAwesomeIcon icon={faXmark} />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="post-text mt-2 p-2">
                            <pre style={{ fontFamily: "inherit", color: "#080809" }} className="mb-0">
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
                    </>
                    :
                    <div>
                        <h5>Delete Post ?</h5>
                        <button className="btn btn-primary me-3" onClick={() => { }}
                        >Delete</button>
                        <button className="btn btn-primary" onClick={() => {
                            setDeletePost(false)
                        }}>No</button>
                    </div >
            }
        </div >
    )
}

export default Post
