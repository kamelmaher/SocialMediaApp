import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
type PostTypeProps = {
    postType: string,
    icon: IconProp
    color: string
    handleFromChild: (e: boolean) => void
}
const PostType = ({ postType, icon, color, handleFromChild }: PostTypeProps) => {
    return (
        <div className="col-4 pointer post-type" onClick={() => handleFromChild(true)}>
            <div className="p-2 d-flex gap-1 justify-content-center align-items-center">
                <div className="post-icon">
                    <FontAwesomeIcon icon={icon} className="pt-0" color={color} />
                </div>
                <h6 className="mb-0" style={{
                    color: "#65686c"
                }}>{postType}</h6>
            </div>
        </div>
    )
}

export default PostType
