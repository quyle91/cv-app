import "../assets/import.css";
import "../assets/style.css";

// Main page
import Nav from "../components/nav";
import NavIcon from "../components/nav-icon";
import BannerLeft from "../components/banner-left";
import BannerMobile from "../components/banner-mobile";

// Home page
import WrapperMain from "../components/wrapper-main";

// Cv page
import WrapperCv from "../components/wrapper-cv";

// Project page
import WrapperProjects from "../components/wrapper-projects";


const Layout = () => {
    return (
        <>
            {/*Home page */}
            {/*<Nav/>
            <BannerLeft/>
            <BannerMobile/>
            <WrapperMain/>*/}


            {/*CV page */}
            {/*<NavIcon/>
            <WrapperCv/>*/}

            {/*Projects Page*/}            
            <NavIcon/>
            <BannerLeft/>
            <WrapperProjects/>
        </>
    )
};

export default Layout;