import logo1 from "../../assets/logo1.png"
import { HeaderStyled, Nav } from "./HeaderStyled"


function Header(props) {

    return (
        <HeaderStyled>
            <img src={logo1} alt="Logo" />
            <Nav>
                <a href="#">Início</a>
                <a onClick={props.goToBusca} >Mapa</a>
                <a href="#">Sobre</a>
            </Nav>
        </HeaderStyled>
    )
}

export default Header