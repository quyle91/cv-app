import { projectsDataCompany } from '../../data/projects-company'

const ProjectItemCompany =(prop)=> {
	return ( 
        <>
        {
            prop.item.company 
            ? projectsDataCompany[prop.item.company]
            : ""
        }
        </>
    )
}
export default ProjectItemCompany