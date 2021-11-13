import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FormControlLabelPlacement from './FormControlLabelPlacement';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';
import Modal from '@material-ui/core/Modal';


//Form Dialog
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  table: {
    minWidth: 650,
  },
}));

function createData(task, description, status) {
  return { task, description, status };
}

// const rows = [
//   createData('Login Page', 'Login using Email', 'To Do'),
//   createData('SignUp Page', 'Sigup with new email id', 'Completed'),
//   createData('Dashboard', 'A dashboard with side bar and logout', 'In Progress'),
// ];

export default function TaskTable(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [taskName,setTaskName]=useState("");
  const [taskId,setTaskId]=useState(0);
  const [taskDescription,setTaskDescription]=useState("");
  // const handleOpen = ()=>{
  //   // setTaskDet(taskDetail);
  //   setOpen(true);
  // };
  function handleOpen(task_id,taskNam,taskDesc){
    setTaskId(task_id);
    setTaskName(taskNam);
    setTaskDescription(taskDesc)
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  function handleAdd(event) {
    // console.log(users);
        const task = {
          name: event.target.name.value,
          descp: event.target.descp.value,
          projectId: props.projectId,
          taskid: taskId
        };

        const task1 =JSON.stringify(task);
        
          axios.post("http://localhost:8080/mavenproject2/EditTask", task1,{
            "headers": {
            "content-type": "application/x-www-form-urlencoded",
            },}
            ).catch(function (error) {
                  console.log(error);
            }) 
            .then((response) => {
              window.location.reload(false);
              handleClose();      
          });
  }

  const [tasks,setTasks]=useState([]);

  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        hello
      </p>
      
    </div>
  );


  
  //Fetching data for Task Table
  const Fetchdata = () => {
    axios.post("http://localhost:8080/mavenproject2/Task", props.projectId
      ).catch(function (error) {
      console.log(error);
      }) 
      .then((response) => {
      setTasks(response.data);
    });
    
  }
    useEffect(() => {
      Fetchdata();
  }, []);
  

  // Task Delete Function
  function handleDelete(task_id){
          axios.post("http://localhost:8080/mavenproject2/DeleteTask", task_id).catch(function (error) {
                console.log("error");        
          }) 
          .then((response) => {
            window.location.reload(false);
        });
  }



  return (
    <div>
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle style={{textAlign: 'center'}} id="form-dialog-title">Edit Task Details</DialogTitle>
            <form onSubmit={handleAdd}>
            <DialogContent>
              <DialogContentText>
                To edit a task, change in the details for the task and click Submit.
              </DialogContentText>
              <TextField
                margin="dense"
                id="name"
                label="Task Name"
                type="text"
                fullWidth
                defaultValue={taskName}
                
              />
              <br></br> <br></br> 
              <TextField
                margin="dense"
                id="descp"
                label="Task Description"
                type="text"
                fullWidth
                defaultValue={taskDescription}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">Close</Button>
              <Button type="submit" label="Submit" color="primary">Submit</Button>
            </DialogActions>
            </form>
          </Dialog>

    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        {/* <caption>A basic table example with a caption</caption> */}
        <TableHead>
          <TableRow>
            <TableCell align="center">Task</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((row) => (
            <TableRow key={row.task}>
              <TableCell component="th" align="center" scope="row">{row.task}</TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center"><FormControlLabelPlacement status={row.status} /></TableCell>
              <TableCell align="center">
                                        <Button
                                          variant="contained"
                                          color="primary"
                                          className={classes.button}
                                          startIcon={<EditIcon />}
                                          onClick={()=>handleOpen(row.id,row.task,row.description)}
                                        ></Button>
                                        
                                        {" "}
                                        <Button
                                          variant="contained"
                                          color="secondary"
                                          className={classes.button}
                                          startIcon={<DeleteIcon />}
                                          onClick = {() => handleDelete(row.id)}
                                        ></Button>
                                    </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
