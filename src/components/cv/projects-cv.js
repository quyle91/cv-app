import { Link } from "react-router-dom"

const ProjectsCv = () => {
    return ( 
        <>
        <div id="projects">
            <h2 className="w3-padding-16">Dự án gần đây</h2>
            <div className="">
                <ol className="w3-ol">
                    <li><a target="_blank" rel="noreferrer" href="https://dev-ppi2022.pantheonsite.io/">Production Packaging Innovations</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://test.maritimevilla.com/">トランチャ - U-boku</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://dev-magicmobility.pantheonsite.io/ldp-euro/">Magic mobility</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://dev-activebowls.pantheonsite.io/">Active Bowls</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://dev-shoptretho.pantheonsite.io/">Shop trẻ thơ</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://noithatkfa.com/">Nội thất KFA</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://wordpress.org/plugins/administrator-z/">Plugin wordpress Administrator Z</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://wordpress.org/plugins/auto-product-after-upload-image/">Plugin wordpress tự tạo sản phẩm khi tải hình ảnh</a></li>
                    <li><Link to="/duan.html">Xem thêm...</Link></li>
                </ol>
            </div>
        </div>
        </>
    )
}
export default ProjectsCv