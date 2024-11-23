import { ChangeEvent } from "react"
import { Comment as CommentType } from "../../types/Comment"
import { useAppSelector } from "../../Store/Store"
import { User } from "../../types/User"
type CommentProps = {
    addComment: boolean
    comment?: CommentType
    getCommentText?: (e: ChangeEvent<HTMLInputElement>) => void
    sendComment?: () => void
    user?: User
}
const Comment = ({ addComment, comment, getCommentText, sendComment, user }: CommentProps) => {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (getCommentText) {
            getCommentText(event);
        }
    };
    const loginnedUser = useAppSelector(state => state.User.loginnedUser)
    return (
        <>
            {
                <div className="comment d-flex gap-2 mt-2">
                    <div>
                        <img src={addComment ? loginnedUser.img : user!.img} alt="" className="img-fluid rounded-circle" style={{ width: "35px", height: "35px" }} />
                    </div>
                    {
                        !addComment ?
                            <div className="single-comment">
                                <p>{user!.fname} {user!.lname}</p>
                                <div>
                                    {comment?.text}
                                </div>
                            </div>
                            :
                            <form className="form-floating" onSubmit={e => e.preventDefault()}>
                                <input type="text" className="form-control"
                                    placeholder="Comment"
                                    onChange={e => handleInputChange(e)}
                                />
                                <label>Add Comment</label>
                                <button className="btn btn-primary mt-2" onClick={sendComment}>Comment</button>
                            </form>
                    }

                </div >
            }

        </>

    )
}

export default Comment
