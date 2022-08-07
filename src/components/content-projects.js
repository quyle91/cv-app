import { useState } from "react"

import TemplateProjectsFilter from "../templates/projects/filter"
import TemplateProjectsItem from "../templates/projects/item"

// data
import { projectsDataItems } from '../data/projects'

const ContentProjects = () => {
    const filter = 'oth'
    return ( 
        <>
            <div id="content-project" className="w3-row">
                <div className="w3-content">
                    <TemplateProjectsFilter/>
                    <hr/>
                    <div className="col-container row-fix-margin">
                        {
                            projectsDataItems.map((item,key)=>(
                                <TemplateProjectsItem key={key} id={key} item={item} filter={filter} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="w3-padding-32 w3-content w3-text-grey" style={{marginBottom: "64px"}}></div>
        </>
    )
}
export default ContentProjects