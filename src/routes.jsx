import { createBrowserRouter } from "react-router";
import MainLayout from "./Layouts/MainLayout";
import Homepage from "./Pages/Homepage";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Homepage/>,
            },
            {
                path:"/Shop",
                element: <Shop/>,
            },
            {
                path: "/Product",
                element: <Product/>,
            },
            {
                path: "Contact",
                element: <Contact/>,
            },
        ]
    }
])