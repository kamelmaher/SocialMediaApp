import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
type PostTypeProps = {
    postType: string
}
const PostType = ({ postType }: PostTypeProps) => {
    return (
        <div className="col-4 pointer">
            <div className="p-2 d-flex gap-1 justify-content-center align-items-center">
                <div className="post-icon">
                    <FontAwesomeIcon icon={faHouse} className="pt-0" />
                </div>
                <h6 className="mb-0">{postType}</h6>
            </div>
        </div>
    )
}

export default PostType
