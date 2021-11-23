import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import ListAltIcon from '@material-ui/icons/ListAlt';
import {Link} from 'react-router-dom'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import UpdateIcon from '@material-ui/icons/Update';
import FeedbackIcon from '@material-ui/icons/Feedback';

export function handle_projectclick(){
  window.open("/projects");
}


export const mainListItems = (
  <div>

    <ListItem button component={Link} to="/fachome">
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>

    <ListItem button component={Link} to="/facultyprojectlist">
      <ListItemIcon>
        <ListAltIcon />
      </ListItemIcon>
      <ListItemText primary="Projects" />
    </ListItem>

    <ListItem button component={Link} to="/addproject">
      <ListItemIcon>
        <AddCircleIcon />
      </ListItemIcon>
      <ListItemText primary="Create project" />
    </ListItem>

    <ListItem button  component={Link} to="/updateproject">
      <ListItemIcon>
        <UpdateIcon />
      </ListItemIcon>
      <ListItemText primary="Update project" />
    </ListItem>
    
    <ListItem button component={Link} to="/facultyprofilepage">
      <ListItemIcon>
        {/* <LayersIcon /> */}
        <AccountCircleIcon/>
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>

    <ListItem button component={Link} to="/facultyfeedback">
      <ListItemIcon>
        {/* <LayersIcon /> */}
        <FeedbackIcon/>
      </ListItemIcon>
      <ListItemText primary="Feedback" />
    </ListItem>

  </div>
);
