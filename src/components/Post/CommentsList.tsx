import { PostType } from "../../types/Post"
import Comment from "./Comment"

type CommentsListProps = {
    post: PostType
}
const CommentsList = ({ post }: CommentsListProps) => {
    post.interactions.comments.map(e => <Comment addComment={false} comment={e} />)
    return (
        <div>
            {
                post.interactions.comments.map(e => <Comment key={e.id} addComment={false} comment={e} />)
            }
        </div>
    )
}

export default CommentsList
