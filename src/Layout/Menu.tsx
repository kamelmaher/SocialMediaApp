import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./menu.css"
import { faEllipsis } from "@fortawesome/free-solid-svg-icons"
import Notification from "./Notification"
import { useAppSelector } from "../Store/Store"
import { useEffect, useRef, useState } from "react"
import { Notification as NotificationType } from "../types/Notification"
type MenuProps = {
    handleFromChild: (e: boolean) => void
    visible: boolean
}
const Menu = ({ handleFromChild, visible }: MenuProps) => {
    const loginnedUser = useAppSelector(state => state.User.loginnedUser)
    const [filtered, setFiltered] = useState<NotificationType>({
        requests: [],
        likes: [],
        comments: []
    })
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
        setFiltered({
            requests: loginnedUser.notifications.requests,
            likes: loginnedUser.notifications.likes,
            comments: loginnedUser.notifications.comments
        })
    }, [loginnedUser])
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

    const closeMenu = () => {
        setIsVisible(false)
        handleFromChild(false)
    }
    const filterNotifications = (e: string) => {
        switch (e) {
            case "All": setFiltered({ requests: loginnedUser.notifications.requests, likes: loginnedUser.notifications.likes, comments: loginnedUser.notifications.comments })
                break;
            case "Unread": setFiltered({
                requests: loginnedUser.notifications.requests.filter(e => e.hasRead == false),
                likes: loginnedUser.notifications.likes.filter(e => e.hasRead == false),
                comments: loginnedUser.notifications.comments.filter(e => e.hasRead == false)
            })
        }
    }
    const noNotifications = <p style={{ fontSize: "14px", padding: "8px" }}>There is No Unread Notifications</p>
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
                                <button className="btn btn-primary active me-2" onClick={() => filterNotifications("All")}>All</button>
                                <button className="btn btn-primary" onClick={() => filterNotifications("Unread")}>Unread</button>
                            </div>
                        </div>
                        <div className="notifications mt-2">
                            {
                                (filtered.requests.length > 0 ||
                                    filtered.likes.length ||
                                    filtered.comments.length) ?
                                    <ul className="list-unstyled">
                                        {
                                            filtered.requests.length > 0 &&
                                            <>
                                                <li className="bg-secondary p-2">Friend Requests</li>
                                                {
                                                    filtered.requests.map((e, i) => <Notification key={i} notification={e} closeMenu={closeMenu} />)
                                                }
                                            </>
                                        }

                                        {
                                            filtered.likes.length > 0 &&
                                            <>
                                                <li className="bg-secondary p-2">Likes</li>
                                                {
                                                    filtered.likes.map((e, i) => <Notification key={i} notification={e} closeMenu={closeMenu} />)
                                                }
                                            </>
                                        }

                                        {
                                            filtered.comments.length > 0 &&
                                            <>
                                                <li className="bg-secondary p-2">Comments</li>
                                                {
                                                    filtered.comments.map((e, i) => <Notification key={i} notification={e} closeMenu={closeMenu} />)
                                                }
                                            </>
                                        }

                                    </ul> : noNotifications
                            }

                        </div>
                    </div>
                </div >
            }
        </>

    )
}

export default Menu
