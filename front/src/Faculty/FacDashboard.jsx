import React,{useContext, useState,useEffect} from 'react';
import { Paper } from '@material-ui/core'

import axios from 'axios';



const drawerWidth = 240;

const divstyle = {
  width: '60%',
  height: '80%',
};

const paperStyle={padding :30,paddingTop :1,height:'100%',width:'90%', margin:"80px auto"}


export default function FacDashboard(props) {
  //event.preventDefault();
  const [userName,setUserName]=useState("");
  const fac_id = localStorage.getItem("fac_id");
  console.log(fac_id);
  const Fetchdata = () => {
    axios.post("http://localhost:8080/mavenproject2/FacultyDashboard", fac_id
      ).catch(function (error) {
  
      console.log("error");
      console.log(error);
    
      }) 
      .then((response) => {
      
      console.log("sent");
      console.log(response);
      setUserName(response.data);
      

    });
  }
    useEffect(() => {
      Fetchdata();
  }, [])

  return (
    // <h1>
    //   Hello
    // </h1>
    <Paper elevation={10} style={paperStyle}>
    <div align="center"><h1 style={{font:'bold'}}>Welcome {userName} to our Project Tracking tool </h1>
        
        <img style={divstyle} src="https://icon-library.com/images/faculty-icon/faculty-icon-7.jpg"></img>
        
     </div>
     </Paper>

  );
}