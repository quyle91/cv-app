import ProjectItemImage from "./item-image"
import ProjectItemCompany from "./item-company"
import ProjectItemLink from "./item-link"
import ProjectItemTitle from "./item-title"

const TemplateProjectsItemWeb = (prop) => {
    return (
        <>
        <div id={"item-"+ prop.id} className="item col web w3-container w3-half w3-margin-top">
            <div className="w3-row w3-card  w3-padding-16">
                <div className="w3-quarter">
                    <div className="w3-container" >
                        <ProjectItemImage item={prop.item} />
                    </div>
                </div>
                <div className="w3-threequarter ">
                    <div className="w3-container">
                        <ProjectItemTitle item={prop.item} />
                        <ProjectItemLink item={prop.item} />
                        <ProjectItemCompany item={prop.item} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default TemplateProjectsItemWeb