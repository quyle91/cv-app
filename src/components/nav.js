import { Link } from "react-router-dom";

const Nav = () => {
    const closeNav = () => {
        document.getElementById("mySidebar").style.display = "none";
    }
    const openNav = () => {
        document.getElementById("mySidebar").style.width = "60%";
        document.getElementById("mySidebar").style.display = "block";
    }
    return (
        <>
        <nav 
        className = "w3-sidebar w3-animate-right w3-xxlarge"
        id = "mySidebar"
        style = {
            {
                display: "none",
                paddingTop: "150px",
                right: "0px",
                zIndex: 2,
                width: "60%",
            }
        }
        >
            <span
                className = "w3-button w3-xxxlarge w3-display-topright"
                style = { { padding: "0 12px" } }
                >
                <i className="fa fa-remove" onClick={closeNav} ></i>
            </span>
            <div id="spData1" className="w3-bar-block w3-center">
                <Link onClick={closeNav} className="w3-bar-item w3-button w3-large" to="/">Trang chính</Link>
                <Link onClick={closeNav} className="w3-bar-item w3-button w3-large" to="/cv.html">CV</Link>
                <Link onClick={closeNav} className="w3-bar-item w3-button w3-large" to="/duan.html">Dự án</Link>
                <Link onClick={closeNav} className="w3-bar-item w3-button w3-large" to="/administratorz">AdministratorZ Document</Link>
            </div>
        </nav>
        <span 
            className = "w3-button w3-top w3-white w3-xxlarge w3-hover-text-black"
            style = { { width: "auto", right: 0 } }
            onClick = { openNav }
            >
                <i className="fa fa-bars"></i>
        </span> 
        </>
    )

};
export default Nav;