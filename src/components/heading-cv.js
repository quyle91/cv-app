import { Link } from "react-router-dom";

const HeadingCv = () => {
    return ( 
    <>
        <header className="w3-padding-large" id="fa-home">
            <div className="w3-padding-32 ">
                <h1 className="w3-xxxlarge">
                    <b>Lê Văn Quý</b>
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
export default HeadingCv;