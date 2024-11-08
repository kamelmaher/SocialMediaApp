import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type LayoutIconProps = {
    icon: IconProp
}
const LayoutIcon = ({icon}:LayoutIconProps) => {

    return (
        <div className="layout-icon pointer">
            <FontAwesomeIcon icon={icon} />
        </div>
    )
}

export default LayoutIcon
