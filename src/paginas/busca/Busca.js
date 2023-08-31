import logo1 from "../../assets/logo1.png"
import { HeaderStyled, Input, Nav } from "./styledBusca"

function Busca(){
    return(
        <>
            <HeaderStyled>
                <img src={logo1} alt="Logo" />

                <Nav>
                    <Input type = "search" placeholder = "pesquisar" />
                    <a href="#">Início</a>
                    <a href="#">Mapa</a>
                    <a href="#">Sobreeee</a>
                </Nav>
            </HeaderStyled>
        </>
    )
}

export default Busca