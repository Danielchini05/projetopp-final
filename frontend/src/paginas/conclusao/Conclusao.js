import { useNavigate } from "react-router-dom"
import Footer from "../../components/footer/Footer"
import Header from "../../components/Header/Header"
import { ConteudoConclusao } from "./Styled"

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
        <ConteudoConclusao>
            <p>
            Bem-vindo ao nosso site informativo sobre carros elétricos no Vale do Sinos, uma iniciativa desenvolvida como trabalho de conclusão de curso pelo aluno Daniel Chini, do Ensino Médio da Escola Senac São Leopoldo. Aqui, você encontrará uma fonte abrangente de informações sobre a revolução dos veículos elétricos, destacando os benefícios ambientais e econômicos dessa tecnologia inovadora. Além disso, facilitamos sua jornada elétrica no Vale do Sinos com um mapa interativo que permite localizar com facilidade os postos de carregamento na região. Explore, aprenda e conecte-se à mobilidade sustentável conosco. Este é um passo em direção a um futuro mais limpo e eficiente.
            </p>
        </ConteudoConclusao>
        <Footer/>
        </>
    )
}

export default Conclusao