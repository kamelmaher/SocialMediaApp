import { useNavigate } from "react-router"
import ListItem from "./ListItem"

const ListContainer = () => {
    const listItems = ["Friends" , "Memories" , "Saved" , "Groups" , "Video" , "MarketPlace" , "Feeds" , "Events"]
    const navigate = useNavigate()
    return (
        <div>
            <ul>
                {
                    listItems.map((e) => {
                        return <div key={e} onClick={() => {
                            navigate(`/list/${e}`)
                        }}>
                            <ListItem title={e}></ListItem>
                        </div>
                    })
                }
            </ul>
        </div>
    )
}

export default ListContainer
