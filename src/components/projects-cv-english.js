import { Link } from "react-router-dom";

const ProjectsCvEnglish = () => {
    return ( 
        <>
        <div>
            <h2 className="w3-padding-16">Recent Projects</h2>
            <div className="">
                <ol className="w3-ol">
                    <li><a target="_blank" href="https://dev-ppi2022.pantheonsite.io/">Production Packaging Innovations</a></li>
                    <li><a target="_blank" href="https://test.maritimevilla.com/">トランチャ - U-boku</a></li>
                    <li><a target="_blank" href="https://dev-magicmobility.pantheonsite.io/ldp-euro/">Magic mobility</a></li>
                    <li><a target="_blank" href="https://dev-activebowls.pantheonsite.io/">Active Bowls</a></li>
                    <li><a target="_blank" href="https://dev-shoptretho.pantheonsite.io/">Shop for baby</a></li>
                    <li><a target="_blank" href="https://dev-noithatkfa.pantheonsite.io/">KFA furniture</a></li>
                    <li><a target="_blank" href="https://wordpress.org/plugins/administrator-z/">Plugin wordpress Administrator Z</a></li>
                    <li><a target="_blank" href="https://wordpress.org/plugins/auto-product-after-upload-image/">Plugin wordpress create woocommerce product</a></li>
                    <li><Link to="/duan.html">View More...</Link></li>
                </ol>
            </div>
        </div>
        </>
    )
}
export default ProjectsCvEnglish;