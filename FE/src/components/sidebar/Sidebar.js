import React,{useContext} from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import {SiteContext} from '../../context/GlobalContext';
import sidebaravtar from '.././../assets/images/sidebaravtar.png';
import Divider from '@mui/material/Divider';
import Typography from "@mui/material/Typography";
import './Sidebar.css'
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const allContextData = useContext(SiteContext);
    const navigate = useNavigate();
    const handleListClk =(value)=>{
        navigate(value)
    }
  return (
    <>
        <List md={{ width: '100%', maxWidth: 360, bgcolor: '#1E1E1E',height: '100vh' }} sx={{ width: '100%', maxWidth: 360, bgcolor: '#1E1E1E',height: '100vh' }}>
            {
                allContextData.userLogged &&(
                   <>
                    <ListItem sx={{justifyContent: 'left'}}>
                        <img src={sidebaravtar}></img>
                        <Typography variant="h7" component="div" sx={{ flexGrow: 1,marginTop: '1rem' }}>
                            Primary Portal
                        </Typography>
                    </ListItem>
                    <Divider/>
                    <ListItem className='cursor_pointer_sbar_list' onClick={() => handleListClk('/employee-info')}>
                        <ListItemAvatar>
                        <Avatar>
                            <GroupIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText md={{fontSize: '5px'}} primary="Team Members" secondary="Manage Team Members Information" />
                    </ListItem>
                    <Divider/>
                    <ListItem className='cursor_pointer_sbar_list'>
                        <ListItemAvatar>
                        <Avatar>
                            <LocationCityIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Manage Building" secondary="Manage Building Information" onClick={() => handleListClk('/employee-info')} />
                    </ListItem>
                    <Divider/>
                    <ListItem className='cursor_pointer_sbar_list'>
                        <ListItemAvatar>
                        <Avatar>
                            <WorkIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Other" secondary="Manage Other Information"  onClick={() => handleListClk('/Other-info')}/>
                    </ListItem>
                    <Divider/>
                   </>
                )
            }
             <ListItem className='cursor_pointer_sbar_list'>
                <ListItemAvatar>
                <Avatar>
                    <TextSnippetIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Time Sheet" secondary="View Timesheet Information"  onClick={() => handleListClk('/timesheet-info')} />
            </ListItem>
        </List>
    </>
  )
}

export default Sidebar