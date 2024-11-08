import Story from "./Story"
import person from "../../../../img/picture.jpg"
import "./story.css"

const StoryContainer = () => {
    return (
        <div className="row stories">
            <div className="col-4 col-md-3  create-story p-0">
                <div className="my-story">
                    <img src={person} alt="" className="img-fluid" />
                    <div className="overlay">
                        <div className="icon">
                            +
                        </div>
                        <p className="mb-0">Create Story</p>
                    </div>
                </div>
            </div>
                <Story />
                <Story />
                <Story />
        </div>
    )
}

export default StoryContainer
