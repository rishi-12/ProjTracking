import React, { useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom"; 
import {useState} from "react";
// import { useContext } from 'react';
import Alert from '@material-ui/lab/Alert';
import axios from "axios";
import  Modal  from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {FacContext} from './FacContext';
import ParticlesBg from 'particles-bg';
import { Paper } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const divstyle={
    background: `url('https://wallpaperaccess.com/full/208106.jpg')`,
    backgroundSize: 'cover',
  };
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper1: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
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
export default function FacSignIn(props)
{
  const classes = useStyles();
  const history = useHistory();
  const [errorFlag,setFlag]=useState(false);
  const [errorMsg,setMsg]=useState("");
  //const [userId,setUserId] = useContext(UserContext);
  const [showit, setShowit] = useState(false)
  const [facId,setFacId ]= useContext(FacContext);

  function closeModal() {
    setShowit(false)
  }
  console.log("hello");
  //console.log(userId);
  function handleSignIn(event) {
    // console.log(users);
  
    event.preventDefault();
    console.log(event.target.facultyid.value);
    console.log(event.target)
    const user1 = {
      email: event.target.email.value,
      facultyid: event.target.facultyid.value,
      password: event.target.password.value
    };

    setFacId(event.target.facultyid.value);
    
    console.log(facId+' dfsfsdf')
    const fac =JSON.stringify(user1);

    axios.post("http://localhost:8080/mavenproject2/FacultyLogin", fac,{

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
      if(response.data==='False'){
        // console.log(user1.facultyid+' sfasd as fda')
        
        // console.log(facId+' this is facid in facsign')
        setShowit(true);
        
      }
      else{
        localStorage.setItem("fac_id", user1.facultyid);
        history.push(`/fachome`);
      }
      
    });
    //history.push(`/addproject`);
}
    // console.log(user1);
    
    return (
        <Container  component="main" maxWidth="xs">
        {/* <h1 style={{textAlign:'center'}}>Faculty sign in page</h1> */}
        <Paper elevation={10} style={paperStyle}>
        <ParticlesBg type='fountain' num={3} bg={true} />
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Faculty Sign in
      </Typography>
      <form onSubmit={handleSignIn} className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="facid"
          label="Faculty ID"
          name="facultyid"
          autoComplete="facultyid"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        {/* <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        /> */}
        {errorFlag && <Alert severity="error">{errorMsg}</Alert> }
        {/* <Alert severity="error">This is an error alert — check it out!</Alert> */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign In
        </Button>
        <Grid container>
        {/*
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
           <Grid item>
            <Link href="/SignUp" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid> */}
          <Grid item>
            <Link href="/" variant="body2">
              {"Are you a student? Click here to login as student"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={showit}
        onClose={closeModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showit}>
          <div className={classes.paper1}>
            <h2 id="transition-modal-title" align="center">SIGN-IN ERROR</h2>
            <p id="transition-modal-description" align="center">Credentials Incorrect !!!</p>
          </div>
        </Fade>
      </Modal>
      </Paper>
  </Container>
  // </div>
    
    );
}