import React,{useState,useEffect} from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom"; 
import { Paper } from '@material-ui/core';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import axios from "axios";
import FeedbackIcon from '@material-ui/icons/Feedback';
function handleSubmit(event){
    event.preventDefault();
    const feedback1 = {
        projid:event.target.projectid.value,
        Innovation:event.target.innovation.value,
        Implementation: event.target.implementation.value,
        Scope: event.target.future.value,
        Punctuality: event.target.punctuality.value,
        Design: event.target.design.value
      };
      const feedback =JSON.stringify(feedback1);
      axios.post("http://localhost:8080/mavenproject2/FacultyFeedback", feedback,{
        "headers": {
        "content-type": "application/x-www-form-urlencoded",
        },}
        ).catch(function (error) {
              console.log(error);
        }) 
        .then((response) => {
              console.log("sent");
              console.log(response.data,'True')
                
      });

    // console.log(event.target.projectid.value);
    // const Innovation=event.target.innovation.value;
    // const Implementation=event.target.implementation.value;
    // const Scope=event.target.future.value;
    // const Punctuality=event.target.punctuality.value;
    // const Design=event.target.design.value;
    // console.log(Innovation);
    // console.log(Implementation);
    // console.log(Scope);
    // console.log(Punctuality);
    // console.log(Design);

}

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
    table: {
        minWidth: 650,
      },
  }));

  const paperStyle={padding :30,paddingTop :1,height:'100%',width:'110%', margin:"100px auto"}

export default function FacFeedback(){
    const classes = useStyles();
  const history = useHistory();
    return(
        //<Container maxWidth="lg" className={classes.container}>
        <Container  component="main" maxWidth="xs">
        <Paper elevation={10} style={paperStyle}>
  {/* <Paper elevation={10} style={paperStyle}> */}
  <CssBaseline />
    <div className={classes.paper}>
    <Avatar className={classes.avatar}>
        <FeedbackIcon />
      </Avatar>
    <Typography component="h1" variant="h5">
        Project Feedback
      </Typography>
    <form onSubmit={handleSubmit} className={classes.form}>
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
   
    <FormControl component="fieldset"> 
    <h4>Innovation</h4>
      <RadioGroup row aria-label="position" name="innovation" defaultValue="good">
        <FormControlLabel
          value="bad"
          control={<Radio color="primary" />}
          label="Bad"
          labelPlacement="top"
        />
        <FormControlLabel
          value="average"
          control={<Radio color="primary" />}
          label="Average"
          labelPlacement="top"
        />
        <FormControlLabel
          value="good"
          control={<Radio color="primary" />}
          label="Good"
          labelPlacement="top"
        />
       
        <FormControlLabel
          value="excellent"
          control={<Radio color="primary" />}
          label="Excellent"
          labelPlacement="top"
        />

        {/* 2nd Ques */}
        {/* <FormControlLabel value="end" control={<Radio color="primary" />} label="End" /> */}
      </RadioGroup>
      <h4>Implementation</h4>
      <RadioGroup row aria-label="position" name="implementation" defaultValue="good">
        <FormControlLabel
          value="bad"
          control={<Radio color="primary" />}
          label="Bad"
          labelPlacement="top"
        />
        <FormControlLabel
          value="average"
          control={<Radio color="primary" />}
          label="Average"
          labelPlacement="top"
        />
        <FormControlLabel
          value="good"
          control={<Radio color="primary" />}
          label="Good"
          labelPlacement="top"
        />
        
        <FormControlLabel
          value="excellent"
          control={<Radio color="primary" />}
          label="Excellent"
          labelPlacement="top"
        />
        {/* 3rd Ques */}
        {/* <FormControlLabel value="end" control={<Radio color="primary" />} label="End" /> */}
      </RadioGroup>
      <h4>Design</h4>
      <RadioGroup row aria-label="position" name="design" defaultValue="good">
        <FormControlLabel
          value="bad"
          control={<Radio color="primary" />}
          label="Bad"
          labelPlacement="top"
        />
        <FormControlLabel
          value="average"
          control={<Radio color="primary" />}
          label="Average"
          labelPlacement="top"
        />
        <FormControlLabel
          value="good"
          control={<Radio color="primary" />}
          label="Good"
          labelPlacement="top"
        />
         
        <FormControlLabel
          value="excellent"
          control={<Radio color="primary" />}
          label="Excellent"
          labelPlacement="top"
        />
        {/* 4th Ques */}
        {/* <FormControlLabel value="end" control={<Radio color="primary" />} label="End" /> */}
      </RadioGroup>
      <h4>Scope for future development</h4>
      <RadioGroup row aria-label="position" name="future" defaultValue="good">
        <FormControlLabel
          value="bad"
          control={<Radio color="primary" />}
          label="Bad"
          labelPlacement="top"
        />
        <FormControlLabel
          value="average"
          control={<Radio color="primary" />}
          label="Average"
          labelPlacement="top"
        />
        <FormControlLabel
          value="good"
          control={<Radio color="primary" />}
          label="Good"
          labelPlacement="top"
        />
         
        <FormControlLabel
          value="excellent"
          control={<Radio color="primary" />}
          label="Excellent"
          labelPlacement="top"
        />
        {/* 5th Ques */}
        {/* <FormControlLabel value="end" control={<Radio color="primary" />} label="End" /> */}
      </RadioGroup>
      <h4>Punctuality</h4>
      <RadioGroup row aria-label="position" name="punctuality" defaultValue="good">
        <FormControlLabel
          value="bad"
          control={<Radio color="primary" />}
          label="Bad"
          labelPlacement="top"
        />
        <FormControlLabel
          value="average"
          control={<Radio color="primary" />}
          label="Average"
          labelPlacement="top"
        />
        <FormControlLabel
          value="good"
          control={<Radio color="primary" />}
          label="Good"
          labelPlacement="top"
        />
         
        <FormControlLabel
          value="excellent"
          control={<Radio color="primary" />}
          label="Excellent"
          labelPlacement="top"
        />
        </RadioGroup>
    </FormControl>
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

