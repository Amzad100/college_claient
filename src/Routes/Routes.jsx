import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Navber from "../Pages/Shared/Navber/Navber";
import Footer from "../Pages/Shared/Footer/Footer";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import Mycocllege from "../Pages/MyCollege/Mycocllege";
import ViewDetailes from "../Pages/Home/CollegeCard/ViewDetailes";
import SingUp from "../Pages/SignUp/SingUp";
import Login from "../Pages/Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import Errorpage from "../ErrorPage/ErrorPage";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'navber',
                element: <Navber></Navber>
            },
            {
                path: 'footer',
                element: <Footer></Footer>
            },
            {
                path: 'signUp',
                element: <SingUp></SingUp>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'colleges',
                element: <Colleges></Colleges>
            },
            {
                path: 'viewDetails/:id',
                element: <PrivateRoutes><ViewDetailes></ViewDetailes></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://bangladashi-colleges-server.vercel.app/colleges/${params.id}`)
            },
            {
                path: 'admission',
                element: <PrivateRoutes><Admission></Admission></PrivateRoutes>
            },
            {
                path: 'mycollege',
                element: <PrivateRoutes><Mycocllege></Mycocllege></PrivateRoutes>
            },
            {
                path: 'updateprofile',
                element: <UpdateProfile></UpdateProfile>
            }
        ]
    }
]);

export default router;