import {  faImages, faVideo } from "@fortawesome/free-solid-svg-icons"
import { faFaceLaugh } from "@fortawesome/free-regular-svg-icons"
import person from "../../../../img/picture.jpg"
import "./post.css"
import PostType from "./PostType"

const CreatePost = () => {
    const icons = [faVideo , faImages , faFaceLaugh]
    const types = ["Live Video", "Photo/Image", "Feeling/Activity"]
    const colors = ["#f02849", "#45bd62", "#f7b928"]
    return (
        <div className="my-card">
            <div className="d-flex gap-2">
                <div className="img">
                    <img src={person} alt="" className="img-fluid post-img rounded-circle" />
                </div>
                <div className="post-text">
                    <input type="text" placeholder="Whats on your mind, Kamel?" className="post-input form-control" />
                </div>
            </div>
            <hr className="mt-2 mb-1" />
            <div className="row">
                {
                    types.map((e , i) => {
                        return <PostType key={e} postType={e} icon={icons[i]} color={colors[i]}/>
                    })
                }
            </div>
        </div>
    )
}

export default CreatePost
