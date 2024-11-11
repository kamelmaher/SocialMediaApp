import logo from "../../../../img/icons/facebook.png"
import PostType from "./PostType"

const CreatePost = () => {
    const types = ["Live Video", "Photo/Image", "Feeling/Activity"]
    return (
        <div className="p-2 my-card">
            <div className="d-flex gap-2">
                <div className="img">
                    <img src={logo} alt="" className="img-fluid post-img" />
                </div>
                <div className="post-text">
                    <input type="text" placeholder="Whats on your mind, Kamel?" className="post-input form-control" />
                </div>
            </div>
            <hr className="mt-2 mb-1" />
            <div className="row">
                {
                    types.map(e => {
                        return <PostType key={e} postType={e} />
                    })
                }
            </div>
        </div>
    )
}

export default CreatePost
