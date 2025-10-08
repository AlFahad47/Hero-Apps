import { Outlet } from "react-router"
import Navbar from "../components/Header/Navbar"
import Footer from "../components/Footer/Footer"
const MainLayout = () => {
  return (
    <div className="max-w-[1600px] mx-auto">
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout