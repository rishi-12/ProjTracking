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
import axios from 'axios';

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

  const proj_id = props.projectId
  const [open, setOpen] = useState(false);
  const [taskName,setTaskName]=useState("");
  const [taskId,setTaskId]=useState(0);
  const [taskDescription,setTaskDescription]=useState("");

  const [tasks,setTasks]=useState([]);
  //Fetching data for Task Table4
  console.log(proj_id)

  const Fetchdata = () => {
    axios.post("http://localhost:8080/mavenproject2/Task", proj_id
      ).catch(function (error) {
      console.log(error);
      }) 
      .then((response) => {
        console.log(response.data)
        setTasks(response.data);
    });
    
  }
    useEffect(() => {
      Fetchdata();
  }, []);

  return (
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
              <TableCell align="center"><FormControlLabelPlacement /></TableCell>
              <TableCell align="center"><Button
                                          variant="contained"
                                          color="secondary"
                                          className={classes.button}
                                          startIcon={<DeleteIcon />}
                                        ></Button>
                                    </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
