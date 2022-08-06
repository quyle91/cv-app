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
        <div id={"item-"+ prop.id} className="item des w3-container w3-half w3-margin-top">
            <div className="w3-card w3-row">
                <div className="w3-quarter ">
                    <div className="w3-container w3-padding-16">
                        <img className="w3-image" src="./img/uniteam.png" />
                    </div>
                </div>
                <div className="w3-threequarter ">
                    <div className="w3-container w3-padding-16">
                        <h4 className="">Design web Uniteam</h4>
                        <a target="_blank" href="#" className="link">#</a>
                        <p>
                            <small> Working on: <a href="https://mka.com.vn">
                                    <img width="100px" src="https://mka.com.vn/wp-content/uploads/2019/11/minh-khang-logo.png" />
                                </a>
                            </small>
                        </p>
                        <button onClick={() => openModal(id)} className="w3-button w3-border w3-small">Xem file design</button>
                        <div id={id} className="w3-modal">
                            <div className="w3-modal-content">
                                <div className="w3-container">
                                    <div className="w3-content w3-display-container">
                                        <div className="w3-padding-16">
                                            <p>
                                                <a href="./pdf/uniteam/1.pdf" target="_blank">Xem File</a>
                                            </p>
                                            <p>
                                                <a href="./pdf/uniteam/2.pdf" target="_blank">Xem File</a>
                                            </p>
                                            <p>
                                                <a href="./pdf/uniteam/3.pdf" target="_blank">Xem File</a>
                                            </p>
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