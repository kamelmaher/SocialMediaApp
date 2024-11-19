import TopBar from "../../Layout/TopBar"
import "./user-page.css"
import CreatePost from "../CreatePost/CreatePost"
import { faHeart, faHome, faPlusCircle } from "@fortawesome/free-solid-svg-icons"
import AboutItem from "./AboutItem"
import UserSection from "./UserSection"
import PostContainer from "../Post/PostContainer"
import { useAppDispatch, useAppSelector } from "../../Store/Store"
import { useEffect, useRef, useState } from "react"
import { getUsers, updateUser } from "../../Store/UserSlice"
import { getPosts, updatePosts } from "../../Store/PostSlice"
import UserImg from "./UserImg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Adding from "../Adding"
import { User as UserType } from "../../types/User"
import { useParams } from "react-router"
const User = () => {
    const [newImg, setNewImg] = useState("")

    const { userId } = useParams()

    const dispatch = useAppDispatch()

    const users = useAppSelector(state => state.User.users)
    const user = users.filter(e => e.id == +userId!)[0]
    const loginnedUser = useAppSelector(state => state.User.loginnedUser)

    const posts = useAppSelector(state => state.Post.posts)
    const userPosts = posts.filter(e => e.user.id == user.id)
    const images = userPosts.map(e => e.imgPath)

    const abouts = [{ text: "Lives in Gaza", icon: faHome }, { text: "Single", icon: faHeart }]

    const [isVisible, setIsVisible] = useState(false)

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
                setNewImg(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFormChild = (e: boolean) => {
        setIsVisible(e)
    }
    const changePhoto = () => {
        const userUpdated: UserType = { ...user, img: newImg }
        dispatch(updateUser(userUpdated))
        dispatch(updatePosts(userPosts))
        setIsVisible(false)
        setNewImg("")
    }

    useEffect(() => {
        dispatch(getPosts())
        dispatch(getUsers())
        scrollTo(0, 0)
    }, [])

    return (
        <div>
            {
                isVisible &&
                <Adding visible={isVisible} handleFromCild={handleFormChild} text="Add Image">
                    <div className="text-center">
                        <form onSubmit={e => e.preventDefault()}>
                            <button className="btn btn-primary fs-6" onClick={handleIconClick}>
                                <input type="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    className="file-input"
                                    onChange={(handleFileChange)}
                                />
                                upload photo</button>
                            {
                                newImg != "" &&
                                <div className="selected-img">
                                    <span>Selected Img:</span>
                                    <div>
                                        <img src={newImg} alt="" className="img-fluid" />
                                    </div>
                                </div>
                            }
                            <div className="mt-2"><button className="btn btn-primary" onClick={() => {
                                changePhoto()
                            }}>Add Imgae</button></div>
                        </form>
                    </div>

                    <div>
                        <span>Suggested Photos</span>
                        <hr />
                        <div className="row mt-2">
                            {
                                images.map((e, i) => <div key={i} className="col-md-3 p-1 pointer" onClick={() => setNewImg(e)}>
                                    <img src={e} alt="" className="img-fluid" />
                                </div>)
                            }
                        </div>
                    </div>
                </Adding>
            }
            <TopBar />
            {
                user &&
                <div className="user-page">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10 ">

                            {/* Main Div */}
                            <div className="bg-white text-center text-lg-start">
                                <div className="main-img">
                                    <img src={user.img} alt="" className="rounded" style={{ height: "350px", width: "100%", objectFit: "cover" }} />
                                </div>
                                <div className="my-card mt-0">
                                    <div className="user-details row align-items-center bg-white">
                                        <div className="col-lg-2" >
                                            <div style={{ position: "relative", width: "fit-content", margin: "auto" }}>
                                                <FontAwesomeIcon icon={faPlusCircle} className="add-img pointer" onClick={() => {
                                                    setIsVisible(true)
                                                }}></FontAwesomeIcon>
                                                <UserImg style={{ width: '100px', height: "100px" }} myUser={user} />
                                            </div>
                                        </div>
                                        <div className="name col-lg-5 mt-2">
                                            <h2>{user.fname} {user.lname}</h2>
                                            <span>Friends Count</span>
                                        </div>
                                        <div className="col-lg-5 mt-2">
                                            <div className="d-flex user-options gap-3 justify-content-center justify-content-lg-end">
                                                <button className="btn btn-primary">Add To Story</button>
                                                <button className="btn btn-secondary">Edit Profile</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-between">
                                <div className="col-lg-5 p-2">
                                    <div className="my-card about">
                                        <h3 className="fw-semibold">About</h3>
                                        <div>
                                            <ul className="p-0">
                                                {
                                                    abouts.map(e => <AboutItem key={e.text} text={e.text} icon={e.icon} />)
                                                }
                                            </ul>
                                            <button className="btn btn-secondary w-100">Edit Details</button>
                                        </div>
                                    </div>

                                    <UserSection text="images" data={images} />

                                    <UserSection text="friends" />
                                </div>

                                <div className="col-lg-7 p-2">
                                    {
                                        user.id == loginnedUser.id &&
                                        <CreatePost />
                                    }

                                    <div className="my-card d-flex justify-content-between">
                                        <h4>Posts</h4>
                                        <button className="btn btn-secondary">Filters</button>
                                    </div>
                                    <PostContainer posts={userPosts} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default User
