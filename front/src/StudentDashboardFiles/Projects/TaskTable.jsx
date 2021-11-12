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

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
                                          onClick={handleOpen}
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
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
