import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import {LoginContainer, Form, FormGroup, Label, Input, Button, SignUpButton} from "../login/styledLogin"

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body ={
      email,
      senha
    }
  
    try {
      const response = await axios.post('http://localhost:3009/api/auth/login', body);
  
      if (response.status === 200) {
        // Aqui você pode decidir como deseja lidar com o token retornado pela API
        // Normalmente, você o armazenaria em algum estado global ou local
        console.log('Login bem-sucedido!');
        goToHome(); // Redireciona para a página inicial após o login
      } else {
        console.error('Falha no login');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };
  
  const goToHome = () => {
    navigate("/home");
  }

  const goToCadastro = () => {
    navigate("/cadastro")
  }


  return (
    <>
      <LoginContainer>
        <h2>Login</h2>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Email:</Label>
            <Input
              value={email}
              type="email" 
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Senha:</Label>
            <Input 
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              type="password" 
              name="senha"
            />
          </FormGroup>
          <Button type="submit" onClick={goToHome}>Entrar</Button>
        </Form>
        <SignUpButton onClick={goToCadastro}>Cadastre-se</SignUpButton>
      </LoginContainer>

      <Footer/>
    </>
  );
}

export default Login;

