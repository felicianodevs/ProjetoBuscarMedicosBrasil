import {
  DashContainerStyled,
  ContHeaderStyled,
  MenuIconStyled,
  HeaderStyled,
  StyledPersonIcon,
  BoxWhite1,
  BoxContainer,
  StyledMain,
  StyledTableUser,
  H3
} from '@/components/SideBar/SideBarStyled'
import { VscMenu } from 'react-icons/vsc'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Img from '../assets/Frame 8805.png'
import BoxTotal from '@/components/BoxTotal/BoxTotal'
import TableUsers from '@/components/TableUsers/TableUsers'
import RegisterUser from '@/assets/register-users.png'
import Hirer from '@/assets/hirer.png'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
// import "../index.css"

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

export default function DashBoard() {
  return (
    <DashContainerStyled>
      <StyledMain>
        <BoxContainer>
          <img src={Img} />
          <div>
            <BoxWhite1>
              <H3>MEDICOS</H3>

              <div>
                <BoxTotal
                  icon={RegisterUser}
                  title={'Total'}
                  value={'1000'}
                  color={'#004CE8'}
                />
                <BoxTotal
                  icon={RegisterUser}
                  title={'Disponiveis'}
                  value={'900'}
                  color={'#00C247'}
                />
                <BoxTotal
                  icon={RegisterUser}
                  title={'Indisponiveis'}
                  value={'100'}
                  color={'#FF3333'}
                />
              </div>
            </BoxWhite1>

            <BoxWhite1>
              <H3>MEDICOS</H3>

              <div>
                <BoxTotal
                  icon={Hirer}
                  title={'Total'}
                  value={'1000'}
                  color={'#FFB801'}
                />
                <BoxTotal
                  icon={Hirer}
                  title={'Ativos'}
                  value={'900'}
                  color={'#00C247'}
                />
                <BoxTotal
                  icon={Hirer}
                  title={'Inativos'}
                  value={'100'}
                  color={'#FF3333'}
                />
              </div>
            </BoxWhite1>
          </div>
        </BoxContainer>
      </StyledMain>
      <StyledTableUser>
        <TableUsers columns={columns} data={data} />
      </StyledTableUser>
    </DashContainerStyled>
  )
}
