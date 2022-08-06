import projectsData from '../data/projects.json';

import TemplateProjectsFilter from "../templates/projects/filter";
import TemplateProjectsItemYear from "../templates/projects/year";
import TemplateProjectsItemWeb from "../templates/projects/web";
import TemplateProjectsItemVideo from "../templates/projects/vid";
import TemplateProjectsItemDesign from "../templates/projects/des";
import TemplateProjectsItemOth from "../templates/projects/oth";

const ContentProjects = () => {
    console.log(projectsData);
    

    return ( 
        <>
        <div className="w3-row">
            <TemplateProjectsFilter/>
            <div id="content">
                <TemplateProjectsItemYear id="12"/>
                <TemplateProjectsItemWeb id="13"/>
                <TemplateProjectsItemVideo id="14"/>
                <TemplateProjectsItemDesign id="15"/>
                <TemplateProjectsItemOth id="16"/>
            </div>
        </div>
        <div className="w3-padding-32 w3-content w3-text-grey" style={{marginBottom: "64px"}}></div>
        </>
    )
}
export default ContentProjects;