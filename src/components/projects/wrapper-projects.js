import HeadingProjects from "./heading-projects"
import ContentProjects from "./content-projects"
import Footer from "../footer.js"

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
			<Footer/>
		</div>
		</>
	)
}
export default WrapperProjects