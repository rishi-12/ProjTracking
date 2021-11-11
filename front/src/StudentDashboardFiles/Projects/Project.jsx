import React, { useState,useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import axios from 'axios';
// import Chart from './Chart';
// import Deposits from './Deposits';
// import ProjCard from "./Projects/ProjCard";
// import Card from '@material-ui/core/Card';
import PieChart from './PieChart';
import { useParams } from 'react-router-dom';
import TaskTable from './TaskTable';
import AddIcon from '@material-ui/icons/Add';
import { green } from '@material-ui/core/colors';
import UpdateIcon from '@material-ui/icons/Update';

//Form Dialog
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  button: {
    margin: theme.spacing(1),
  },

}));





//Styling for header and chart
const div_style = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const div_style2 = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '83%',
}
//



export default function Project() {

  const classes = useStyles();
  const {projectId}=useParams();


  const [projDetail,setProjDetail]=useState({});
  const [cTodo,setTodoCount]=useState(0);
  const [cInProgress,setInProgressCount]=useState(0);
  const [cCompleted,setCompletedCount]=useState(0); 

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };



  const Fetchdata = () => {
    axios.post("http://localhost:8080/mavenproject2/Project", projectId
      ).catch(function (error) {
  
      console.log("error");
      console.log(error);
    
      }) 
      .then((response) => {
      
      console.log("sent");
      console.log(response.data);
      setProjDetail(response.data);
    });
  }
    useEffect(() => {
      Fetchdata();
  }, [])


  function handleAdd(event) {
    // console.log(users);
      
        // event.preventDefault();
        const task = {
          name: event.target.name.value,
          descp: event.target.descp.value,
          projectId: projectId
        };

        const task1 =JSON.stringify(task);
        
          axios.post("http://localhost:8080/mavenproject2/AddTask", task1,{
            "headers": {
            "content-type": "application/x-www-form-urlencoded",
            },}
            ).catch(function (error) {
                  console.log(error);
            }) 
            .then((response) => {
              handleClose();
          });
  }




return(
        <Container maxWidth="lg" className={classes.container}>

          <div style={div_style}>
            <h1>{projDetail.name}</h1>
          </div>
          
          <div style={div_style}>
          <h2>{projDetail.facultyName}</h2>
          </div>

          <div style={div_style2}>
          <PieChart c1={cTodo} c2={cInProgress} c3={cCompleted} />
          </div>

          <br></br>

          <Box textAlign='left'>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<AddIcon />}
            onClick={handleClickOpen}
          >
            Add Task
          </Button>
          </Box>

          <br></br>
          <TaskTable projectId={projectId} setTodoCount={setTodoCount} setInProgressCount={setInProgressCount} setCompletedCount={setCompletedCount} />
          <br></br>
          
          <Box textAlign='center'>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              size="large"
              startIcon={<UpdateIcon />}
              // onClick={}
            >
              Update Table
            </Button>
          </Box>



          {/* Form in Modal */}
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle style={{textAlign: 'center'}} id="form-dialog-title">Add Task</DialogTitle>
            <form onSubmit={handleAdd}>
            <DialogContent>
              <DialogContentText>
                To add a task, fill in the details for the task and click Submit.
              </DialogContentText>
              <TextField
                margin="dense"
                id="name"
                label="Task Name"
                type="text"
                fullWidth
              />
              <br></br> <br></br> 
              <TextField
                margin="dense"
                id="descp"
                label="Task Description"
                type="text"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">Close</Button>
              <Button type="submit" label="Submit" color="primary">Submit</Button>
            </DialogActions>
            </form>
          </Dialog>

        </Container>
  );
}