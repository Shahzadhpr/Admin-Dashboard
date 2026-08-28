import { createBrowserRouter, Outlet } from "react-router";
import Home from "./pages/Home/Home"
import Products from "./pages/Products/Products"
import Tickets from "./pages/Tickets/Tickets"
import TicketsDetails from "./pages/TicketsDetails/TicketsDetails"
import Users from "./pages/Users/Users"
import Comments from "./pages/Comments/Comments"
import NotFound from "./pages/NotFound/NotFound"
import DashboardLayout from "./components/Layout/dashboardLayout"


const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout/>,
        children : [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/Products",
                element: <Products/>
            },
            {
                path: "/Users",
                element: <Users/>
            },
            {
                path: "/Tickets",
                element: <Tickets/>
            },
            {
                path: "/Comments",
                element: <Comments/>
            },
            {
                path: "/TicketsDetails",
                element: <TicketsDetails/>
            },
            {
                path: "*",
                element: <NotFound/>
            },
        ]
    },
])


export default router