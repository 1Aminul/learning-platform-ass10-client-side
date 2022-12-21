import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../Error/Errorpage";
import Blog from "../Pages/Blog/Blog";
import Category from "../Pages/Category/Category";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Courses from "../Pages/Courses/Courses";
import Faq from "../Pages/Faq/Faq";
import Main from "../Pages/Layout/Main";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";

import TermsAndCondition from "../Pages/TermsAndCondition/TermsAndCondition";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
        {path: '/',
         element: <Courses></Courses>,
        loader: ()=> fetch(`https://server-side-brown.vercel.app/Courses`)},
        {path: '/category/:id',
         element: <Category></Category>, 
         loader: ({params})=>fetch(`https://server-side-brown.vercel.app/Courses/${params.id}`)},

         {path:'/checkout/:id',
          element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
          loader: ({params})=> fetch(`https://server-side-brown.vercel.app/Courses/${params.id}`)
        },
         
        {path: '/faq', element: <Faq></Faq>},
        {path: 'blog', element: <Blog></Blog>},
        {path: 'login', element: <LogIn></LogIn>},
        {path: 'register', element: <Register></Register>},
        {path:'terms', element: <TermsAndCondition></TermsAndCondition>}

    ]},
    {path:'*', element: <Errorpage></Errorpage> }

])