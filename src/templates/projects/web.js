 const TemplateProjectsItemWeb = (prop) => {
    return ( 
        <>
        <div id={"item-"+ prop.id} className="item web w3-container w3-half w3-margin-top">
            <div className="w3-row w3-card  w3-padding-16">
                <div className="w3-quarter">
                    <div className="w3-container" >
                        <img className="w3-image" src="./img/ppi.png" />
                    </div>
                </div>
                <div className="w3-threequarter ">
                    <div className="w3-container">
                        <h4 className="">Production Packaging Innovations</h4>
                        <a target="_blank" href="https://dev-ppi2022.pantheonsite.io/" className="link">https://dev-ppi2022.pantheonsite.io/</a>
                        <br/>
                        <small> Working on: <a href="https://sentius.com.au">
                                <img width="50px" src="./img/sentius.svg" />
                            </a>
                        </small>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default TemplateProjectsItemWeb;