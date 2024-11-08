import person from "../../../../img/picture.jpg"
import "./story.css"
const Story = () => {
    return (
        <div className="col-4 col-md-3 p-0">
            <div className="story">
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
        </div>
    )
}

export default Story
