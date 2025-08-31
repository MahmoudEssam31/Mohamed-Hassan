import { createBrowserRouter } from "react-router-dom";
import About from "../pages/aboutPage/About";
import Contacts from "../pages/contactsPage/Contacts";
import HomePage from "../pages/homePage/HomePage";
import Layout from "../componant/view/layout/Layout";
import Projects from "../pages/projectsPage/Projects";



const Routing = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <HomePage />,
                },
                {
                    path: "about",
                    element: <About />,
                },
                {
                    path: "projects",
                    element: <Projects />,
                },
                {
                    path: "contacts",
                    element: <Contacts />,
                },
            ],
        },
    ],
    {
        basename: "/Mohamed-Hassan-Portfolio",
    },
);

export default Routing


{/* <div className="d">{
  "name": "mohmed1",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@react-icons/all-files": "^4.1.0",
    "@tailwindcss/vite": "^4.1.12",
    "clsx": "^2.1.1",
    "formik": "^2.4.6",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-icons": "^5.5.0",
    "react-router-dom": "^7.8.1",
    "tailwindcss": "^4.1.12"
  },
  "devDependencies": {
    "@eslint/js": "^9.33.0",
    "@types/react": "^19.1.10",
    "@types/react-dom": "^19.1.7",
    "@vitejs/plugin-react": "^5.0.0",
    "eslint": "^9.33.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "gh-pages": "^6.3.0",
    "globals": "^16.3.0",
    "vite": "^7.1.2"
  }
}</div> */}