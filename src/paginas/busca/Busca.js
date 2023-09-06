import { useNavigate } from "react-router-dom"
import logo1 from "../../assets/logo1.png"
import HeaderBusca from "../../components/Header/HeaderBusca"
import { HeaderStyled, Input, Nav } from "./styledBusca"

function Busca(){
    const navigate = useNavigate()

    const goToInicio = () =>{
        navigate('/')
    }
    return(
        <>
            {/* <HeaderStyled>
                <img src={logo1} alt="Logo" />

                <Nav>
                    // <Input type = "search" placeholder = "pesquisar" />
                    <a onClick={goToInicio}>Início</a>
                    <a href="#">Mapa</a>
                    <a href="#">Sobre</a>
                </Nav>
            </HeaderStyled> */}

            <HeaderBusca/>
        </>
    )
}

export default Busca