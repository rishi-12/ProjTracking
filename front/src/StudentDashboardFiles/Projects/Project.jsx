import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems } from '../listItems';
// import Chart from './Chart';
// import Deposits from './Deposits';
// import ProjCard from "./Projects/ProjCard";
// import Card from '@material-ui/core/Card';
import PieChart from './PieChart';
import { useParams } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));


export default function Project() {
  const classes = useStyles();

  const {projectId}=useParams();
  console.log(projectId);
  


return(
        <Container maxWidth="lg" className={classes.container}>
            {/* <h1>{props.name}</h1>        */}
          <PieChart />
        </Container>
        
        

  );
}