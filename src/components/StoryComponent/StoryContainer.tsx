import Story from "./Story"
import "./story.css"
import { useAppSelector } from "../../Store/Store"

const StoryContainer = () => {
    const loginnedUser = useAppSelector(state => state.User.loginnedUser)
    return (
        <div className="row stories justify-content-center">
            <div className="my-story col-3 create-story p-0">
                <img src={loginnedUser.img} alt="" style={{ objectFit: "cover", width: "100%" }} />
                <div className="overlay">
                    <div className="icon">
                        +
                    </div>
                    <p className="mb-0">Create Story</p>
                </div>
            </div>
            <Story />
            <Story />
            <Story />
        </div>
    )

}

export default StoryContainer
