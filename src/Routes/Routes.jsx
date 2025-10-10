import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import AllApps from "../pages/AllApps/AllApps";
import AppDetails from "../pages/AppDetails/AppDetails";
import MyInstallation from "../pages/MyInstallation/MyInstallation";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        hydrateFallbackElement: <p>Loading...</p>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                Component:Home,
            },
            {
                path:'/all',
                element:<AllApps/>

            },
            {
                path:"/details/:id",
                Component:AppDetails,
                errorElement:<p>error</p>

            },
            {
                path:"/installation",
                Component:MyInstallation
            }
        ]

    }
])

export default router