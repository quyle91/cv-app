import HeadingProjects from "./heading-projects"
import ContentProjects from "./content-projects"
import FooterGreen from "./footer-green.js"

const WrapperProjects = () => {
	document.body.classList.remove(...document.body.classList)
	document.body.classList.add("projects")
	
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
		id="wrapper-projects"
		className="w3-main w3-padding-large"
		style={style}
		>
			<HeadingProjects/>
			<ContentProjects/>
			<FooterGreen/>
		</div>
		</>
	)
}
export default WrapperProjects