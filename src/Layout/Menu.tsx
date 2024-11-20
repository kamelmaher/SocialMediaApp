import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./menu.css"
import { faEllipsis } from "@fortawesome/free-solid-svg-icons"
import Notification from "./Notification"
import { useAppSelector } from "../Store/Store"
import { useEffect, useRef, useState } from "react"
type MenuProps = {
    handleFromChild: (e: boolean) => void
    visible: boolean
}
const Menu = ({ handleFromChild, visible }: MenuProps) => {
    const loginnedUser = useAppSelector(state => state.User.loginnedUser)
    const requests = loginnedUser.notifications.requests
    const likes = loginnedUser.notifications.likes
    const comments = loginnedUser.notifications.comments
    const [isVisible, setIsVisible] = useState(visible);


    // Handle The Component 
    const componentRef = useRef<HTMLDivElement>(null);
    const handleClickOutside = (event: MouseEvent) => {
        if (componentRef.current && !componentRef.current.contains(event.target as Node)) {
            setIsVisible(false);
            handleFromChild(false)
        }
    };
    useEffect(() => {
        setIsVisible(visible)
    }, [visible])
    useEffect(() => {
        if (isVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isVisible]);
    return (
        <>
            {isVisible &&
                <div className="menu" ref={componentRef}>
                    <div className="my-card mt-1 text-start">
                        <div className="head">
                            <div className="title d-flex justify-content-between">
                                <p>Notifications</p>
                                <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
                            </div>
                            <div className="filters mt-2">
                                <button className="btn btn-primary active me-2">All</button>
                                <button className="btn btn-primary ">Unread</button>
                            </div>
                        </div>
                        <div className="notifications mt-2">
                            <ul className="list-unstyled">
                                {
                                    requests.length > 0 &&
                                    <>
                                        <li className="bg-secondary p-2">Friend Requests</li>
                                        {
                                            requests.map((e, i) => <Notification key={i} notification={e} />)
                                        }
                                    </>
                                }

                                {
                                    likes.length > 0 &&
                                    <>
                                        <li className="bg-secondary p-2">Likes</li>
                                        {
                                            likes.map((e, i) => <Notification key={i} notification={e} />)
                                        }
                                    </>
                                }

                                {
                                    comments.length > 0 &&
                                    <>
                                        <li className="bg-secondary p-2">Comments</li>
                                        {
                                            comments.map((e, i) => <Notification key={i} notification={e} />)
                                        }
                                    </>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

export default Menu
