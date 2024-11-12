import Story from "./Story"
import person from "../../../img/picture.jpg"
import "./story.css"

const StoryContainer = () => {
    return (
        <div className="row stories justify-content-center">
            <div className="my-story col-3 create-story p-0">
                <img src={person} alt="" className="img-fluid" />
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
