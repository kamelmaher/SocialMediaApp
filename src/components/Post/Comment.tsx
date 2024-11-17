import { ChangeEvent } from "react"
import person from "../../../img/picture.jpg"
import { Comment as CommentType } from "../../types/Comment"
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
    return (
        <div className="comment d-flex gap-2 mt-2">
            <div>
                <img src={person} alt="" className="img-fluid rounded-circle" style={{ width: "35px" }} />
            </div>
            {
                !addComment ?
                    <div className="single-comment">
                        <p>Kamel Maher</p>
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

    )
}

export default Comment
