import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {CadastroContainer, Form, FormGroup, Label, Input, Button, } from "../cadastro/CadastroStyles"; 

function Cadastro() {
  const Navigate = useNavigate();

  const goToHome = () => {
    Navigate('/home');
  }

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
        <Button type="submit" onClick={goToHome}>Cadastrar</Button>
      </Form>
    </CadastroContainer>
  );
}

export default Cadastro;
