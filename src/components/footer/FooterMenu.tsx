import { Link } from "react-router-dom"

function FooterMenu(){
    return(
        <div>
            <Link to={"/"}> About </Link> {"  *  "}
            <Link to={"/"}> Contact </Link> {" * "}
            <Link to={"/"}> Terms of Use </Link> {" * "}
            <Link to={"/"}> Privacy Policy </Link>
            <br/>
            <br/>
            <p> Your Website 2020. All Rights Reserved.</p>
        </div>
    )
}

export default FooterMenu