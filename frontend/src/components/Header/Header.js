import { useNavigate } from "react-router-dom"
import logo1 from "../../assets/logo1.png"
import { BotaoNavegacao, HeaderStyled, Nav } from "./HeaderStyled"


function Header() {

    const navigate = useNavigate()

    const goToInicio = () =>{
        navigate('/home')
    }

    const goToBusca = () =>{
        navigate('/busca')
    }

    const goToConclusao = () =>{
        navigate('/conclusao')
    }


    return (
        <HeaderStyled>
            <img src={logo1} alt="Logo" />
            <Nav>
                <BotaoNavegacao onClick={goToInicio}>Início</BotaoNavegacao>
                <BotaoNavegacao onClick={goToBusca} >Mapa</BotaoNavegacao>
                <BotaoNavegacao onClick={goToConclusao}>Sobre</BotaoNavegacao>
            </Nav>
        </HeaderStyled>
    )
}

export default Header