import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type ReactTypeProps = {
    title: string,
    icon: IconProp,
    id: number,
    handleClick: () => void
}
const ReactType = ({ title, icon, handleClick }: ReactTypeProps) => {
    return (
        <div className="text-center react-type pointer" onClick={handleClick}>
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
            <span>{title}</span>
        </div>
    )
}

export default ReactType
