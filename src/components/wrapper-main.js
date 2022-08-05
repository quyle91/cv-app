import HeadingMain from "./heading-main";
import About from "./about.js";
import ProjectOverview from "./project-overview.js";
import Contact from "./contact.js";
import FooterWhite from "./footer-white.js";

const WrapperMain = () => {
	const style = {
        marginLeft: "40%",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right top",
        backgroundAttachment: "fixed",
	}
	return (
		<>
		<div 
		className="w3-main w3-padding-large"
		style={style}
		>
			<HeadingMain/>
			<About/>
			<ProjectOverview/>
			<Contact/>
			<FooterWhite/>
		</div>
		</>
	)
}
export default WrapperMain;