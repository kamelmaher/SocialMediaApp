import CreatePost from "../CreatePost/CreatePost"
import "./homepage.css"
import StoryContainer from "../StoryComponent/StoryContainer"
import { useAppSelector } from "../../Store/Store"
import PostContainer from "../Post/PostContainer"
import SuggestedContainer from "../Suggested/SuggestedContainer"
const Home = () => {
    const posts = useAppSelector(State => State.Post.posts)
    return (
        <div className="homepage m-auto">
            <div>
                <CreatePost />
            </div>
            <div className="mt-3">
                <StoryContainer />
            </div>
            <SuggestedContainer />
            <PostContainer posts={posts} />
        </div>
    )
}

export default Home
