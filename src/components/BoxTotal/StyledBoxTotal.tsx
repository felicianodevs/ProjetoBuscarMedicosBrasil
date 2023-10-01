import styled from 'styled-components'

export const ContainerStyled = styled.div`
  width: 289px;
  height: 128px;
  background-color: #f5f5f5;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    display: flex;
    align-items: center;
    margin-right: 60px;
    margin-top: 10px;
    margin-left: 60px;

    p {
      margin-top: 20px;
      padding: 16px;

      h1 {
        padding-top: 20px;
      }
    }
  }

  div {
    background-color: blue;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    align-items: center;

    justify-content: center;
    margin-top: 20px;

    img {
      width: 40px;
      height: 40px;
    }
  }
`
