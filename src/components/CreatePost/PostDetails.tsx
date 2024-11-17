import { faImage } from "@fortawesome/free-regular-svg-icons"
import { faXmark, faUserTag } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import person from "../../../img/picture.jpg"
import { useEffect, useRef, useState } from "react"
import { PostType } from "../../types/Post"
import "./post.css"
import { useAppDispatch } from "../../Store/Store"
import { createPost } from "../../Store/PostSlice"
type PostDetailsProps = {
    visible: boolean,
    handleFromCild: (e: boolean) => void
}
const PostDetails = ({ visible, handleFromCild }: PostDetailsProps) => {
    const dispatch = useAppDispatch()
    const [newPost, setNewPost] = useState<PostType>({
        id: 0,
        text: "",
        user: {
            id: 0,
            name: "User 1"
        },
        mentions: [],
        imgPath: "",
        interactions: {
            likes: [],
            comments: []
        }
    })
    const [isVisible, setIsVisible] = useState(visible);
    const handleVisible = (isVisible: boolean) => {
        setIsVisible(isVisible)
        handleFromCild(isVisible)
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

    // Handle The Component 
    const componentRef = useRef<HTMLDivElement>(null);
    const handleClickOutside = (event: MouseEvent) => {
        if (componentRef.current && !componentRef.current.contains(event.target as Node)) {
            setIsVisible(false);
            handleFromCild(false)
        }
    };
    useEffect(() => {
        setIsVisible(visible)
    }, [visible])
    useEffect(() => {
        if (isVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isVisible]);
    return (
        <>
            {
                isVisible &&
                <div className="post-details-container" >
                    <div ref={componentRef} className="post-details-box">
                        <div className="my-card">
                            <div className="head d-flex pb-2">
                                <p>
                                    Create Post
                                </p>
                                <div className="close pointer" onClick={() => {
                                    setIsVisible(false)
                                    handleFromCild(false)
                                }}>
                                    <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                                </div>
                            </div>
                            <hr />
                            <div className="p-2">
                                <div className="d-flex gap-2">
                                    <div>
                                        <img src={person} alt="" className="img-fluid rounded-circle" style={{ width: "38px" }} />
                                    </div>
                                    <div>
                                        <p className="name">
                                            Kamel Maher
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
                                            dispatch(createPost({ ...newPost, id: Math.floor(Math.random() * 1001) }))
                                            handleVisible(false)
                                        }}
                                    >Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

export default PostDetails
