import CreatePost from "../CreatePost/CreatePost"
import "./homepage.css"
import Post from "../Post/Post"
import StoryContainer from "../StoryComponent/StoryContainer"
import { useAppDispatch, useAppSelector } from "../../Store/Store"
import { useEffect } from "react"
import { getPosts } from "../../Store/PostSlice"
const Home = () => {
    const posts = useAppSelector(State => State.Post.posts)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getPosts())
    }, [])
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
                    return <Post key={e.id} post={e} />
                })
            }
        </div>
    )
}

export default Home
