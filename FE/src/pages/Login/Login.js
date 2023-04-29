import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Login.css'

function login() {
  return (
    <>
        <div className='login_container'>
            <div className='centered_inner_container'>
                    <div className='login_form_el_div'>
                        <h3>Welcome User</h3>
                    </div>
                    <div className='login_form_el_div'>
                        <TextField fullWidth id="outlined-basic" label="User Name" variant="outlined" />
                    </div>
                    <div className='login_form_el_div'>
                        <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" type={'password'} />
                    </div>
                    <div className='login_form_el_div'>
                        <Button variant="contained" fullWidth>
                            Login
                        </Button>
                    </div>
            </div>
        </div>
    </>
  )
}

export default login