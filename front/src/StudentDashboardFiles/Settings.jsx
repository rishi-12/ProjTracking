import React,{useState} from "react";
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

const useStyles = makeStyles((theme) => ({
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
                    <form  className={classes.form}>
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
                    <form  className={classes.form}>
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
        </Container>
  );
}
