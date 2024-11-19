type UserSectionProps = {
    text: string,
    data?: string[]
}
const UserSection = ({ text, data }: UserSectionProps) => {
    return (
        <div className="my-card">
            <div className="user-section-heading d-flex justify-content-between">
                <h4>{text.toUpperCase()}</h4>
                <span>show all {text}</span>
            </div>
            <div className="row">
                {
                    data &&
                    data.map((e, i) => <div key={i} className="col-4 col-lg-3 p-1 pointer">
                        <div className="img">
                            <img src={e} alt="" style={{ width: "100%", maxHeight: "130px", objectFit: "cover" }} />
                        </div>
                    </div>)
                }
                {/* <div className="col-4 col-lg-3 p-1">
                    <div className="img">
                        <img src={person} alt="" className="img-fluid" style={{ width: "100%" }} />
                    </div>
                </div>
                <div className="col-4 col-lg-3 p-1">
                    <div className="img">
                        <img src={person} alt="" className="img-fluid" style={{ width: "100%" }} />
                    </div>
                </div>
                <div className="col-4 col-lg-3 p-1">
                    <div className="img">
                        <img src={person} alt="" className="img-fluid" style={{ width: "100%" }} />
                    </div>
                </div>
                <div className="col-4 col-lg-3 p-1">
                    <div className="img">
                        <img src={person} alt="" className="img-fluid" style={{ width: "100%" }} />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default UserSection
