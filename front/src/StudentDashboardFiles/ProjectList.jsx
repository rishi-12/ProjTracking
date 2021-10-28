import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ProjCard from "./Projects/ProjCard";
import axios from "axios";


const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },

}));

export default function ProjectList(props) {
  const classes = useStyles();
  const stud_id="1";
  var projs1;
  const [projs,setProjs]=useState([]);
  axios.post("http://localhost:8080/mavenproject2/ProjectList", stud_id
    ).catch(function (error) {

    console.log("error");
    console.log(error);
  
    }) 
    .then((response) => {
    
    console.log("sent");
    console.log(response.data);
    console.log(response.data.length);
    setProjs(response.data);
  });
  
  // const projs=[{id:'1r3fwac',name:"B.Tech Project Tracking Dashboard",faculty:"Arunkumar C",teamsize: 5},{id:'1r3saa',name:"Alumuni Portal",faculty:"Pratilotamai M",teamsize: 4},{id:'23gvrew',name:"Course Website",faculty:"Venkataraman D",teamsize: 6},{id:'32efwewc',name:"Student Profile",faculty:"Gowtham R",teamsize: 5},{id:'45rgav',name:"Workshop Management",faculty:"Senthilkumar M",teamsize: 4}];
  console.log("hello");
  // console.log(props.projs);
  // const projs2=projs1  
  // {projs1.map((proj)=>(
  //     console.log(proj)
  //     ))};
  // for (let i = 0; i < projs1.length; i++) {
  //   console.log(projs1.name);
  // }
  return (

    
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={2} >
          {projs && projs.map((proj)=>(
          <Grid item xs={3}>
              <ProjCard id= {proj.id} name={proj.name} teamsize={proj.teamsize} />
              </Grid> 
            ))}
          </Grid>           
          {/* <PieChart /> */}
        </Container>
        
        
     
  );
}