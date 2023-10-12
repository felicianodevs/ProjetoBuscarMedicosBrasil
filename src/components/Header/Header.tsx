import { MdKeyboardArrowDown } from 'react-icons/md'
import {
  ContHeaderStyled,
  HeaderStyled,
  MenuIconStyled,
  StyledPersonIcon
} from '../SideBar/SideBarStyled'
import { VscMenu } from 'react-icons/vsc'

function Header() {
  return (
    <ContHeaderStyled>
      <HeaderStyled>
        <span>
          <VscMenu />
        </span>
        <MenuIconStyled>
          <StyledPersonIcon />
        </MenuIconStyled>

        <ul>
          <li>Izabel</li>
          <li>Izabel@gmail.com</li>
        </ul>

        <MdKeyboardArrowDown />
      </HeaderStyled>
    </ContHeaderStyled>
  )
}

export default Header
