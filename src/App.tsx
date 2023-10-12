import GlobalStyles, { BodyStyled } from '@/assets/styles/global-styles'
import { Outlet } from 'react-router-dom'
import SideBar from './components/SideBar'
import Header from './components/Header/Header'
import './index.css'
//
function App() {
  return (
    <>
      <GlobalStyles />
      <BodyStyled>
        <SideBar />
        <div>
          <div className="mx-[]">
            <Header />
          </div>
          <Outlet />
        </div>
      </BodyStyled>
    </>
  )
}

export default App
