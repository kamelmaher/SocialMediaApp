import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect, ReactNode } from "react";
type AddingProps = {
    visible: boolean,
    handleFromCild: (e: boolean) => void
    text: string,
    children: ReactNode
}
const Adding = ({ visible, handleFromCild, text, children }: AddingProps) => {

    const [isVisible, setIsVisible] = useState(visible);
    const handleVisible = (isVisible: boolean) => {
        setIsVisible(isVisible)
        handleFromCild(isVisible)
    }

    // Handle The Component 
    const componentRef = useRef<HTMLDivElement>(null);
    const handleClickOutside = (event: MouseEvent) => {
        if (componentRef.current && !componentRef.current.contains(event.target as Node)) {
            setIsVisible(false);
            handleFromCild(false)
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
            {
                isVisible &&
                <div className="post-details-container" >
                    <div ref={componentRef} className="post-details-box">
                        <div className="my-card">
                            <div className="head d-flex pb-2">
                                <p>
                                    {text}
                                </p>
                                <div className="close pointer" onClick={() => handleVisible(false)}>
                                    <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                                </div>
                            </div>
                            <hr />
                            <div className="p-2" style={{ maxHeight: "80vh", overflowY: "auto" }}>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>


    )
}

export default Adding
