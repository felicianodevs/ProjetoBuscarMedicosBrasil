import SideBar from '@/components/SideBar'
import {
  DashContainerStyled,
  ContHeaderStyled,
  MenuIconStyled,
  HeaderStyled,
  StyledPersonIcon,
  BoxWhite1,
  BoxWhite2,
  BoxContainer,
  StyledMain,
  StyledTableUser
} from '@/components/SideBar/SideBarStyled'
import { BiPieChartAlt } from 'react-icons/bi'
import { GoPerson } from 'react-icons/go'
import { VscMenu } from 'react-icons/vsc'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Img from '../assets/Frame 8805.png'
export default function DashBord() {
  return (
    <DashContainerStyled>
      <ContHeaderStyled>
        <HeaderStyled>
          <BiPieChartAlt />
          <VscMenu />
          <span>
            <MenuIconStyled>
              <StyledPersonIcon />
            </MenuIconStyled>

            <ul>
              <li>Izabel</li>
              <li>Izabel@gmail.com</li>
            </ul>
          </span>
          <MdKeyboardArrowDown />
        </HeaderStyled>
      </ContHeaderStyled>

      <StyledMain>
        <img src={Img} />

        <BoxContainer>
          <div className="BoxWhite">
            <BoxWhite1>
              <p>TEXTO 1</p>
            </BoxWhite1>
            <BoxWhite1>
              <p>texto 2</p>
            </BoxWhite1>
          </div>
        </BoxContainer>
      </StyledMain>

      <StyledTableUser>
        <h1>PARTE DEBAIRO DO CODIGO</h1>
      </StyledTableUser>
    </DashContainerStyled>
  )
}
