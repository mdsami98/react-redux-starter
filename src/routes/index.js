import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation, Route } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '../layouts/MainLayout';

const Loadable = (Component) => (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { pathname } = useLocation();

    return (
        <Suspense fallback='Loading...'>
            <Component {...props} />
        </Suspense>
    );
};

const Router = () => {
    return useRoutes([
        {
            path: '/dashboard',
            element: (
                <MainLayout>
                    <Dashboard />
                </MainLayout>
            )
        },
        {
            path: '/login',
            element: (
                <AuthLayout>
                    <Login />
                </AuthLayout>
            )
        },
        {
            path: '/register',
            element: (
                <AuthLayout>
                    <Register />
                </AuthLayout>
            )
        }
    ]);
};

export default Router;

const Dashboard = Loadable(lazy(() => import('../pages/dashboard/dashboard')));
const Login = Loadable(lazy(() => import('../pages/auth/Login')));
const Register = Loadable(lazy(() => import('../pages/auth/Register')));
