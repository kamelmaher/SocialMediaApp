import CreatePost from "../CreatePost/CreatePost"
import "./homepage.css"
import Post from "../Post/Post"
import StoryContainer from "../StoryComponent/StoryContainer"
const Home = () => {
    return (
        <div className="homepage">
            <div>
                <CreatePost />
            </div>
            <div className="mt-3">
                <StoryContainer />
            </div>
            <div>
                <Post />
            </div>
            <div>
                <Post />
            </div>
            <div>
                <Post />
            </div>
            <div>
                <Post />
            </div>
            <div>
                <Post />
            </div>
            <div>
                <Post />
            </div>
            <div>
                <Post />
            </div>
        </div>
    )
}

export default Home
