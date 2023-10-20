import { styled } from "styled-components"

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centralize horizontalmente */
  justify-content: center; /* Centralize verticalmente */
  height: 100vh; /* Use a altura da janela inteira para centralizar verticalmente */
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const FormGroup = styled.div`
  margin: 10px 0;
`

export const Label = styled.label`
  font-weight: bold;
`

export const Input = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 10px;
  cursor: pointer;
`

export const SignUpButton = styled.button`
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 10px ;
  cursor: pointer;
  margin: 5px 0;
`