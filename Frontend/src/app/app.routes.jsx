import { createBrowserRouter, Outlet } from "react-router"
import Register from "../features/auth/pages/Register"
import Login from "../features/auth/pages/Login"
import CreateProduct from "../features/products/pages/createproduct"
import Dashboard from "../features/products/pages/Dashboard"
import Protected from "../features/auth/components/Protected"
import Home from "../features/products/pages/Home"
import ProductDetails from "../features/products/pages/ProductDetails"

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/product/:productId",
        element: <ProductDetails />,
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/seller",
        element: <Outlet />,
        children: [
            {
                path: "/seller/create-product",
                element: <Protected requiredRole="seller"><CreateProduct /></Protected>
            },
            {
                path: "/seller/dashboard",
                element: <Protected requiredRole="seller"><Dashboard /></Protected>
            }
        ]
    }
])

