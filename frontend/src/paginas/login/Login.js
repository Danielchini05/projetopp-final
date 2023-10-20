import { useNavigate } from "react-router-dom";
import {LoginContainer, Form, FormGroup, Label, Input, Button, SignUpButton} from "../login/styledLogin"

function Login() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/home");
  }

  const goToCadastro = () => {
    navigate("/cadastro")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione a lógica de autenticação aqui, como verificar o email e a senha.
    // Após a autenticação bem-sucedida, você pode redirecionar para a página de início.
    goToHome();
  };

  return (
    <>
      <LoginContainer>
        <h2>Login</h2>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Email:</Label>
            <Input type="email" name="email" />
          </FormGroup>
          <FormGroup>
            <Label>Senha:</Label>
            <Input type="password" name="senha" />
          </FormGroup>
          <Button type="submit">Entrar</Button>
        </Form>
        <SignUpButton onClick={goToCadastro}>Cadastre-se</SignUpButton>
      </LoginContainer>
    </>
  );
}

export default Login;

