import TemplateProjectsItemYear from "./year"
import TemplateProjectsItemWeb from "./web"
import TemplateProjectsItemVideo from "./vid"
import TemplateProjectsItemDesign from "./des"
import TemplateProjectsItemOth from "./oth"

const TemplateProjectsItem = (prop) => {

    return ( 
        <>
        { 
            prop.item.type =="year" && 
            <TemplateProjectsItemYear id={prop.id} item={prop.item} />
        }
        { 
            prop.item.type =="web" && 
            <TemplateProjectsItemWeb id={prop.id} item={prop.item} />
        }
        { 
            prop.item.type =="des" && 
            <TemplateProjectsItemDesign id={prop.id} item={prop.item} />
        }
        { 
            prop.item.type =="vid" && 
            <TemplateProjectsItemVideo id={prop.id} item={prop.item} />
        }
        { 
            prop.item.type =="oth" && 
            <TemplateProjectsItemOth id={prop.id} item={prop.item} />
        }
        </>
    )
}
export default TemplateProjectsItem