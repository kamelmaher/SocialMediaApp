import { PostType } from "../../types/Post"
import Post from "./Post"

type PostContainerProps = {
    posts: PostType[]
}
const PostContainer = ({ posts }: PostContainerProps) => {
    return (
        <div>
            {
                posts.map(e => {
                    return <Post key={e.id} post={e} />
                })
            }
        </div>
    )
}

export default PostContainer
