import ProjectItemImage from "./item-image"
import ProjectItemCompany from "./item-company"
import ProjectItemLink from "./item-link"
import ProjectItemTitle from "./item-title"

const TemplateProjectsDesign = (prop) => {
    const id = "id"+ prop.id;
    const openModal = (id) =>{
        document.getElementById(id).style.display='block';
    }
    const closeModal = (id) =>{
        document.getElementById(id).style.display='none';
    }
    return (
        <>
        <div id={"item-"+ prop.id} className="item col des w3-container w3-half w3-margin-top">
            <div className="w3-card w3-row">
                <div className="w3-quarter ">
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
                            <button onClick={() => openModal(id)} className="w3-button w3-border w3-small">Xem file design</button>
                        </p>
                        <div id={id} className="w3-modal">
                            <div className="w3-modal-content">
                                <div className="w3-container">
                                    <div className="w3-content w3-display-container">
                                        <div className="w3-padding-16">
                                            {
                                                prop.item.source?

                                                    prop.item.source.map((item,key)=>(
                                                        <p key={key}>
                                                            <img alt="#" src={item} />
                                                        </p>
                                                    ))
                                                
                                                :""
                                            }
                                            {
                                                prop.item.pdf?

                                                    prop.item.pdf.map((item,key)=>(
                                                        <p key={key}>
                                                            <a target="_blank" href={item} >Xem File</a>
                                                        </p>
                                                    ))

                                                : ""
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
export default TemplateProjectsDesign;