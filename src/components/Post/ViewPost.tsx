import { useParams } from "react-router"
import { useAppSelector } from "../../Store/Store"
import Post from "./Post";

const ViewPost = () => {

    const { postId } = useParams()
    const posts = useAppSelector(state => state.Post.posts);
    const post = posts.find(e => e.id == +postId!)
    return (
        <div className="w-lg-75 m-auto mt-4">
            {
                post &&
                <Post post={post!} showComment={true} />
            }
        </div>
    )
}

export default ViewPost
