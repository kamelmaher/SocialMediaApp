import { ChangeEvent } from "react"
import { Comment as CommentType } from "../../types/Comment"
import { useAppSelector } from "../../Store/Store"
type CommentProps = {
    addComment: boolean
    comment?: CommentType
    getCommentText?: (e: ChangeEvent<HTMLInputElement>) => void
    sendComment?: () => void
}
const Comment = ({ addComment, comment, getCommentText, sendComment }: CommentProps) => {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (getCommentText) {
            getCommentText(event);
        }
    };

    const users = useAppSelector(state => state.User.users)
    const loginnedUser = useAppSelector(state => state.User.loginnedUser)

    // Hard 
    const myUser = users.filter(e => e.id == comment?.userId)[0]

    return (
        <>
            {
                <div className="comment d-flex gap-2 mt-2">
                    <div>
                        <img src={addComment ? loginnedUser.img : myUser.img} alt="" className="img-fluid rounded-circle" style={{ width: "35px", height: "35px" }} />
                    </div>
                    {
                        !addComment ?
                            <div className="single-comment">
                                <p>{myUser.fname} {myUser.lname}</p>
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
