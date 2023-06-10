import React from 'react';
import Topbar from '../components/Topbar/Topbar';
import Sidebar from '../components/sidebar/Sidebar';
import './Layout.css';
import Grid from '@mui/material/Grid';
function Layoutbasic({ children }) {
  return (
    <>
        <Grid  container>
            <Grid item xs={12} md={12}>
                <Topbar />
            </Grid>
        </Grid>
        <Grid  container>
            <Grid item xs={12} md={2}>
                <Sidebar />
            </Grid>
            <Grid item xs={12} md={10} style={{justifyContent : 'center',alignItems:'center',textAlign:'center'}}>
                {children}
            </Grid>
            {/* <Grid item xs={12} md={2}></Grid> */}
            <Grid item md={4} xs={12}></Grid>
        </Grid>
    </>
  )
}

export default Layoutbasic