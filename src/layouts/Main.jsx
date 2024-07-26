import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
import Navbar from '../components/Navbar/Navbar';

const Main = () => {
    return (
        <Grid>
            <Navbar />
            <Outlet />
        </Grid>
    );
};

export default Main;
