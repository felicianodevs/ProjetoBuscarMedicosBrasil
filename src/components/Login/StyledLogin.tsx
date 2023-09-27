import styled from 'styled-components'
import Img from '../../assets/GreenBack.jpeg'

export const StyledContainer = styled.div`
  /* background-image: url(${Img});
  background-size: cover;
  background-attachment: fixed;*/
  background-repeat: no-repeat;
  background-color: #046639;
  height: 100vh;
  width: 100%;
  height: 100vh;
  /* border: black 10px solid; */
  display: flex;
  align-items: center;
  justify-content: center;
`
export const StyledBoxForm = styled.div`
  width: 32rem;
  height: 38rem;
  background-color: white;
  border-radius: 22px;
  padding: 4rem 4rem;
`
export const StyledContainerForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const StyledInput = styled.input`
  width: 400px;
  height: 50px;
  border-radius: 16px;
  padding: 15px;
  border: solid 1px #00c247;
  margin-top: 24px;
  transition: outline 0.3s;
  &:focus {
    outline: #00c247;
  }
`
export const LabelStyled = styled.div`
  display: flex;
  gap: 0.6rem;
  flex-direction: column;
  transition: border-color 0.3s;
  &:hover {
    border-color: #00c247;
  }

  /* border: black 4px solid; */
`
export const StyledTitle = styled.div`
  margin-bottom: 50px;
`
export const CheckStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 19px;
  margin-inline: 0.3rem;

  input {
    margin-right: 0.7rem;
  }
`
export const EmailStyled = styled.div`
  position: absolute;
  background-color: #ffffff;
  width: 45px;
  text-align: center;
  margin-top: 16px;
  margin-left: 15px;
  color: #00c247;
  font-size: small;
`

export const PasswordStyled = styled.div`
  position: absolute;
  background-color: #fdfdfd;
  width: 49px;
  font-size: small;
  text-align: center;
  margin-top: 98px;
  margin-left: 15px;
  color: #00c247;
`
