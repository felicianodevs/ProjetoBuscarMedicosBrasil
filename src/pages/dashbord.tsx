import SideBar from '@/components/SideBar'
import { DashContainerStyled, Text } from '@/components/SideBar/SideBarStyled'

export default function DashBord() {
  return (
    <DashContainerStyled>
      <SideBar />
      <Text>
        <h1>texto de teste</h1>
      </Text>
    </DashContainerStyled>
  )
}
