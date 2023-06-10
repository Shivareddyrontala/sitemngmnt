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
import {axiosBase} from '../../httpCommon';

function Login(props) {
  const allContextData = useContext(SiteContext);
  const navigate = useNavigate();
  const handleLogin = async() => {
    const result = await  axiosBase.get('http://localhost:8000/hello');
    console.log(result,"result ===>");

    return;
    const setUserLogged = allContextData.handleUserLog();
    if(setUserLogged) 
    navigate('/');

  };
  return (
    <>
      <Layoutbasic>
        <div className="login_container">
          <div className="centered_inner_container">
            <Card>
              <CardContent>
                <div className="login_form_el_div">
                  <h3>Welcome User</h3>
                </div>
                <div className="login_form_el_div">
                  <TextField fullWidth id="outlined-basic" label="User Name" variant="outlined" />
                </div>
                <div className="login_form_el_div">
                  <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" type={"password"} />
                </div>
                <div className="login_form_el_div">
                  <Button variant="contained" fullWidth onClick={handleLogin}>
                    Login
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Layoutbasic>
    </>
  );
}

export default Login;
