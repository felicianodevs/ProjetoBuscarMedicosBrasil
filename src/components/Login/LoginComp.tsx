import Button from '../ui/button'
import {
  StyledBoxForm,
  CheckStyled,
  StyledContainer,
  StyledContainerForm,
  StyledInput,
  LabelStyled,
  EmailStyled,
  StyledTitle,
  PasswordStyled
} from './StyledLogin'
import { Link } from 'react-router-dom'

export default function LoginComp() {
  return (
    <StyledContainer>
      <StyledBoxForm>
        <StyledTitle>
          <h4>seja bem vindo!</h4>
          <h1>Realize seu Login</h1>
        </StyledTitle>
        <StyledContainerForm>
          <form>
            <LabelStyled>
              <EmailStyled>Email</EmailStyled>

              <label htmlFor="nome">
                <StyledInput type="text" placeholder="nome" />
              </label>

              <PasswordStyled>Senha</PasswordStyled>

              <label htmlFor="nome">
                <StyledInput type="password" placeholder="nome" />
              </label>

              <CheckStyled>
                <label htmlFor="nome">
                  <input type="checkbox" name="" id="" />
                  Lembrar-me
                </label>
                <p>esqueci minha senha</p>
              </CheckStyled>

              <Link to="/dashbord">
                <Button>Entrar</Button>
              </Link>
            </LabelStyled>
          </form>
        </StyledContainerForm>
      </StyledBoxForm>
    </StyledContainer>
  )
}
