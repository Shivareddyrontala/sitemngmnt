import React,{useEffect, useState,useContext} from 'react'
import Login from '../Login/Login'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PeopleIcon from '@mui/icons-material/People';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate } from "react-router-dom";
import Punch from '../Employee/Punch';
import {SiteContext} from '../../context/GlobalContext';
import Layoutbasic from '../../Layout/Layoutbasic';

function Home(props) {
  const allContextData = useContext(SiteContext);
  useEffect(() => {
  },[]);

  const navigate = useNavigate();
  const goto = (val) => {
    switch (val) {
      case 'employeeBoard':
        navigate('/Employee-Info');
        break;
      case 'otherboard':
        navigate('/Other-info');
        break;
      default:
        break;
    }
  }
  return (
    <Layoutbasic>
    <div>
        {
          allContextData.userLogged ? 
          <> 
            <Grid container spacing={3} style={{padding: '3rem'}}>
              <Grid item  md={4}>
                <Card>
                  <CardContent>
                    <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                       Manage Employees Information
                    </Typography>
                    <PeopleIcon style={{ fontSize: '3rem' }} />
                  </CardContent>
                  <CardActions>
                  <Button variant="contained" size="small" onClick={() => goto('employeeBoard')} endIcon={<ArrowRightAltIcon />}>Goto Dashboard</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item  md={4}>
                <Card>
                  <CardContent>
                    <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                      Manage Building Information
                    </Typography>
                    <ApartmentIcon style={{ fontSize: '3rem' }} />
                  </CardContent>
                  <CardActions>
                  <Button variant="contained" size="small" endIcon={<ArrowRightAltIcon />}>Goto Dashboard</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item md={4}>
                  <Card>
                    <CardContent>
                    <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                      Manage Other Information
                    </Typography>
                    <AddCircleIcon style={{ fontSize: '3rem' }} />
                    </CardContent>
                    <CardActions>
                     <Button  onClick={() => goto('otherboard')} variant="contained" size="small" endIcon={<ArrowRightAltIcon />}>Goto Dashboard</Button>
                    </CardActions>
                  </Card>
              </Grid>
            </Grid>
          </> : <Punch />
        }
    </div>
    </Layoutbasic>
  )
}

export default Home