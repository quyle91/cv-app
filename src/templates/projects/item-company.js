import { projectsDataCompany } from '../../data/projects'

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