import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FacProjCard from "./Projects/FacProjCard";
import axios from "axios";


const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },

}));

export default function ProjectList(props) {
  const classes = useStyles();
  const fac_id=localStorage.getItem("fac_id");
  // const stud_id="1";
  var projs1;
  const [projs,setProjs]=useState([]);
  const Fetchdata = () => {
  axios.post("http://localhost:8080/mavenproject2/FacProjList", fac_id
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
}
  useEffect(() => {
    Fetchdata();
}, [])
  //const projs=[{id:'1r3fwac',name:"B.Tech Project Tracking Dashboard",teamsize: 5},{id:'1r3saa',name:"Alumuni Portal",teamsize: 4},{id:'23gvrew',name:"Course Website",teamsize: 6},{id:'32efwewc',name:"Student Profile",teamsize: 5},{id:'45rgav',name:"Workshop Management",teamsize: 4}];
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
              <FacProjCard id= {proj.id} name={proj.name}  teamsize={proj.teamsize} />
              </Grid> 
            ))}
          </Grid>           
          {/* <PieChart /> */}
        </Container>
        
        
     
  );
}