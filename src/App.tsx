import GlobalStyles, { BodyStyled } from '@/assets/styles/global-styles'
import { Outlet } from 'react-router-dom'
import SideBar from './components/SideBar'

function App() {
  return (
    <>
      <GlobalStyles />
      <BodyStyled>
        <SideBar />
        <Outlet />
      </BodyStyled>
    </>
  )
}

export default App
