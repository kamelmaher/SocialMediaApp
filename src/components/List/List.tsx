import { useParams } from "react-router"

const List = () => {
    const { id } = useParams()
    
    return (
        <div>
            <h1>{id}</h1>
        </div>
    )
}

export default List
