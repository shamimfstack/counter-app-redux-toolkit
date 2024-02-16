import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Counter from "../Pages/Counter/Counter";


const MainRoutes = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "counter",
                element: <Counter />
            }
        ]
    }
])


export default MainRoutes;