import React,{useContext, useState,useEffect} from 'react';
import { UserContext } from '../UserContext';
import axios from 'axios';
const drawerWidth = 240;

const divstyle = {
  width: '60%',
  height: '80%',
};




export default function Dashboard(props) {
  // const [userId,setUserId] = useContext(UserContext);
  const [userName,setUserName]=useState("");


  const userId = localStorage.getItem("user_id");

  console.log(userId);
  const Fetchdata = () => {
    axios.post("http://localhost:8080/mavenproject2/Dashboard", userId
      ).catch(function (error) {
  
      console.log("error");
      console.log(error);
    
      }) 
      .then((response) => {
      
      console.log("sent");
      console.log(response);
      // console.log(response.data);
      // // console.log(response.data.length);
      setUserName(response.data);
      

    });
  }
    useEffect(() => {
      Fetchdata();
  }, [])

  return (
        
        <div align="center"><h1 style={{font:'bold'}}>Welcome {userName} !!</h1>
            <img style={divstyle} src="https://d38cf3wt06n6q6.cloudfront.net/tyasuitefront/webgpcs/images/project-tracking-software.png"></img>
         </div>

  );
}