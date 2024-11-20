import { faImage } from "@fortawesome/free-regular-svg-icons"
import { faUserTag } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useRef, useState } from "react"
import { PostType } from "../../types/Post"
import "./post.css"
import { useAppDispatch, useAppSelector } from "../../Store/Store"
import { createPost } from "../../Store/PostSlice"
import { getLoginnedUser } from "../../Store/UserSlice"
import UserImg from "../UserPage/UserImg"
type PostDetailsProps = {
    handleFromChild: (e: boolean) => void
}
const PostDetails = ({ handleFromChild }: PostDetailsProps) => {
    const dispatch = useAppDispatch()
    const loginnedUser = useAppSelector(state => state.User.loginnedUser)
    useEffect(() => {
        dispatch(getLoginnedUser())
    }, [])
    const [newPost, setNewPost] = useState<PostType>({
        id: 0,
        text: "",
        user: loginnedUser,
        mentions: [],
        imgPath: "",
        interactions: {
            likes: [],
            comments: []
        }
    })
    const handleVisible = (isVisible: boolean) => {
        handleFromChild(isVisible)
    }

    // Handle The Image Input 
    const fileInputRef = useRef<HTMLInputElement>(null);
    const handleIconClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        // Get Selected Image 
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setNewPost({ ...newPost, imgPath: e.target?.result as string });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <div className="d-flex gap-2 align-items-center">
                <UserImg myUser={loginnedUser} />
                <div>
                    <p className="name">
                        {loginnedUser.fname} {loginnedUser.lname}
                    </p>
                    <button className="btn btn-secondary">All</button>
                </div>
            </div>
            <div className="post-text-area mt-2">
                <form className="form">
                    <div>
                        <textarea className="w-100" placeholder="What are you thinking about ,Kamel ?" onChange={(e) => {
                            setNewPost({ ...newPost, text: e.target.value })
                        }}>
                        </textarea>
                    </div>
                </form>
            </div>
            <div className="mb-2 p-3">
                {
                    newPost.imgPath != "" &&
                    <img src={newPost.imgPath} alt="" style={{ width: "150px" }} />
                }
            </div>
            <div className="attachments d-flex p-3 justify-content-between">
                <div>Add To Your Post</div>
                <div className="attachment d-flex gap-2 align-items-center ">
                    <div className="me-2 img-picker p-relative">
                        <input type="file"
                            accept="image/*"
                            className="file-input "
                            ref={fileInputRef}
                            onChange={handleFileChange}
                        />
                        <FontAwesomeIcon icon={faImage} onClick={handleIconClick}></FontAwesomeIcon>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faUserTag}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <button className={`w-100 text-center btn btn-${(newPost.text != "" || newPost.imgPath != "") ? "primary" : "secondary"} fs-6`} disabled={newPost.text == "" && newPost.imgPath == ""}
                    onClick={() => {
                        dispatch(createPost({ ...newPost, user: loginnedUser, id: Math.floor(Math.random() * 1001) }))
                        handleVisible(false)
                    }}
                >Next</button>
            </div>
        </>

    )
}

export default PostDetails
