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
// import Alert from '@mui/material/Alert';
import Alert from '@material-ui/lab/Alert';
import axios from "axios";
import {UserContext} from '../UserContext';

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
  

export default function FacSignIn(props)
{
  const classes = useStyles();
  const history = useHistory();
  const [errorFlag,setFlag]=useState(false);
  const [errorMsg,setMsg]=useState("");
  //const [userId,setUserId] = useContext(UserContext);
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
      
    });
    //history.push(`/addproject`);
}
    // console.log(user1);
    
    return (
        <Container  component="main" maxWidth="xs">
        {/* <h1 style={{textAlign:'center'}}>Faculty sign in page</h1> */}
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
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
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
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/SignUp" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
          <Grid item>
            <Link href="/" variant="body2">
              {"Are you a student? Click here to login as student"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
    {/* <Box mt={8}>
      <Copyright />
    </Box> */}
  </Container>
  // </div>
    
    );
}

