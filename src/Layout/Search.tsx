import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MutableRefObject } from "react"

type SearchProps = {
    reference: MutableRefObject<HTMLDivElement | null>
}
const Search = ({ reference }: SearchProps) => {

    return (
        <div className="search-menu p-2" ref={reference}>

            {/* Search Form */}
            <form className="form">
                <div className="d-flex gap-2">
                    <div className="search-icon">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                    <div>
                        <input type="text" placeholder="Search Facebook" className="form-control" />
                    </div>
                </div>
            </form>

            {/* Search Results */}
            <div className="mt-2">
                <p className="mb-2">Result 1</p>
            </div>

        </div>
    )
}

export default Search
