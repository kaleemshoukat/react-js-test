import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppRoutes } from './routing/routing.jsx';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';

function App() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const theme = createTheme({
        palette: {
            primary: {
                main: '#008080',
            },
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1536,
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <AppRoutes />
            <ToastContainer />
        </ThemeProvider>
    );
}

export default App;
