import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type AboutItemProps = {
    text: string,
    icon: IconProp
}
const AboutItem = ({ text, icon }: AboutItemProps) => {
    return (
        <li className="d-flex gap-2 mb-2">
            <FontAwesomeIcon icon={icon} color="#8c939d"></FontAwesomeIcon>
            <span>{text}</span>
        </li>
    )
}

export default AboutItem
