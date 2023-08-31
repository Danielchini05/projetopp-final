import { BrowserRouter, Route, Routes } from "react-router-dom"
import Busca from "../paginas/busca/Busca"
import Home from "../paginas/home/Home"
import Conclusao from "../paginas/conclusão/Conclusao"

function Rotas(){

    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="busca" element={<Busca/>}/>
                <Route path="conclusão" element={<Conclusao/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas