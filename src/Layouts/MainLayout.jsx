import { Outlet } from "react-router"
import Navbar from "../components/Header/Navbar"
const MainLayout = () => {
  return (
    <div className="max-w-[1600px] mx-auto">
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default MainLayout