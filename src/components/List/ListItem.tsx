import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
type ListItemProps = {
    title: string,
    icon: IconProp,
    color: string
    handleClick: () => void
}
const ListItem = ({ title, icon , color, handleClick }: ListItemProps) => {
    return (
        <li className="d-flex list-item pointer" onClick={handleClick}>
            <div className="icon">
                <FontAwesomeIcon icon={icon}color={color} fontSize="18px"></FontAwesomeIcon>
            </div>
            <div>
                <p className="mb-0">{title}</p>
            </div>
        </li>
    )
}

export default ListItem
