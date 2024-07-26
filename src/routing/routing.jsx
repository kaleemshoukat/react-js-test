import {Route, Routes} from 'react-router-dom';
import Main from '../layouts/Main';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import {
    entryRoute,
    exitRoute,
} from './constants/routes';
import Entry from '../components/Entry/Entry';
import Exit from '../components/Exit/Exit';

const mainLayoutRoutes = [
    {
        path: entryRoute,
        element: (
            <Entry/>
        ),
    },
    {
        path: exitRoute,
        element: (
            <Exit/>
        ),
    },
];

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>}>
                {mainLayoutRoutes.map((route) => (
                    <Route path={route.path} element={route.element} key={route.path}/>
                ))}
            </Route>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    );
};
