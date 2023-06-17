import React, { useEffect, useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Login.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { SiteContext } from "../../context/GlobalContext";
import Layoutbasic from "../../Layout/Layoutbasic";
import { useNavigate } from 'react-router-dom';
import {HTTP_POST} from '../../httpCommon';
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function Login(props) {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const allContextData = useContext(SiteContext);
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async() => {
    let user_data = {password : password,email: username};
    const result = await HTTP_POST('login',user_data);
    
    if(result.data?.status  == 'ok' && result.data?.user){
      localStorage.setItem('token',result.data.user);
      localStorage.setItem('name',result.data.name);
      allContextData.handleUserLog();
      navigate('/');
    }
    else{
      setError(result.data?.error)
    }
  };
  return (
    <>
      <Layoutbasic>
        <div className="login_container">
          <div className="centered_inner_container">
            <Card>
              <CardContent>
                <div className="login_form_el_div">
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Please enter your credentials
                  </Typography>
                </div>
                <div className="login_form_el_div">
                  <TextField fullWidth id="outlined-basic" label="Email" variant="outlined"  value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="login_form_el_div">
                  <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" type={"password"} value={password} onChange={(e) => setPassword(e.target.value)}  />
                </div>
                <div className="login_form_el_div">
                  <Button variant="contained" fullWidth onClick={handleLogin} disabled={!username || !password}>
                    Login
                  </Button>
                </div>
                <div className="login_form_el_div">
                  <Link>Forgot Passsword</Link>
                </div>
              </CardContent>
            </Card>
            {
              error && (<Alert severity="error">{error}</Alert>)
            }
            
          </div>
        </div>
      </Layoutbasic>
    </>
  );
}

export default Login;
