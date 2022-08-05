const HeadingMain = () => {
    return ( 
    <>
        <header className="w3-container w3-content w3-center" style={{padding: "64px 0px" }} id="home">        
            <div id="spData2">
                <h1 className="w3-jumbo">
                    <b>Quý Lê</b>
                </h1>
                <span className="w3-tag w3-small w3-white w3-border">
                    Website Developer
                </span>          
                <p>
                    Là con người có trách nhiệm - ham học hỏi. 
                </p>          
            </div>      
            <div className="call-me">
                <a target="_blank" href="tel:0972054206" className="w3-margin-right w3-button w3-green w3-padding-large w3-margin-top">
                    <i className="fa fa-phone-square"></i> Gọi cho tôi
                </a> 
                <a target="_blank" href="https://m.me/timquen2014" className="w3-margin-right w3-button w3-green w3-padding-large w3-margin-top">
                    <i className="fa fa-facebook-square"></i> Messenger
                </a>
                <a target="_blank" href="http://zalo.me/0972054206" className="w3-margin-right w3-button w3-green w3-padding-large w3-margin-top ">
                    <img style={{backgroundColor: "white" }} src="./img/zalo.svg" width="16px"/> Zalo
                </a>
            </div>
        </header>
    </>
    )
}
export default HeadingMain;