import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ProjCard from "./Projects/ProjCard";



const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },

}));

export default function ProjectList() {
  const classes = useStyles();

  const projs=[{id:'1r3fwac',name:"B.Tech Project Tracking Dashboard",faculty:"Arunkumar C",teamsize: 5},{id:'1r3saa',name:"Alumuni Portal",faculty:"Pratilotamai M",teamsize: 4},{id:'23gvrew',name:"Course Website",faculty:"Venkataraman D",teamsize: 6},{id:'32efwewc',name:"Student Profile",faculty:"Gowtham R",teamsize: 5},{id:'45rgav',name:"Workshop Management",faculty:"Senthilkumar M",teamsize: 4}];


  return (

    
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={2} >
          {projs.map((proj)=>(
          <Grid item xs={3}>
              <ProjCard id= {proj.id} name={proj.name} faculty={proj.faculty} teamsize={proj.teamsize} />
              </Grid> 
            ))}
          </Grid>           
          {/* <PieChart /> */}
        </Container>
        
        
     
  );
}