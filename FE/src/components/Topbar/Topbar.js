import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { SiteContext } from "../../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import './Topbar.css'

function Topbar() {
  const navigate = useNavigate();
  const contextInfo = useContext(SiteContext);
  console.log(contextInfo,"logUser");
  const handleUser = (val) => {
    if(val == 'log'){
      navigate("/login");
    }
    else{
      navigate("/register");
    }
   
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Grid container>
                <Grid item md={3} xs={12}>
                  <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Gold Leaf Construction Inc.
                  </Typography>
                </Grid>
                <Grid item md={6} xs={12} className='text-center'>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Primary Portal
                  </Typography>
                </Grid>
                <Grid item md={3} xs={12} className='text-right'>
                  {
                    !contextInfo.userLogged ?
                          <Button size="small" variant="outlined" color="inherit" onClick={() => handleUser('log')}>
                            Login
                          </Button> :
                          <Typography variant="p" component="div" sx={{ flexGrow: 1, textAlign:'end' }}>
                            Welcome User !
                          </Typography>
                  }
                  <Button size="small" color="inherit" variant="outlined" onClick={() => handleUser('reg')} sx={{ marginLeft: '8px' }}>
                    Register
                  </Button>
                </Grid>
            </Grid>

            {/* <Box sx={{ flexGrow: 1}}>
              
            </Box>
            <Box sx={{ flexGrow: 1}}>
              
            </Box>
            <Box sx={{ flexGrow: 1}}>
              
            </Box> */}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Topbar;
