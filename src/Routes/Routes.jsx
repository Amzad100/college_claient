import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Navber from "../Pages/Shared/Navber/Navber";
import Footer from "../Pages/Shared/Footer/Footer";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import Mycocllege from "../Pages/MyCollege/Mycocllege";
import ViewDetailes from "../Pages/Home/CollegeCard/ViewDetailes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
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
                path: 'colleges',
                element: <Colleges></Colleges>
            },
            {
                path: 'viewDetails/:_id',
                element: <ViewDetailes></ViewDetailes>,
                loader: ({ params }) => fetch(`http://localhost:5000/colleges/${params._id}`)
            },
            {
                path: 'admission',
                element: <Admission></Admission>
            },
            {
                path: 'mycollege',
                element: <Mycocllege></Mycocllege>
            }
        ]
    }
]);

export default router;