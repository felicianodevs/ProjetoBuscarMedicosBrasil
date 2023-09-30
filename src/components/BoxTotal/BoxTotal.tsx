import { ContainerStyled } from './StyledBoxTotal'
import RegisterUser from '@/assets/register-users.png'

export default function BoxTotal() {
  return (
    <ContainerStyled>
      <span>
        <div>
          <img src={RegisterUser} alt="" />
        </div>
        <p>
          <h4>TOTAL</h4>
          <h1>1000</h1>
        </p>
      </span>
    </ContainerStyled>
  )
}
