import { faImages, faVideo } from "@fortawesome/free-solid-svg-icons"
import { faFaceLaugh } from "@fortawesome/free-regular-svg-icons"
import person from "../../../img/picture.jpg"
import "./post.css"
import PostType from "./PostType"
import PostDetails from "./PostDetails"
import { useState } from "react"

const CreatePost = () => {
    const icons = [faVideo, faImages, faFaceLaugh]
    const types = ["Live Video", "Photo/Image", "Feeling/Activity"]
    const colors = ["#f02849", "#45bd62", "#f7b928"]
    const [visible, setVisible] = useState(false)
    const handleFormChild = (e: boolean) => {
        setVisible(e)
    }
    return (
        <div className="my-card">
            <div className="d-flex gap-2">
                <div className="img">
                    <img src={person} alt="" className="img-fluid post-img rounded-circle" />
                </div>
                <div className="post-text">
                    <p className="post-input" onClick={() => {
                        setVisible(true)
                    }}>Whats on your mind, Kamel ?</p>
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
            <PostDetails visible={visible} handleFromCild={handleFormChild} />
        </div>
    )
}

export default CreatePost
