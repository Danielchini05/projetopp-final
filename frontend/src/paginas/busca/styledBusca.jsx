import styled from "styled-components"
import search from "../../assets/search.png"

export const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px 0 20px;
`

export const Nav = styled.nav`
    display: flex;
    gap: 32px;
`

export const Input = styled.input`
    background-image: url(${search});
    background-color:#D6D5D5;    
    background-repeat: no-repeat;
    background-position-y: 50%;
    background-position-x: 5px; 
    border: none;
    border-radius: 10px;
    padding-left: 30px;
    width: 290px;
    height: 30px;
`