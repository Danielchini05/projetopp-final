import { useNavigate } from "react-router-dom"
import logo1 from "../../assets/logo1.png"
import { Input } from "../../paginas/busca/styledBusca"
import { HeaderStyled, Nav } from "./HeaderStyled"


function HeaderBusca() {

    const navigate = useNavigate()
        
    const goToInicio = () =>{
        navigate('/')
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
            <Input type = "search" placeholder = "pesquisar" />
                <a onClick={goToInicio}>Início</a>
                <a onClick={goToBusca} >Mapa</a>
                <a onClick={goToConclusao}>Sobre</a>
            </Nav>
        </HeaderStyled>
    )
}

export default HeaderBusca