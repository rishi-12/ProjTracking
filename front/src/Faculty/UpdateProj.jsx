import React,{useState} from "react";
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import UpdateIcon from '@material-ui/icons/Update';

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

export default function UpdateProj(){
  const classes = useStyles();


  function handleSignIn(event){
    console.log(event.target);
  }

  return (
    <Container  component="main" maxWidth="xs">
        {/* <h1 style={{textAlign:'center'}}>Faculty sign in page</h1> */}
    <CssBaseline />
    <div className={classes.paper}>
    <Avatar className={classes.avatar}>
        <UpdateIcon />
      </Avatar>
    <Typography component="h1" variant="h5">
        Update project
      </Typography>
    <form onSubmit={handleSignIn} className={classes.form}>
    <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="projid"
          label="Project ID"
          name="projectid"
          autoComplete="projectid"
          autoFocus
        />
    <TextField
          variant="outlined"
          margin="normal"
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
          Update
        </Button>
    </form> 
    </div>
  </Container>
  );
}