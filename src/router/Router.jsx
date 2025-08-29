import { createBrowserRouter } from "react-router-dom";
import About from "../pages/aboutPage/About";
import Contacts from "../pages/contactsPage/Contacts";
import HomePage from "../pages/homePage/HomePage";
import Layout from "../componant/view/layout/Layout";
import Projects from "../pages/projectsPage/Projects";



const Routing = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/projects",
                element: <Projects />,
            },
            {
                path: "/contacts",
                element: <Contacts />,
            },
        ],
    },
]);

export default Routing