import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"; // Importe o Axios
import { CadastroContainer, Form, FormGroup, Label, Input, Button } from "../cadastro/CadastroStyles";

function Cadastro() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dados a serem enviados para a API
    const data = {
      nome: state.nome,
      email: state.email,
      senha: state.senha,
    };

    // Realize uma solicitação POST à sua API
    axios
      .post("https://localhost:3009/user/create", data)
      .then((response) => {
        console.log("Cadastro bem-sucedido", response.data);
        // Redirecione para a página de início ou faça outra ação apropriada
        navigate("/home");
      })
      .catch((error) => {
        console.error("Erro no cadastro", error);
        // Trate o erro, como exibindo uma mensagem de erro ao usuário
      });
  };

  return (
    <CadastroContainer>
      <h2>Cadastro</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Nome:</Label>
          <Input type="text" name="nome" value={state.nome} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>Email:</Label>
          <Input type="email" name="email" value={state.email} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>Senha:</Label>
          <Input type="password" name="senha" value={state.senha} onChange={handleChange} />
        </FormGroup>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </CadastroContainer>
  );
}

export default Cadastro;
