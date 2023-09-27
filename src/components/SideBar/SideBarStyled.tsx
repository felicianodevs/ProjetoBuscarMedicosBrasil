import styled from 'styled-components'

export const DashContainerStyled = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`

export const Text = styled.div`
  background-color: red;
  flex: 1;
`

export const SideBarContainerStyled = styled.div`
  background-color: #046639;
  width: 17rem;
  display: flex;
  padding: 2rem 1rem 0 1rem;

  align-items: center;
  gap: 4rem;
  flex-direction: column;

  img {
    width: 180px;
    height: 80px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    color: white;
    list-style: none;
    font-size: 1.2rem;
  }

  li {
    :hover {
      background-color: #b4e08e;
      color: #046639;
    }
    padding: 1rem;
    border-radius: 0.6rem;
    :visited {
      background-color: #b4e08e;
    }
  }
`
