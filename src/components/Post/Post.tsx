import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./post.css"
import { NavLink } from "react-router-dom"
import { faEarthAmerica, faEllipsis, faXmark, faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import { faComment as messageIcon, faShareSquare as shareIcon, faThumbsUp as LikeButton } from "@fortawesome/free-regular-svg-icons"
import ReactType from "./ReactType"
import { ChangeEvent, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../Store/Store"
import { PostType } from "../../types/Post"
import { comment, likePost } from "../../Store/PostSlice"
import LikeIcon from "../../Icons/LikeIcon"
import LoveIcon from "../../Icons/LoveIcon"
import LaughIcon from "../../Icons/LaughIcon"
import SadIcon from "../../Icons/SadIcon"
import CommentsList from "./CommentsList"
import Comment from "./Comment"
import UserImg from "../UserPage/UserImg"
import { notify } from "../../Store/UserSlice"
type PostProps = {
    post: PostType
}
const Post = ({ post }: PostProps) => {

    const dispatch = useAppDispatch()
    const loginnedUser = useAppSelector(state => state.User.loginnedUser)
    const [deletePost, setDeletePost] = useState(false);

    let isLiked = false

    post.interactions.likes.map(e => {
        if (e.userId == loginnedUser.id) {
            isLiked = true
        }
    })

    const interacts = [{ title: "like", icon: isLiked ? faThumbsUp : LikeButton }
        , { title: "comment", icon: messageIcon }
        , { title: "Share", icon: shareIcon }
    ]

    const [isComment, setIsComment] = useState(false)
    const [commentText, setCommentText] = useState("")
    const [showComments, setShowComments] = useState(false)

    const getCommentText = (e: ChangeEvent<HTMLInputElement>) => {
        setCommentText(e.target.value)
    }

    const sendComment = () => {
        dispatch(notify({ type: "comment", userId: post.user.id, id: Math.floor(Math.random() * 1000) + 1, hasRead: false, post: post }))
        dispatch(comment({ id: post.id, userId: loginnedUser.id, text: commentText, postId: post.id }))
        setIsComment(false)
    }

    let x = -5
    return (
        <div className="my-card post">
            {
                !deletePost ?
                    <>
                        <div className="post-head d-flex gap-2">
                            <UserImg style={{ flex: "0 0 auto", width: '45px', height: "45px" }} className="img-fluid" myUser={post.user} />
                            <div className="person-details d-flex justify-content-between">
                                <div className="name">
                                    <NavLink className="mb-0" to={`/user/${post.user.id}`}>{post.user.fname} {post.user.lname}</NavLink>
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

                        <div className="post-text mt-2 p-2 ps-0">
                            <pre style={{ fontFamily: "inherit", color: "#080809" }} className="mb-0">
                                {
                                    `${post.text}`
                                }
                            </pre>
                        </div>

                        {
                            post.imgPath != "" &&
                            <div className="post-img w-100">
                                <img src={post.imgPath} alt="post-img" loading="lazy" style={{ maxHeight: "400px", width: "100%" }} />
                            </div>
                        }

                        <div className="post-details mt-1 d-flex justify-content-between">
                            <div className="reatcions d-flex align-items-center">
                                {
                                    post.interactions.likes.length > 0 &&
                                    <>
                                        {
                                            interacts.map((e, id) => {
                                                let found = false
                                                x += 5
                                                console.log(e.title)
                                                post.interactions.likes.map(like => {
                                                    if (e.title == like.name) found = true
                                                })
                                                if (found)
                                                    return <span key={id} style={{
                                                        transform: `translateX(-${x}px)`
                                                    }}>

                                                        {/* {e.icon} */}
                                                        {e.title == "like" ? <LikeIcon /> : e.title == "love" ? <LoveIcon /> : e.title == "sad" ? <SadIcon /> : <LaughIcon />}
                                                    </span>
                                            })
                                        }
                                    </>
                                }
                                <span className="ms-1 reaction-count">{post.interactions.likes.length} Like{post.interactions.likes.length > 1 ? "s" : ""}</span>
                            </div>
                            <div>
                                <span
                                    className="me-1 reaction-count"
                                    onClick={() => setShowComments(!showComments)}
                                >{post.interactions.comments.length} comments</span>
                                <span>100 shares</span>
                            </div>
                        </div>

                        <div className="post-interacts d-flex mt-2">
                            {
                                interacts.map((e) => {
                                    return <ReactType title={e.title} icon={e.icon} key={e.title} handleClick={() => {
                                        if (e.title == "Like") {

                                            // Like Post 
                                            dispatch(likePost({ id: post.id, userId: loginnedUser.id, postId: post.id }))
                                            dispatch(notify({ type: "like", userId: post.user.id, id: Math.floor(Math.random() * 1000) + 1, hasRead: false, post: post }))
                                        } else if (e.title == "comment") {
                                            setIsComment(!isComment)
                                        }
                                    }} />
                                })
                            }
                        </div>

                        {
                            // Add Comment
                            isComment &&
                            <Comment addComment={true} getCommentText={getCommentText} sendComment={sendComment} />
                        }
                        {
                            // Comment List 
                            showComments &&
                            <div className="comments">
                                <CommentsList post={post} />
                            </div>
                        }
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
