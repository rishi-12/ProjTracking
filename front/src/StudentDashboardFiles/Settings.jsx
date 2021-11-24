import React, { useState,useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CreateSharpIcon from '@material-ui/icons/CreateSharp';
import { Paper } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person';
import axios from 'axios';
import  Modal  from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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
      marginTop: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      height: '20%',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '50%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  const paperStyle={padding : 0,width:'250%', marginTop:"0%",marginLeft:"-80%"}

export default function Settings(props) {

  const [notmatch, setNotmatch] = useState(false)
  const [already, setAlready] = useState(false)
  const [pass, Setpass] = useState()

  function closeModal1() {
    setNotmatch(false)
  }
  
  function closeModal2() {
    setAlready(false)
  }

  const userId = localStorage.getItem("user_id");
  const Fetchdata = () => {
    axios.post("http://localhost:8080/mavenproject2/PasswordServlet", userId)
    .catch(function (error) {
      console.log(error);
      }) 
      .then((response) => {
      Setpass(response.data);
    });
    
  }


  useEffect(() => {
    Fetchdata();
}, []);


function handleUpdate(event) {

  event.preventDefault();
  const user1 = {
    old_pass: event.target.oldpass.value,
    new_pass: event.target.newpass.value,
    conf_new_pass: event.target.confnewpass.value,
    id: userId,
  };
  if(user1.new_pass!=user1.conf_new_pass || user1.old_pass!=pass){
    setNotmatch(true);
  }
  else{
    
    const user =JSON.stringify(user1);
    axios.post("http://localhost:8080/mavenproject2/UpdatePassword", user,{
      "headers": {
      "content-type": "application/x-www-form-urlencoded",
      },}
      ).catch(function (error) {
            console.log(error);
      }) 
      .then((response) => {
        window.location.reload(false);
    });
  }
}



function handleUpdate1(event) {

  event.preventDefault();
  const user1 = {
    name:  event.target.first_name.value+' '+event.target.last_name.value,
    id : userId
  };

    const user =JSON.stringify(user1);
    axios.post("http://localhost:8080/mavenproject2/UpdateName",user
    ,{
      "headers": {
      "content-type": "application/x-www-form-urlencoded",
      },}
      ).catch(function (error) {
            console.log(error);
      }) 
      .then((response) => {
        window.location.reload(false);
    });
}



  const classes = useStyles();

  return (
            <Container  component="main" maxWidth="xs">

            {/* Student password change */}
            <Paper elevation={2} style={paperStyle}>
            <CssBaseline />
            <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <CreateSharpIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Change Password
                    </Typography>
                    <form   onSubmit={handleUpdate} className={classes.form}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="oldpass"
                        label="Current Password"
                        name="oldpass"
                        autoComplete="oldpass"
                        autoFocus
                      />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="newpass"
                        label="New Password"
                        name="newpass"
                        autoComplete="newpass"
                        autoFocus
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="confnewpass"
                        label="Confirm New Password"
                        name="confnewpass"
                        autoComplete="confnewpass"
                        autoFocus
                        />
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        >
                        Submit
                        </Button>
                    </form> 
            </div>
            </Paper>

            {/* Student Name Change */}
            <Paper elevation={2} style={paperStyle}>
            <CssBaseline />
            <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <PersonIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Change Name
                    </Typography>
                    <form onSubmit={handleUpdate1}  className={classes.form}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="first_name"
                        label="First Name"
                        name="first_name"
                        autoComplete="first_name"
                        autoFocus
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="last_name"
                        label="Last Name"
                        name="last_name"
                        autoComplete="last_name"
                        autoFocus
                        />
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        >
                        Submit
                        </Button>
                    </form> 
            </div>
            </Paper>


            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={notmatch}
              onClose={closeModal1}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
            <Fade in={notmatch}>
              <div className={classes.paper1}>
                <h2 id="transition-modal-title" align="center">Passwords do not match !!!!</h2>
              </div>
            </Fade>
          </Modal>

        </Container>
  );
}
