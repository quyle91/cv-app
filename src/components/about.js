import { Link } from "react-router-dom"

const About = () => {
    return ( 
        <>
        <div id="about" className="w3-content w3-padding-32">
            <h2>Về tôi </h2>
            <hr/>
            <div id="vetoi">
                <p><i>Kinh nghiệm làm việc từ 2014 đến nay</i></p>
                <p>Là người có trách nhiệm với công việc và hướng đến sự chuyên nghiệp. Tôi mong muốn nhận được sự tin tưởng của đồng nghiệp & khách hàng.</p>
                <p>
                <i>
                    <Link to="/cv.html">Xem Cv của tôi </Link>
                </i>
                </p>
            </div>
        </div> 
        </>
    )
}
export default About