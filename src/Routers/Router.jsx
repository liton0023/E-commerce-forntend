import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Search from "../pages/Search";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/search',
                element:<Search/>
            },
            {
                path:'/cart',
                element:<Cart/>
            }
        ]
    }
])