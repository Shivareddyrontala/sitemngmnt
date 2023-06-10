import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import './Punch.css';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import personicon from '../../assets/images/personicon.png';

function Punch() {
    const [open, setOpen] = React.useState(false);
    const [actnText,setActnText] = React.useState('In')
    const handleOpen = (val) =>{
        setActnText(val)
        setOpen(true)
    }
    const handleClose = () =>{
        setOpen(false)
    }   

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        // border: '2px solid #ccc',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
      };
  return (
    <div>
        <Box sx={{ flexGrow: 1 }} className='glc_punch_rootbox'>
            <Grid container spacing={2}>
                <Grid item xs={12} style={{textAlign:'center'}}>
                    <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
                        <i>Welcome To Primary Portal <br/> Please Log Your Entry</i>
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Card className='glc_punch_login_logout_card'>
                        <CardContent>
                            <Typography sx={{ fontSize: 25 }} md={{ fontSize : 25 }} color="text.secondary" gutterBottom>
                                Log Time In
                            </Typography>
                            <img src={personicon}></img>
                        </CardContent>
                        <CardActions style={{justifyContent:'center'}}>
                            <div style={{textAlign: 'center'}}>
                                <Button variant="outlined" size="medium" onClick={() => handleOpen('In')}>Add &nbsp; <AddCircleOutlineRoundedIcon/></Button>
                            </div>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                        <Card className='glc_punch_login_logout_card' >
                            <CardContent>
                                <Typography sx={{ fontSize: 25 }} md={{ fontSize : 25 }} color="text.secondary" gutterBottom>
                                    Log Time Out
                                </Typography>
                                <img src={personicon}></img>
                            </CardContent>
                            <CardActions style={{justifyContent:'center'}}>
                                <div style={{textAlign: 'center'}}>
                                    <Button variant="outlined" size="medium" onClick={() => handleOpen('Out')}>Add &nbsp; <AddCircleOutlineRoundedIcon/> </Button>
                                </div>
                            </CardActions>
                        </Card>
                </Grid>
            </Grid>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
                >
                    <Box sx={{ ...style }}>
                        <Typography variant={'p'} color="text.secondary" gutterBottom>
                                Please Provide Your User Name/ID
                        </Typography><br/><br/>
                        <TextField id="outlined-basic" label="User Name" variant="outlined" /> <br/><br/>
                        <Button variant="outlined" size="small">Punch {actnText} &nbsp; 
                            {
                                actnText=='In'? <LoginRoundedIcon /> : <LogoutIcon />
                            }    
                        </Button>
                    </Box>
                </Modal>
        </Box>
    </div>
  )
}

export default Punch