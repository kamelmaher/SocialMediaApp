import { faImages, faVideo } from "@fortawesome/free-solid-svg-icons"
import { faFaceLaugh } from "@fortawesome/free-regular-svg-icons"
import "./post.css"
import PostType from "./PostType"
import PostDetails from "./PostDetails"
import { useState } from "react"
import UserImg from "../UserPage/UserImg"
import Adding from "../Adding"
import { useAppSelector } from "../../Store/Store"

const CreatePost = () => {
    const icons = [faVideo, faImages, faFaceLaugh]
    const types = ["Live Video", "Photo/Image", "Feeling/Activity"]
    const colors = ["#f02849", "#45bd62", "#f7b928"]
    const [isVisible, setIsVisible] = useState(false)

    const loginnedUser = useAppSelector(state => state.User.loginnedUser)

    const handleFormChild = (e: boolean) => {
        setIsVisible(e)
    }
    return (
        <div className="my-card">
            <div className="d-flex gap-2">
                <UserImg className="post-img" />
                <div className="post-text">
                    <p className="post-input" onClick={() => {
                        setIsVisible(true)
                    }}>Whats on your mind, {loginnedUser.fname} ?</p>
                </div>
            </div>
            <hr className="mt-2" />
            <div className="row">
                {
                    types.map((e, i) => {
                        return <PostType key={e} postType={e} icon={icons[i]} color={colors[i]} />
                    })
                }
            </div>
            <Adding visible={isVisible} handleFromCild={handleFormChild} text="Create Post">
                <PostDetails handleFromChild={handleFormChild} />
            </Adding>
        </div>
    )
}

export default CreatePost
