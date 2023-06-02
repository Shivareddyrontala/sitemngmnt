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

function Sidebar() {
const allContextData = useContext(SiteContext);

  return (
    <>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {
                allContextData.userLogged &&(
                   <>
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                            <GroupIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Team Members" secondary="Manage Team Members Information" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                            <LocationCityIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Manage Building" secondary="Manage Building Information" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                            <WorkIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Other" secondary="Manage Other Information" />
                    </ListItem>
                   </>
                )
            }
             <ListItem>
                <ListItemAvatar>
                <Avatar>
                    <TextSnippetIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Time Sheet (Beta)" secondary="Coming Soon ..." />
            </ListItem>
        </List>
    </>
  )
}

export default Sidebar