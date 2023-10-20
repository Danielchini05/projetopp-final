import { useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header"

function Conclusao(){

    const navigate = useNavigate()

    const goToBusca = () =>{
        navigate('/busca')
    }

    const goToConclusao = () =>{
        navigate('/conclusao')
    }


    return(
        <>
        <Header  />
        </>
    )
}

export default Conclusao