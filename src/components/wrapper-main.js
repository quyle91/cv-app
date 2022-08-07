import HeadingMain from "./heading-main"
import About from "./about.js"
import ProjectOverview from "./project-overview.js"
import Contact from "./contact.js"
import Footer from "./footer.js"

const WrapperMain = () => {
	document.body.classList.remove(...document.body.classList)
	document.body.classList.add("main")
	
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
		id="wrapper-main"
		className="w3-main w3-padding-large"
		style={style}
		>
			<HeadingMain/>
			<About/>
			<ProjectOverview/>
			<Contact/>
			<Footer/>
		</div>
		</>
	)
}
export default WrapperMain