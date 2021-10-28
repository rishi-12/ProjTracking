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
import  Modal  from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import {UserContext} from '../UserContext';

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

export default function SignIn(props) {
  const classes = useStyles();
  const history = useHistory();
  const [errorFlag,setFlag]=useState(false);
  const [errorMsg,setMsg]=useState("");
  const [userId,setUserId] = useContext(UserContext);
  const [showit, setShowit] = useState(false)

  function closeModal() {
    setShowit(false)
  }

  console.log("hello");
  console.log(userId);
  function handleSignIn(event) {
    // console.log(users);
  
    event.preventDefault();
    const user1 = {
      email: event.target.email.value,
      password: event.target.password.value
    };

    const user =JSON.stringify(user1);
    axios.post("http://localhost:8080/mavenproject2/StudentLogin", user,{
      "headers": {
      "content-type": "application/x-www-form-urlencoded",
      },}
      ).catch(function (error) {
            console.log(error);
      }) 
      .then((response) => {
            console.log("sent");
            console.log(response.data,'True')
            if(response.data==='True'){
              history.push(`/dashboard`)
            }
            else{
              setShowit(true);
            }   
    });
    // axios
    //     .get("http://localhost:8080/mavenproject2/firstServiceCall")
    //     .then((resp) => {
    //       console.log(resp);
    //     });
    // axios.post("http://localhost:8080/api/user/login", user1).catch(function (error) {
    //   if (error.response) {
    //     // Request made and server responded
    //     console.log(error.response.data);
    //     setFlag(true);
    //     setMsg(error.response.data) ;
    //     console.log(error.response.status);
    //     stat=error.response.status;
    //     console.log(error.response.headers);
    //   } else if (error.request) {
    //     // The request was made but no response was received
    //     console.log(error.request);
    //   } else {
    //     // Something happened in setting up the request that triggered an Error
    //     console.log('Error', error.message);
    //   }
  
    // })     
    //   .then((response) => {
    //   // if(stat===200)
    //   console.log("statusss")
    //   console.log(stat);
    //   if(stat===200){
    //     // console.log("yes")
    //     console.log(response.data);
    //     setUserId(response.data);
    //     history.push(`/dashboard`); //send response.data to dashboard
    //     // axios
    //   //   .get("http://localhost:8080/api/posts", { headers: header })
    //   //   .then((resp) => {
    //   //     console.log(resp);
    //   //   });

    //   }
    //   //check condition then if error then do this
      
    //   // setFlag(true);
    //   // setMsg(response.data) ;
      
    //   console.log(123);
      
    // // const header = { "auth-token": response.data };
      
    // //   console.log(header);
    // //   props.setLog(true);
      
    // });

 
  
  }

  return (
    // <div style={divstyle}>
    <Container  component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form onSubmit={handleSignIn} className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
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
            <Link href="/facsignin" variant="body2">
              {"If you are a faculty, click here to sign in"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
    {/* <Box mt={8}>
      <Copyright />
    </Box> */}
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
  </Container>
  // </div>
    
  );
}