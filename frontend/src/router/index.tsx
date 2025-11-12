import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Presentation";
import Download from "../pages/Download";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/download", element: <Download /> },
        ],
    },
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}
