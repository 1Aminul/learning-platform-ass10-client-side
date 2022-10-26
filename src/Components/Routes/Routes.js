import { createBrowserRouter } from "react-router-dom";
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import Faq from "../Pages/Faq/Faq";
import Main from "../Pages/Layout/Main";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import TermsAndCondition from "../Pages/TermsAndCondition/TermsAndCondition";

export const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
        {path: '/', element: <Courses></Courses>, loader: ()=> fetch(`https://server-side-brown.vercel.app/courses`)},
        {path: '/faq', element: <Faq></Faq>},
        {path: 'blog', element: <Blog></Blog>},
        {path: 'login', element: <LogIn></LogIn>},
        {path: 'register', element: <Register></Register>},
        {path:'terms', element: <TermsAndCondition></TermsAndCondition>}

    ]}
])