import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type ReactTypeProps = {
    title: string,
    icon: IconProp
}
const ReactType = ({ title, icon }: ReactTypeProps) => {
    return (
        <div className="text-center react-type pointer">
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
            <span>{title}</span>
        </div>
    )
}

export default ReactType
