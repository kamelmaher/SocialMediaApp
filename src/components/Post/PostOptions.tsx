import { faEllipsis, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const PostOptions = () => {
    return (
        <div className="options">
            <span>
                <FontAwesomeIcon icon={faEllipsis} />
            </span>
            <span>
                <FontAwesomeIcon icon={faXmark} />
            </span>
        </div>
    )
}

export default PostOptions
