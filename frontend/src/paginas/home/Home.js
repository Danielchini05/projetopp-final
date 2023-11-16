import Header from "../../components/Header/Header"
import imagemConteudo from "../../assets/imagemHome.png"
import {ImagemHeader, TituloHome, ImgConteudo, ConteudoHome} from "./HomeStyled"
import { useNavigate } from "react-router-dom"
import Footer from "../../components/footer/Footer"

function Home(){
   

    return(
        <>
        <Header   />
        
        <ImagemHeader/>
   

        <ConteudoHome>
            <TituloHome>
                Introdução
            </TituloHome>

            <p>
            A produção e compra de carros elétricos vem aumentando ao passar dos anos e a falta de estrutura para o abastecimento desses veículos é um problema. As pessoas que compra um carro elétrico tem a opção de comprar um carregador para sua residência, no entanto às vezes em alguns casos é necessário o uso de postos públicos que muitas das vezes são difíceis de localizar devido à falta de postos para carregamento de carros elétricos. De acordo com a ABVE, há apenas 1.250 pontos de recarga no país, sendo que 47% deles estão em São Paulo. Algumas empresas de carregadores para veículos elétricos já entraram em parceria com shoppings de bairros mais nobres, portanto o uso dos carros elétricos tende a aumentar junto com a busca por postos de carregamento público para uma recarga rápida.  
            </p>

            <ImgConteudo>
                <img src={imagemConteudo}/>
            </ImgConteudo>

        </ConteudoHome>

        <Footer/>
        </>

        
    )
}

export default Home