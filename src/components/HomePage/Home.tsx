import CreatePost from "./CreatePost/CreatePost"
import "./homepage.css"
import StoryContainer from "./StoryComponent/StoryContainer"
const Home = () => {
    return (
        <div className="homepage p-md-2">
            <div className="mb-3">
                <StoryContainer />
            </div>
            <div>
                <CreatePost />
            </div>
        </div>
    )
}

export default Home
