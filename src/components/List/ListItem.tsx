import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
type ListItemProps = {
    title: string
}
const ListItem = ({title}:ListItemProps) => {
    return (
        <li className="d-flex">
            <div className="icon">
                <FontAwesomeIcon icon={faFacebookMessenger}></FontAwesomeIcon>
            </div>
            <div>
                <p>{title}</p>
            </div>
        </li>
    )
}

export default ListItem
