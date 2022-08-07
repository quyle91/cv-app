import { Link } from "react-router-dom"

const HeadingCvEnglish = () => {
    return ( 
    <>
        <header id="heading-cv-english" className="w3-padding-large" id="fa-home">
            <div className="w3-padding-32 ">
                <h1 className="w3-xxxlarge">
                    <b>Quy Le</b>
                </h1>
                <h2>
                    <em>Web developer</em>
                </h2>
                <p>
                    <Link to="/cv-en.html"><small>English</small></Link>
                    / 
                    <Link to="/cv.html"><small>Tiếng Việt</small></Link>
                </p>
                <hr/>
            </div>
        </header>
    </>
    )
}
export default HeadingCvEnglish