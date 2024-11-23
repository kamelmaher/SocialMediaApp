import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MutableRefObject, useEffect, useRef, useState } from "react"
import { useAppSelector } from "../Store/Store"
import { User } from "../types/User"
import SearchResult from "./SearchResult"

type SearchProps = {
    reference: MutableRefObject<HTMLDivElement | null>
}
const Search = ({ reference }: SearchProps) => {
    const users = useAppSelector(state => state.User.users)
    const [searchedUsers, setSearchedUsers] = useState<User[]>([])
    const search = (text: string) => {
        if (text == "") setSearchedUsers([])
        else {
            const selected = users.filter(user => user.fname.toLowerCase().startsWith(text.toLowerCase()))
            setSearchedUsers(selected)
        }
    }
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <div className="search-menu p-2" ref={reference}>

            {/* Search Form */}
            <form className="form">
                <div className="d-flex gap-2">
                    <div className="search-icon">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                    <div>
                        <input ref={inputRef} type="text" placeholder="Search Facebook" className="form-control" onChange={(e => search(e.target.value))} />
                    </div>
                </div>
            </form>

            {/* Search Results */}
            <div className="mt-3">
                {

                    searchedUsers.length > 0 ?
                        searchedUsers.map(user => <SearchResult key={user.id} user={user} />)
                        : <p>There is No Results</p>
                }
            </div>

        </div >
    )
}

export default Search
