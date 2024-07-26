import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    MenuItem,
    Menu,
    Hidden,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/free-ticket.png';
import {
    entryRoute,
    exitRoute,
} from '../../routing/constants/routes';

const linkStyle = {
    textDecoration: 'none',
    color: '#000000',
};

const activeLinkStyle = {
    ...linkStyle,
    color: '#ff8899'
};

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const location = useLocation();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const isActive = (path) => location.pathname === path;

    return (
        <AppBar position="static" sx={{ backgroundColor: 'white' }}>
            <Toolbar>
                <Hidden mdUp>
                    {/* Show menu icon for small screens */}
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="menu"
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                        style={{ color: 'teal' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <Link to={entryRoute} style={isActive(entryRoute) ? activeLinkStyle : linkStyle}>
                            <MenuItem onClick={handleClose}>Entry</MenuItem>
                        </Link>
                        <Link to={exitRoute} style={isActive(exitRoute) ? activeLinkStyle : linkStyle}>
                            <MenuItem onClick={handleClose}>Exit</MenuItem>
                        </Link>
                    </Menu>
                </Hidden>

                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <img
                        loading={'lazy'}
                        src={logo}
                        alt="Logo"
                        style={{ maxHeight: '50px' }}
                    />
                </Typography>

                <Hidden smDown>
                    {/* Hide menu icon for larger screens */}
                    <Link to={entryRoute} style={isActive(entryRoute) ? activeLinkStyle : linkStyle}>
                        <MenuItem color="inherit">Entry</MenuItem>
                    </Link>
                    <Link to={exitRoute} style={isActive(exitRoute) ? activeLinkStyle : linkStyle}>
                        <MenuItem color="inherit">Exit</MenuItem>
                    </Link>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
