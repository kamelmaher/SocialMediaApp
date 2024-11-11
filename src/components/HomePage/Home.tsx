import CreatePost from "./CreatePost/CreatePost"
import "./homepage.css"
import StoryContainer from "./StoryComponent/StoryContainer"
const Home = () => {
    return (
        <div className="homepage">
            <div>
                <CreatePost />
            </div>
            <div className="mt-3">
                <StoryContainer />
            </div>
        </div>
    )   
}

export default Home
