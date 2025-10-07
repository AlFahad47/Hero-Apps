import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";


const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        hydrateFallbackElement: <p>Loading...</p>,
        children:[
            {
                path:'/',
                Component:Home
            }
        ]

    }
])

export default router