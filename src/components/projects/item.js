import TemplateProjectsItemYear from "./year"
import TemplateProjectsItemWeb from "./web"
import TemplateProjectsItemVideo from "./vid"
import TemplateProjectsItemDesign from "./des"
import TemplateProjectsItemOth from "./oth"

const TemplateProjectsItem = (prop) => {

    return ( 
        <>
        {
            (prop.item.type ==="year" && (prop.filter ==='year' || prop.filter==='all'))?
                <TemplateProjectsItemYear id={prop.id} item={prop.item} />
            : 
            (prop.item.type ==="web" && (prop.filter ==='web' || prop.filter==='all'))?
            <TemplateProjectsItemWeb id={prop.id} item={prop.item} />
            :
            (prop.item.type ==="des" && (prop.filter ==='des' || prop.filter==='all'))?
            <TemplateProjectsItemDesign id={prop.id} item={prop.item} />
            :
            (prop.item.type ==="vid" &&  (prop.filter ==='vid' || prop.filter==='all'))?
            <TemplateProjectsItemVideo id={prop.id} item={prop.item} />
            :
            (prop.item.type ==="oth" && (prop.filter ==='oth' || prop.filter==='all'))?
            <TemplateProjectsItemOth id={prop.id} item={prop.item} />
            :
            false
        }
        </>
    )
}
export default TemplateProjectsItem