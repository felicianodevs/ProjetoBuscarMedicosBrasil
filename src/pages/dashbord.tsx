import SideBar from '@/components/SideBar'
import {
  DashContainerStyled,
  ContHeaderStyled,
  MenuIconStyled,
  HeaderStyled,
  StyledPersonIcon,
  BoxWhite1,
  BoxContainer,
  StyledMain,
  StyledTableUser
} from '@/components/SideBar/SideBarStyled'
import { BiPieChartAlt } from 'react-icons/bi'
import { GoPerson } from 'react-icons/go'
import { VscMenu } from 'react-icons/vsc'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Img from '../assets/Frame 8805.png'
import BoxTotal from '@/components/BoxTotal/BoxTotal'
import RegisterUser from '@/assets/register-users.png'

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
        {/* <img src={Img} /> */}

        <BoxContainer>
          <img src={Img} />
          <div>
            <BoxWhite1>
              <div>
                <h3>MEDICOS</h3>
                <span>
                  <BoxTotal />
                </span>
              </div>

              <BoxTotal />
              <BoxTotal />
            </BoxWhite1>

            <BoxWhite1>
              <div>
                <h3>CONTRATANTES</h3>
                <span>
                  <BoxTotal />
                </span>
              </div>
              <BoxTotal />
              <BoxTotal />
            </BoxWhite1>
          </div>
        </BoxContainer>
        <StyledTableUser>
          <h1>PARTE DE BAIXO DO CODIGO</h1>
        </StyledTableUser>
      </StyledMain>
    </DashContainerStyled>
  )
}
