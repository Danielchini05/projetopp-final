import { useNavigate } from "react-router-dom"
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non convallis felis. In nec molestie sem. Maecenas consectetur, odio et dignissim varius, lacus elit eleifend risus, eu euismod tellus tortor eu erat. Quisque placerat luctus elit, eget egestas sapien auctor sit amet. Nulla scelerisque diam justo, quis bibendum nunc sagittis eget. Mauris diam justo, viverra non nisl et, tempus tempus libero. Nunc accumsan purus in massa consequat, a dignissim massa pellentesque. Cras eget nibh vitae arcu sollicitudin ultrices at vitae lacus. Phasellus nisi lorem, eleifend in erat ac, pellentesque efficitur nisl. Maecenas quis leo vitae enim tristique consectetur. Ut et nunc ac felis tincidunt semper. Nunc risus urna, feugiat ac sodales nec, maximus non justo.

Sed id viverra dui. Nunc vel eros sed sem condimentum faucibus sed in tellus. Curabitur ac ultricies nulla, a mattis nulla. Morbi lacinia posuere tempor. Nulla tellus enim, pulvinar ut ligula nec, tempus efficitur turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc id metus cursus, consectetur odio nec, ultricies risus. Fusce iaculis enim est, vitae varius lectus volutpat in. Proin porttitor leo est, non congue risus efficitur sed. Integer eu rhoncus nibh. Etiam imperdiet lorem eu lorem mollis, vitae ultricies quam placerat. Pellentesque tempor ante in quam tincidunt, eget egestas turpis efficitur. Donec consectetur urna neque, at euismod nisl finibus ac. Etiam fringilla tellus vitae accumsan maximus.

Quisque ut venenatis ante, sit amet consectetur ante. Pellentesque dignissim eu sem quis egestas. Maecenas sed pharetra magna. Curabitur mollis nisi vel dui rutrum cursus. Quisque in porta metus. Nullam nisi nunc, finibus venenatis elementum ut, ultrices nec turpis. Donec blandit sed sem at pellentesque. Curabitur mattis nunc non nulla interdum semper. Duis molestie, lacus et porttitor posuere, mi lectus fermentum eros, eu hendrerit velit lorem ac turpis. Nunc sit amet lacus eget neque auctor euismod quis ac mauris. Cras iaculis odio a nisi tempus, quis fringilla purus tincidunt. Proin nec odio tortor. Praesent ornare molestie sem, et pharetra elit consectetur eu. Aliquam ac ullamcorper dolor. Nam sodales maximus sapien quis ultrices. Mauris sodales nisl sed feugiat imperdiet.

Nam egestas justo in tempor vehicula. Cras id ullamcorper felis. Curabitur tellus velit, aliquam fringilla lobortis quis, fringilla et sapien. Nullam aliquet lacus vel cursus auctor. Morbi lacinia commodo nibh, vitae tristique tellus varius eget. Donec venenatis ac nibh pharetra luctus. Sed ac gravida dolor, eu sollicitudin velit. Integer nec sodales lectus. Donec vitae fringilla felis. Curabitur ante dui, lobortis ut hendrerit ut, tempor a sapien. Vivamus accumsan nunc leo, vel tempus risus ullamcorper vel. Maecenas iaculis purus eget lectus ultrices, sit amet varius ex tristique. Nulla nec posuere eros. Etiam feugiat pretium mi. Mauris blandit elementum libero, in sollicitudin tortor egestas quis. Vestibulum ut suscipit urna.

Praesent tristique, nulla at iaculis molestie, nibh arcu tincidunt elit, volutpat pharetra enim odio fringilla nunc. In sagittis elit a congue facilisis. Suspendisse nec aliquam elit. Suspendisse ac semper purus. Sed pharetra lorem risus, vel dictum lacus accumsan et. Duis at ex finibus, dictum lorem condimentum, hendrerit libero. Integer pharetra turpis vitae massa venenatis sollicitudin. Sed lacinia laoreet felis ac facilisis. Sed eget turpis ut massa feugiat consequat. Mauris vestibulum quam vitae metus egestas, eu gravida libero interdum. Pellentesque a turpis turpis. Donec ut lobortis ex. Vestibulum in mi dignissim, dictum elit eu, sodales leo.
            </p>
        </ConteudoConclusao>
        </>
    )
}

export default Conclusao