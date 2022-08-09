import { useState } from "react"


import TemplateProjectsItemYear from "./year"
import TemplateProjectsItemWeb from "./web"
import TemplateProjectsItemVideo from "./vid"
import TemplateProjectsItemDesign from "./des"
import TemplateProjectsItemOth from "./oth"

// data
import { projectsDataItems, projectsDataItemType, projectsDataCompany} from '../../data/projects'

const ContentProjects = () => {
    const items = projectsDataItems
    const itemType = projectsDataItemType


    let listType = []
    let tmpType = []
    items.map((item)=> {
        itemType.map((itemz)=>{
            if(itemz.type === item.type){
                if(itemz.show){
                    if(!tmpType.includes(itemz.type)){
                        tmpType.push(itemz.type)
                        listType.push(itemz)
                    }
                }
            }
        })
    })    
    console.log(listType);
    /*const onClickFilter = (t)=> {
        setFilter(prev=>{
            console.log(t.currentTarget.dataset.type);
            return "vid"
        })
    }*/
    
    const [filter, setFilter] = useState("all")
    return ( 
        <>
            <div id="content-project" className="w3-row">
                <div className="w3-content content">
                    <div>
                        <strong>Lọc: </strong>
                        {
                            listType.map((item,key) => (
                                <button key={key} onClick={(e)=> setFilter(item.type)} className="w3-button w3-border w3-small mrr8">
                                    {item.label}
                                </button>
                            ))
                        }
                    </div>
                    <hr/>
                    <div className="col-container row-fix-margin">
                        {
                            projectsDataItems.map((item,key)=>(
                                (item.type ==="year" && (filter ==='year' || filter==='all'))?
                                <TemplateProjectsItemYear key={key} id={key} item={item} />
                                : 
                                (item.type ==="web" && (filter ==='web' || filter==='all'))?
                                <TemplateProjectsItemWeb key={key} id={key} item={item} />
                                :
                                (item.type ==="des" && (filter ==='des' || filter==='all'))?
                                <TemplateProjectsItemDesign key={key} id={key} item={item} />
                                :
                                (item.type ==="vid" &&  (filter ==='vid' || filter==='all'))?
                                <TemplateProjectsItemVideo key={key} id={key} item={item} />
                                :
                                (item.type ==="oth" && (filter ==='oth' || filter==='all'))?
                                <TemplateProjectsItemOth key={key} id={key} item={item} />
                                :
                                false
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