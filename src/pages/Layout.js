import "../assets/import.css";
import "../assets/style.css";

// Main page
import Nav from "../components/nav";
import BannerLeft from "../components/banner-left";
import BannerMobile from "../components/banner-mobile";
import WrapperMain from "../components/wrapper-main";

// Cv page
import NavIcon from "../components/nav-icon";
import WrapperCv from "../components/wrapper-cv";


const Layout = () => {
    return (
        <>
            {/*Home page */}
            {/*<Nav/>
            <BannerLeft/>
            <BannerMobile/>
            <WrapperMain/>*/}


            {/*CV page */}
            <NavIcon/>
            <WrapperCv/>
        </>
    )
};

export default Layout;