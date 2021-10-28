import React, { useState,useEffect } from 'react';
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
import axios from 'axios';
// import Chart from './Chart';
// import Deposits from './Deposits';
// import ProjCard from "./Projects/ProjCard";
// import Card from '@material-ui/core/Card';
import PieChart from './PieChart';
import { useParams } from 'react-router-dom';
import TaskTable from './TaskTable'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const projs=[{id:'1',name:"B.Tech Project Tracking Dashboard",faculty:"Arunkumar C",teamsize: 5},{id:'2',name:"Alumuni Portal",faculty:"Pratilotamai M",teamsize: 4},{id:'3',name:"Course Website",faculty:"Venkataraman D",teamsize: 6},{id:'32efwewc',name:"Student Profile",faculty:"Gowtham R",teamsize: 5},{id:'45rgav',name:"Workshop Management",faculty:"Senthilkumar M",teamsize: 4}];

const div_style = {
  marginleft: '40%',
}

export default function Project() {
  const classes = useStyles();
  const {projectId}=useParams();
  console.log(projectId);
  const result = projs.filter(id => id.id===projectId);
  console.log(result);
  const [projDetail,setProjDetail]=useState({});

  const Fetchdata = () => {
    axios.post("http://localhost:8080/mavenproject2/Project", projectId
      ).catch(function (error) {
  
      console.log("error");
      console.log(error);
    
      }) 
      .then((response) => {
      
      console.log("sent");
      console.log(response.data);
      // console.log(response.data.length);
      setProjDetail(response.data);
    });
  }
    useEffect(() => {
      Fetchdata();
  }, [])


return(
        <Container maxWidth="lg" className={classes.container}>
            {/* <h1>{props.name}</h1>        */}
          <div >
            <h1 style={div_style}>{projDetail.name}</h1>
            <h3>{projDetail.facultyName}</h3>
          </div>
          <PieChart />
          <br></br>
          <TaskTable projectId={projectId} />
        </Container>
  );
}