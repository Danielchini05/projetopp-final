import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"; // Importe o Axios
import { CadastroContainer, Form, FormGroup, Label, Input, Button } from "../cadastro/CadastroStyles";

function Cadastro() {
  const navigate = useNavigate();
  const [nome, setNome]   = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const handleSubmit =  async (e) => {
    e.preventDefault();

    // Dados a serem enviados para a API
    const data = {
      nome,
      email,
      senha
    };

    console.log(data);
    // Realize uma solicitação POST à sua API
    await axios
      .post("http://localhost:3009/api/user/create", data)
      .then((response) => {
        console.log("Cadastro bem-sucedido", response.data);
        // Redirecione para a página de início ou faça outra ação apropriada
        navigate("/login");
      })
      .catch((error) => {
        console.error("Erro no cadastro", error);
        // Trate o erro, como exibindo uma mensagem de erro ao usuário
      });
  };

  return (
    <CadastroContainer>
      <h2>Cadastro</h2>
      <Form>
        <FormGroup>
          <Label>Nome:</Label>
          <Input 
            type="text" 
            name="nome" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
          />
        </FormGroup>
        <FormGroup>
          <Label>Email:</Label>
          <Input 
            type="email" 
            name="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </FormGroup>
        <FormGroup>
          <Label>Senha:</Label>
          <Input 
           type="password" 
           name="senha" 
           value={senha} 
           onChange={(e) => setSenha(e.target.value)} 
          />
        </FormGroup>
        <Button onClick={handleSubmit}>Cadastrar</Button>
      </Form>
    </CadastroContainer>
  );
}

export default Cadastro;
