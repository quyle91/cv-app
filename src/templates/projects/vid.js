import ProjectItemImage from "./item-image"
import ProjectItemCompany from "./item-company"
import ProjectItemLink from "./item-link"
import ProjectItemTitle from "./item-title"

const TemplateProjectsVid = (prop) => {

    const id = "id"+ prop.id

    const openModal = (id) =>{
        document.getElementById(id).style.display='block'
    }
    const closeModal = (id) =>{
        document.getElementById(id).style.display='none'
    }
    
    return ( 
        <>
        <div id={"item-"+ prop.id} className="item col vid w3-container w3-half w3-margin-top">
            <div className="w3-row w3-card">
                <div className="w3-quarter">
                    <div className="w3-container w3-padding-16">
                        <ProjectItemImage item={prop.item} />
                    </div>
                </div>
                <div className="w3-threequarter ">
                    <div className="w3-container w3-padding-16">
                        <ProjectItemTitle item={prop.item} />
                        <ProjectItemLink item={prop.item} />
                        <ProjectItemCompany item={prop.item} />
                        <p>
                            <button onClick={() => openModal(id)} className="w3-button w3-border w3-small">Xem video</button>
                        </p>
                        <div id={id} className="w3-modal">
                            <div className="w3-modal-content">
                                <div className="w3-container">
                                    <div className="w3-content w3-display-container">
                                        <div className="w3-padding-16">
                                            {
                                                
                                                prop.item.source.map((item,key)=>(
                                                    <video key={key} width="100%" height="auto" controls={true}>
                                                        <source src={item} type="video/mp4" />
                                                    </video>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <span onClick={()=> closeModal(id)} className="w3-button w3-display-topright w3-xlarge fa fa-remove"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default TemplateProjectsVid