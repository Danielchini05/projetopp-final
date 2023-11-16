import { BrowserRouter, Route, Routes } from "react-router-dom"
import Busca from "../paginas/busca/Busca"
import Home from "../paginas/home/Home"
import Conclusao from "../paginas/conclusao/Conclusao"
import Cadastro from "../paginas/cadastro/Cadastro"
import Login from "../paginas/login/Login"

function Rotas(){

    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}/>
                <Route path="cadastro" element={<Cadastro/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="busca" element={<Busca/>}/>
                <Route path="conclusao" element={<Conclusao/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas