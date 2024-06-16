import { Link } from "react-router-dom"
import FooterSocialStyled from "./FooterSocialStyled";
import facebok from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";


function FooterMenu(){
    return(
        <FooterSocialStyled>
            <Link to={"/"}> <img src={facebok} alt="" /> </Link>
            <Link to={"/"}> <img src={twitter} alt="" /> </Link>
            <Link to={"/"}> <img src={instagram} alt="" /> </Link>
        </FooterSocialStyled>
    )
}

export default FooterMenu