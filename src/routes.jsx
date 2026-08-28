import { createBrowserRouter, Outlet } from "react-router";
import Home from "./pages/Home/Home"
import Product from "./pages/Products/Products"
import Tickets from "./pages/Tickets/Tickets"
import TicketsDetails from "./pages/TicketsDetails/TicketsDetails"
import Users from "./pages/Users/Users"
import Comments from "./pages/Comments/Comments"
import NotFound from "./pages/NotFound/NotFound"
import clsx from "clsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div className={clsx("text-3xl", "text-center", "text-cyan-900", "m-3")}>
                Layout
                <Outlet/>
            </div>
        ),
        children : [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/Product",
                element: <Product/>
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
                path: "/*",
                element: <NotFound/>
            },
        ]
    },
])

export default router