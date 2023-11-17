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
                Os carros elétricos, fruto de uma constante evolução tecnológica, emergem como protagonistas na busca por uma mobilidade mais sustentável. Seus benefícios ambientais são inegáveis, com a redução significativa das emissões de gases de efeito estufa, contribuindo para mitigar as mudanças climáticas. Além disso, a eficiência energética dos motores elétricos e os custos operacionais mais baixos proporcionam uma perspectiva econômica atrativa para os consumidores.

                No entanto, os desafios persistem. A autonomia limitada das baterias e a ainda em desenvolvimento infraestrutura de recarga são aspectos que demandam atenção contínua. O custo inicial mais elevado também figura como uma barreira à adoção em massa. Contudo, governos ao redor do mundo têm respondido a esse desafio com incentivos fiscais e subsídios para impulsionar a transição para os veículos elétricos.  
            </p>

            <ImgConteudo>
                <img src={imagemConteudo}/>
            </ImgConteudo>

            <p>
                Além dos aspectos econômicos, a produção e descarte de baterias levantam preocupações ambientais. A mineração de materiais como lítio e cobalto, essenciais na fabricação das baterias de íon de lítio, demanda uma abordagem cuidadosa para minimizar seus impactos negativos. A busca por métodos sustentáveis de produção e reciclagem de baterias é uma área crucial de pesquisa e desenvolvimento.

                Assim, enquanto os carros elétricos prometem um futuro mais limpo e eficiente, é fundamental reconhecer tanto seus benefícios quanto desafios. O compromisso contínuo com a inovação, aliado a políticas públicas favoráveis, é essencial para acelerar a transição para uma frota de veículos mais sustentável e moldar um cenário onde a mobilidade elétrica seja acessível e ambientalmente responsável.
            </p>

        </ConteudoHome>

        <Footer/>
        </>

        
    )
}

export default Home