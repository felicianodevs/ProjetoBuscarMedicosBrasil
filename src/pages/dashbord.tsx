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
import { VscMenu } from 'react-icons/vsc'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Img from '../assets/Frame 8805.png'
import BoxTotal from '@/components/BoxTotal/BoxTotal'
import TableUsers from '@/components/TableUsers/TableUsers'

const data = [
  {
    user: 'Luiza Souza',
    age: 1,
    email: 'luiza@gmail.com',
    whatsapp: '31 98673-2322',
    specialty: 'Pediatria',
    city: 'Contagem'
  },
  {
    user: 'João Silva',
    email: 'joao@gmail.com',
    whatsapp: '41 98765-4321',
    specialty: 'Ortopedia',
    city: 'Curitiba',
    uf: 'PR',
    userType: 'Médico'
  },
  {
    user: 'Maria Santos',
    email: 'maria@gmail.com',
    whatsapp: '11 98765-1234',
    specialty: 'Ginecologia',
    city: 'São Paulo',
    uf: 'SP',
    userType: 'Médico'
  },
  {
    user: 'Pedro Rocha',
    email: 'pedro@gmail.com',
    whatsapp: '21 98888-5555',
    specialty: 'Cardiologia',
    city: 'Rio de Janeiro',
    uf: 'RJ',
    userType: 'Contratante'
  }
]

const columns = [
  'Usuário',
  'E-mail',
  'WhatsApp',
  'Especialidade',
  'Cidade',
  'Estado',
  'Tipo de usuário'
]

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
          <TableUsers columns={columns} data={data} />
        </StyledTableUser>
      </StyledMain>
    </DashContainerStyled>
  )
}
