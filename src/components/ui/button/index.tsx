import { ReactNode } from 'react'
import { ButtonStyled } from './StyledButton'

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: ReactNode
}

export default function Button({ children }: Props) {
  return <ButtonStyled>{children}</ButtonStyled>
}
