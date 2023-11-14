import { useNavigate } from "react-router-dom";
import {LoginContainer, Form, FormGroup, Label, Input, Button, SignUpButton} from "../login/styledLogin"

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()


  function criarUsuario() {
    body:{
      email,
      senha
    }
    axios.post("http//localhost",body )
    .then((response) =>{
      alert(response.data.message);

    })
    .catch(err =>{
      console.log(err)
    })
  }


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
            <Input
            value={email}
            onChange={(e) => e.target.value}
            type="email" name="email" />
          </FormGroup>
          <FormGroup>
            <Label>Senha:</Label>
            <Input 
            value={senha}
            onChange={(e) => e.target.value}
            type="password" name="senha" />
          </FormGroup>
          <Button type="submit">Entrar</Button>
        </Form>
        <SignUpButton onClick={goToCadastro}>Cadastre-se</SignUpButton>
      </LoginContainer>
    </>
  );
}

export default Login;

