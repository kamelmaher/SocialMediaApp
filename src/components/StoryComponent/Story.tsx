import person from "../../../img/picture.jpg"
import "./story.css"
const Story = () => {
    return (
        <div className="story col-3 ms-sm-1 me-sm-1 p-0">
            <div className="img">
                <img src={person} alt="" className="img-fluid" />
            </div>
            <div className="story-overlay">
                <div>
                    <img src={person} alt="" className="img-fluid rounded-circle" style={{ width: "30px" }} />
                </div>
                <p className="text-center">kamel</p>
            </div>
        </div>
    )
}

export default Story
