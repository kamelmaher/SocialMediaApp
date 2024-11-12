import CreatePost from "../CreatePost/CreatePost"
import "./homepage.css"
import Post from "../Post/Post"
import StoryContainer from "../StoryComponent/StoryContainer"
import { useAppSelector } from "../../Store/Store"
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
            {
                posts.map(e => {
                    return <Post key={e.id} id={e.id} isLiked={e.isLiked} />
                })
            }
        </div>
    )
}

export default Home
