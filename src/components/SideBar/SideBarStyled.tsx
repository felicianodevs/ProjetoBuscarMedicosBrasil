import { GoPerson } from 'react-icons/go'
import styled from 'styled-components'

export const DashContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
`
export const ContHeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: black; */
  width: 100%;
`

export const StyledMain = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: #ff0404; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: solid 8px yellow; */
  display: flex;
  flex-direction: column;

  /* border-radius: 24px; */
`
export const ImageContainer = styled.div`
  display: flex;

  /* align-items: center; */
`

export const BoxWhite1 = styled.div`
  /* flex: 1; */
  width: 158%;
  height: 220px;
  background-color: ffffff;
  /* border: solid 8px yellow; */
  background-color: white;
  margin-top: 20px;
  padding: 10px;
  border-radius: 24px;
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;

    H3 {
      margin-bottom: 10px;
    }

    span {
      margin-bottom: 35px;
    }
  }
`

export const BoxContainer = styled.div`
  width: 100%;
  /* height: 500px; */
  display: flex;
  flex-direction: row;
  border: solid 3px white;

  img {
    width: 586px;
    height: 515px;
  }
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
    width: 184px;
    height: 80px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    color: white;
    list-style: none;
    /* font-size: 1.2rem; */
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

export const MenuIconStyled = styled.div`
  width: 56px;
  height: 56px;
  background-color: #046639;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: solid 4px black; */
`

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  /* height: 130px; */
  align-items: center;
  padding: 1rem;

  span {
    display: flex;
    align-items: end;
    gap: 1rem;
    margin-left: 49rem;
  }

  ul {
    list-style: none;
  }

  li {
    padding: 0.3rem;
  }
`
export const StyledPersonIcon = styled(GoPerson)`
  width: 32px;
  height: 32px;
  color: white;
`
export const StyledTableUser = styled.div`
  width: 100%;
  flex: 1;
  /* border: solid 8px blue; */
  background-color: #f5f5f5;
  padding: 54px;
`
