import { Link } from "react-router-dom"

const ProjectOverview = () => {
    return ( 
        <>
        <div id="project-overview" className="w3-content w3-padding-32">
            <div className="w3-row w3-center w3-light-grey w3-padding-16 w3-section">
                <div className="w3-third w3-section">
                    <span className="w3-xxlarge"><b>14+</b></span><br/>
                    Khách hàng
                </div>
                <div className="w3-third w3-section">
                    <span className="w3-xxlarge"><b>55+</b></span><br/>
                    Dự án đã hoàn thành
                    <br/>
                    <br/>
                    <Link className="w3-button w3-border w3-small" to="./duan.html">Xem</Link>
                </div>
                <div className="w3-third w3-section">
                    <span className="w3-xxlarge"><b>89+</b></span><br/>
                    Khách hàng có phản hồi tốt
                </div>
            </div>
        </div> 
        </>
    )
}
export default ProjectOverview