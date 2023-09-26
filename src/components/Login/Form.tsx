import Button from '../ui/button'
import {
  BoxForm,
  CheckStyled,
  Container,
  ContainerForm,
  Input,
  LabelStyled,
  EmailStyled,
  Title,
  PasswordStyled
} from './StyledLogin'

export default function Form() {
  return (
    <Container>
      <BoxForm>
        <Title>
          <h4>seja bem vindo!</h4>
          <h1>Realize seu Login</h1>
        </Title>
        <ContainerForm>
          <form>
            <LabelStyled>
              <EmailStyled>Email</EmailStyled>

              <label htmlFor="nome">
                <Input type="text" placeholder="nome" />
              </label>

              <PasswordStyled>Senha</PasswordStyled>

              <label htmlFor="nome">
                <Input type="password" placeholder="nome" />
              </label>

              <CheckStyled>
                <label htmlFor="nome">
                  <input type="checkbox" name="" id="" />
                  Lembrar-me
                </label>
                <p>esqueci minha senha</p>
              </CheckStyled>
              <Button>Entrar</Button>
            </LabelStyled>
          </form>
        </ContainerForm>
      </BoxForm>
    </Container>
  )
}
