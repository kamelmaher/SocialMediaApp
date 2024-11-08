import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useRef, useState } from 'react'
// import Search from './Search'

const SearchComponent = () => {
    const componentRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (componentRef.current && !componentRef.current.contains(event.target as Node)) {
                setIsVisible(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [])
    return (
        <div className="search d-flex gap-2" onClick={() => {
            setIsVisible(true)
        }}>
            <div className="search-icon">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <p className={`search-text d-none d-md-block`}>Search Facebook</p>
            {/* {
                isVisible && <Search reference={componentRef} />
            } */}
        </div>
    )
}

export default SearchComponent
