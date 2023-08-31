import logo1 from "../../assets/logo1.png"
import { HeaderStyled, Nav } from "./HeaderStyled"


function Header() {
    return (
        <HeaderStyled>
            <img src={logo1} alt="Logo" />
            <Nav>
                <a href="#">Início</a>
                <a href="#">Mapa</a>
                <a href="#">Sobre</a>
            </Nav>
        </HeaderStyled>
    )
}

export default Header