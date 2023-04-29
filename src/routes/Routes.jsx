import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pasges/Home/Home/Home";
import Category from "../pasges/Home/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pasges/News/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pasges/Login/Login/Login";
import Register from "../pasges/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pasges/Shaired/Terms/Terms";

const router = createBrowserRouter([

    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [

            {
                path: '/',
                element: <Navigate to='/category/0'></Navigate>
            },

            {
                path: 'login',
                element: <Login></Login>
            },

            {
                path: 'register',
                element: <Register></Register>
            },

            {
                path: 'terms',
                element: <Terms></Terms>
            }
        ]
    },


    {
        path: 'category',
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)

            }
        ]
    },

    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [

            {
                path: ':id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            },
        ]
    }
])

export default router;