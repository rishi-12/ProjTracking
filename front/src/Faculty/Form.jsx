import React,{useState} from "react";
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CreateIcon from '@material-ui/icons/Create';
import axios from "axios";
import { useHistory } from "react-router-dom"; 
import {FacContext} from './FacContext';
import { useContext } from 'react';
import { Paper } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const paperStyle={padding :30,paddingTop :1,height:'100%',width:'110%', margin:"100px auto"}
export default function Form(){
  const classes = useStyles();
  const history = useHistory();
  const [facId,setFacId ]= useContext(FacContext);
  function handleSignIn(event){


    console.log(facId+' is somsd');
    event.preventDefault();
    const temproj = {
      projname:event.target.projectname.value,
      projdescription:event.target.projectdesc.value,
      facid: facId
    };

    const fac =JSON.stringify(temproj);

    axios.post("http://localhost:8080/mavenproject2/CreateProject", fac,{

      "headers": {
      
      "content-type": "application/x-www-form-urlencoded",
      
      },}
      ).catch(function (error) {
 
      console.log("error");
      console.log(error);
    
      }) 
      .then((response) => {

      console.log("sent");
      console.log(response);
      if(response.data==='True'){
        history.push('/updateproject');
      }
      else{
        history.push('/addproject');
      }
      
    });

  }

  return (
    <Container  component="main" maxWidth="xs">
    <Paper elevation={10} style={paperStyle}>
        {/* <h1 style={{textAlign:'center'}}>Faculty sign in page</h1> */}
    <CssBaseline />
    <div className={classes.paper}>
    <Avatar className={classes.avatar}>
        <CreateIcon />
      </Avatar>
    <Typography component="h1" variant="h5">
        Create project
      </Typography>
    <form onSubmit={handleSignIn} className={classes.form}>
    <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="projname"
          label="Project Name"
          name="projectname"
          autoComplete="projectname"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="projdesc"
          label="Project description"
          name="projectdesc"
          autoComplete="projectdesc"
          autoFocus
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Create
        </Button>
    </form> 
    </div>
    </Paper>
  </Container>
  );
}