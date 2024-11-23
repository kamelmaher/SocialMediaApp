import { useAppSelector } from "../../Store/Store"
import { PostType } from "../../types/Post"
import Comment from "./Comment"

type CommentsListProps = {
    post: PostType
}
const CommentsList = ({ post }: CommentsListProps) => {
    // post.interactions.comments.map(e => <Comment addComment={false} comment={e} />)
    const users = useAppSelector(state => state.User.users)
    const user = post.interactions.comments.map(comment => {
        const user = users.find(user => user.id == comment.userId)!
        return user
    })
    return (
        <div>
            {
                post.interactions.comments.map((e, i) => <Comment key={e.id} addComment={false} comment={e} user={user[i]} />)
            }
        </div>
    )
}

export default CommentsList
