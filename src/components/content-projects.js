import { useState } from "react";

import TemplateProjectsFilter from "../templates/projects/filter"
import TemplateProjectsItem from "../templates/projects/item"

// data
import { projectsDataItems } from '../data/projects'

const ContentProjects = () => {
    const filter = 'oth'
    return ( 
        <>
            <div className="w3-row row-fix-margin">
                <TemplateProjectsFilter/>
                <div id="content" className="col-container">
                    {
                        projectsDataItems.map((item,key)=>(
                            <TemplateProjectsItem key={key} id={key} item={item} filter={filter} />
                        ))
                    }
                </div>
            </div>
            <div className="w3-padding-32 w3-content w3-text-grey" style={{marginBottom: "64px"}}></div>
        </>
    )
}
export default ContentProjects