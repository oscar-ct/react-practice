import {FaQuestion} from "react-icons/fa";
import {Link} from "react-router-dom"

function AboutIconLink() {
    return (
        <div className="about-link">
            {/*<a href="/about">*/}

            {/*<Link to="/about">*/}
            {/*    <FaQuestion size={30}/>*/}
            {/*</Link>*/}

            <Link to={{
                pathname: "/about",
                search: "?sort=name",
                hash: "#hello"
            }}>
                <FaQuestion size={30}/>
            </Link>

            {/*</a>*/}
        </div>
    )
}

export default AboutIconLink