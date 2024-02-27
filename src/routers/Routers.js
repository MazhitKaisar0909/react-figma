import { createBrowserRouter, Outlet } from 'react-router-dom';
import App from '../App';
import Header from "../components/header";
import Footer from '../components/footer';

export const router = createBrowserRouter([
    {
        element: (
            <>
                <Header />
                <Footer />
            </>
        ),
        children: [
            {
                path: '/',
                element: <App />,
            },
    ],
    },
]);

