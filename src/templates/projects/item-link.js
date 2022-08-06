const ProjectItemLink =(prop)=> {
	return ( 
        <>
        { prop.item.link? 
            <a target="_blank" href={prop.item.link} className="link">{prop.item.link}</a> :
            ""
        }
        </>
    )
}
export default ProjectItemLink