import { Outlet } from 'react-router'
import NotificationBar from '../Components/NotificationBar'
import Navbar from '../Components/Navbar'

const MainLayout = () => {
  return (
    <>
      <header>
        <NotificationBar/>
        <Navbar/>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
      </footer>
    </>
  )
}

export default MainLayout
