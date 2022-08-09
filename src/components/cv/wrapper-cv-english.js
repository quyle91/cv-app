
import HeadingCvEnglish from "./heading-cv-english"

import AvatarCv from "./avatar-cv"



import ContactCvEnglish from "./contact-cv-english"
import SkillCvEnglish from "./skill-cv-english"
import InterestsCvEnglish from "./interests-cv-english"





import TargetCvEnglish from "./target-cv-english"
import ProjectsCvEnglish from "./projects-cv-english"
import ExperienceCvEnglish from "./experience-cv-english"
import EducationCvEnglish from "./education-cv-english"
import PersonalityCvEnglish from "./personality-cv-english"
import ReferenceCvEnglish from "./reference-cv-english"


import FooterCvEnglish from "./footer-cv-english"



const WrapperCv = () => {
	document.body.classList.remove(...document.body.classList)
	document.body.classList.add("cv")
	
	const css = {
		maxWidth: "1200px",
		margin: "auto"
	}
	return (
		<>
			<div id="wrapper-cv" className="w3-main w3-white w3-text-dark-gray" style={css}>
				
				<HeadingCvEnglish/>
				<div id="cvcontent" className="w3-row">
					<div className="w3-third w3-padding-large">
						<AvatarCv/>

						
	        			<ContactCvEnglish/>
						<SkillCvEnglish/>
						<InterestsCvEnglish/>
						
					</div>
					<div className="w3-twothird w3-padding-large">
						
			          	<TargetCvEnglish/>
						<ProjectsCvEnglish/>
		          		<ExperienceCvEnglish/>
			          	<EducationCvEnglish />
			          	<PersonalityCvEnglish/>
			          	<ReferenceCvEnglish/>
					</div>
				</div>
				<br/>
				<FooterCvEnglish/>
			</div>
		</>
	)
}
export default WrapperCv