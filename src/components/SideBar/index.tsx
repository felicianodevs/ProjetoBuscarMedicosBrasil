import Img from '../../assets/LogoMed.png'
import { SideBarContainerStyled } from './SideBarStyled'

export default function SideBar() {
  return (
    <SideBarContainerStyled>
      <img src={Img} width={100} height={70} />

      <nav>
        <ul>
          <li>Dashbord</li>

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
