import { Outlet } from "react-router"
import Navbar from "../components/Header/Navbar"
import Footer from "../components/Footer/Footer"
import { ToastContainer } from "react-toastify"
const MainLayout = () => {
  return (
    <div className="max-w-[1600px] mx-auto">
        <Navbar/>
        <Outlet/>
        <Footer/>
        <ToastContainer/>
    </div>
  )
}

export default MainLayout