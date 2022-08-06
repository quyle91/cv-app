const TemplateProjectsVid = (prop) => {
    const id = "id"+ prop.id;
    const openModal = (id) =>{
        document.getElementById(id).style.display='block';
    }
    const closeModal = (id) =>{
        document.getElementById(id).style.display='none';
    }
    
    return ( 
        <>
        <div id={"item-"+ prop.id} className="item vid w3-container w3-half w3-margin-top">
            <div className="w3-row w3-card">
                <div className="w3-quarter">
                    <div className="w3-container w3-padding-16">
                        <img className="w3-image" src="./img/mobifone 3c.png" />
                    </div>
                </div>
                <div className="w3-threequarter ">
                    <div className="w3-container w3-padding-16">
                        <h4 className="">Giải pháp Công nghệ Thông tin MobiFone</h4>
                        <p>
                            <small> Working on: <a href="https://mka.com.vn">
                                    <img width="100px" src="https://mka.com.vn/wp-content/uploads/2019/11/minh-khang-logo.png"/>
                                </a>
                            </small>
                        </p>
                        <button onClick={() => openModal(id)} className="w3-button w3-border w3-small">Xem video</button>
                        <div id={id} className="w3-modal">
                            <div className="w3-modal-content">
                                <div className="w3-container">
                                    <div className="w3-content w3-display-container">
                                        <div className="w3-padding-16">
                                            <video width="100%" height="auto" controls={true}>
                                                <source src="./img/video/mobifone 3c (4).mp4" type="video/mp4" />
                                            </video>
                                            <video width="100%" height="auto" controls={true}>
                                                <source src="./img/video/mobifone 3c (3).mp4" type="video/mp4" />
                                            </video>
                                            <video width="100%" height="auto" controls={true}>
                                                <source src="./img/video/mobifone 3c (2).mp4" type="video/mp4" />
                                            </video>
                                            <video width="100%" height="auto" controls={true}>
                                                <source src="./img/video/mobifone 3c (1).mp4" type="video/mp4" />
                                            </video>
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
export default TemplateProjectsVid;