import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const Navbar = () => {
    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#ffffff', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <Container maxWidth="lg">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src="https://static.wixstatic.com/media/202854_570469b58fc34ebb8dc8f7f2f8f127b5~mv2.png/v1/fill/w_365,h_89,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logos-1.png" alt="Logo" style={{ height: 40, marginRight: 10 }} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Button component={Link} to="/" color="inherit" sx={{ marginRight: 2, color: '#aa8944' }}>
                            Home
                        </Button>
                        <Button component={Link} to="/registration" color="inherit" sx={{ color: '#aa8944' }}>
                            Registration
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
