import React, { useContext } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {SiteContext} from '../context/GlobalContext';

function Topbar() {
  const logUser = useContext(SiteContext);
    const handleTest = () => {
        logUser.handleUserLog();
    }
  return (
    <div>
         <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Gold Leaf Construction Inc.
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <h3>Primary Portal</h3>
                </Box>
                <Button color="inherit" onClick={handleTest}>Login</Button>
                </Toolbar>
            </AppBar>
            </Box>
    </div>
  )
}

export default Topbar