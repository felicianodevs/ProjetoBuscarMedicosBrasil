import Img from '../../assets/LogoMed.png'
import { SideBarContainerStyled } from './SideBarStyled'
import { BiPieChartAlt } from 'react-icons/bi'

export default function SideBar() {
  return (
    <SideBarContainerStyled>
      <img src={Img} width={100} height={70} />

      <nav>
        <ul>
          <div>
            <BiPieChartAlt />
            <li>Dashbord</li>
          </div>

          <li>Usuarios Cadastrados</li>

          <li>Planos</li>

          <li>especialidades</li>

          <li>Notificações</li>

          <li>FAQ</li>
        </ul>
      </nav>
    </SideBarContainerStyled>
  )
}
