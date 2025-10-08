import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import AllApps from "../pages/AllApps/AllApps";
import AppDetails from "../pages/AppDetails/AppDetails";


const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        hydrateFallbackElement: <p>Loading...</p>,
        children:[
            {
                path:'/',
                Component:Home,
                loader:()=>fetch('/appsData.json')
            },
            {
                path:'/all',
                element:<AllApps/>

            },
            {
                path:"/details/:id",
                Component:AppDetails

            }
        ]

    }
])

export default router