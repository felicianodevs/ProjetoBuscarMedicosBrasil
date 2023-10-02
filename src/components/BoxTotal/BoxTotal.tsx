import { StringifyOptions } from 'querystring'
import { ContainerStyled } from './StyledBoxTotal'
import RegisterUser from '@/assets/register-users.png'
import { red } from '@mui/material/colors'

interface TotalProps {
  icon: string
  title: string
  value: string
  color: string
}

export default function BoxTotal({ icon, title, value, color }: TotalProps) {
  const divColor = {
    backgroundColor: color
  }
  return (
    <ContainerStyled>
      <span>
        <div style={divColor}>
          <img src={icon} alt="" width={40} height={40} />
        </div>
        <p>
          <h4>{title}</h4>
          <span>{value} </span>
        </p>
      </span>
    </ContainerStyled>
  )
}
