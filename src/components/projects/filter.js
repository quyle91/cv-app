import { projectsDataItems, projectsDataItemType } from '../../data/projects'


const TemplateProjectsFilter = () => {
    const items = projectsDataItems
    const itemType = projectsDataItemType


    let listType = []
    let tmpType = []
    items.map((item)=> {
        itemType.map((itemz)=>{
            if(itemz.type == item.type){
                if(itemz.show){
                    if(!tmpType.includes(itemz.type)){
                        tmpType.push(itemz.type)
                        listType.push(itemz)
                    }
                }
            }
        })
    })

    const onClickFilter = (e)=> {
        alert()
    }

    return ( 
        <>
            <div>
                <strong>Lọc: </strong>
                {
                    listType.map((item,key) => (
                        <button key={key} onClick={onClickFilter} className="w3-button w3-border w3-small mrr8">
                            {item.label}
                        </button>
                    ))
                }
            </div>
        </>
    )
}
export default TemplateProjectsFilter