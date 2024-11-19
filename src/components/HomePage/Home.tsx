import CreatePost from "../CreatePost/CreatePost"
import "./homepage.css"
import StoryContainer from "../StoryComponent/StoryContainer"
import { useAppSelector } from "../../Store/Store"
import PostContainer from "../Post/PostContainer"
const Home = () => {
    const posts = useAppSelector(State => State.Post.posts)
    return (
        <div className="homepage">
            <div>
                <CreatePost />
            </div>
            <div className="mt-3">
                <StoryContainer />
            </div>
            <PostContainer posts={posts} />
        </div>
    )
}

export default Home
