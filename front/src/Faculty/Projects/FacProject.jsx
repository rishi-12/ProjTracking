import React,{ useState,useEffect }  from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { useHistory } from "react-router-dom"; 
// import Chart from './Chart';
// import Deposits from './Deposits';
// import ProjCard from "./Projects/ProjCard";
// import Card from '@material-ui/core/Card';
import PieChart from './PieChart';
import { useParams } from 'react-router-dom';
import TaskTable from './TaskTable'
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ContributionChart from './ContributionChart';
const paperStyle={padding :2,paddingTop :1,paddingBottom :1,height:'0%',width:'50%',margin:"-10px auto",}

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  button: {
    margin: theme.spacing(1),
  }
}));

//const projs=[{id:'1r3fwac',name:"B.Tech Project Tracking Dashboard",faculty:"Arunkumar C",teamsize: 5},{id:'1r3saa',name:"Alumuni Portal",faculty:"Pratilotamai M",teamsize: 4},{id:'23gvrew',name:"Course Website",faculty:"Venkataraman D",teamsize: 6},{id:'32efwewc',name:"Student Profile",faculty:"Gowtham R",teamsize: 5},{id:'45rgav',name:"Workshop Management",faculty:"Senthilkumar M",teamsize: 4}];

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

export default function FacProject() {
  const classes = useStyles();
  const {projectId}=useParams();
  const history = useHistory();

  const [projDetail,setProjDetail]=useState({});
  const [cTodo,setTodoCount]=useState(0);
  const [cInProgress,setInProgressCount]=useState(0);
  const [cCompleted,setCompletedCount]=useState(0); 

  const [open, setOpen] = React.useState(false);


  const [chartData,setChartData]=useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // function handleClick(event){
  //   event.preventDefault();
  //   console.log("Added student");
  // }

  
  const PieChartData = () => {
    axios.post("http://localhost:8080/mavenproject2/PieChartData", projectId
    ).catch(function (error) {
        console.log(error);
    }) 
    .then((response) => {
        setTodoCount(response.data.todo_count);
        setInProgressCount(response.data.inprog_count);
        setCompletedCount(response.data.comp_count)
  });
}


//Fetching Project Details
const Fetchdata = () => {
axios.post("http://localhost:8080/mavenproject2/Project", projectId
  ).catch(function (error) {

  console.log("error");

  }) 
  .then((response) => {
  setProjDetail(response.data);
});
}
 //Fetching Contribution bar chart data

 const getContributionChartData = () =>{
  axios.post("http://localhost:8080/mavenproject2/getContributionChartData", projectId
    ).catch(function (error) {

    console.log("error");
  
    }) 
    .then((response) => {
    setChartData(response.data);
  });

}

useEffect(() => {
  Fetchdata();
  PieChartData();
  getContributionChartData();
}, [])

//Add Student Function
function handleAdd(event) {
  console.log("aefaef");
  event.preventDefault();
  const stud = {
    email: event.target.email.value,
    projid: event.target.projid.value
  };
  console.log(stud);
  const stud1 =JSON.stringify(stud);
  
    axios.post("http://localhost:8080/mavenproject2/AddStudent", stud1,{
      "headers": {
      "content-type": "application/x-www-form-urlencoded",
      },}
      ).catch(function (error) {
            console.log(error);
      }) 
      .then((response) => {
        // window.location.reload(false);
        handleClose();
    });
}
  // console.log(projectId);
  // const result = projs.filter(id => id.id===projectId);
  // console.log(result);

return(
        <Container maxWidth="lg" className={classes.container}>
            {/* <h1>{props.name}</h1>        */}
          <div >
          <Paper  style={paperStyle}>
                <h1 style={{textAlign:'center'}}>{projDetail.name}</h1>
                <h2 style={{textAlign:'center'}}>Faculty In-Charge :  {projDetail.facultyName}</h2>
          </Paper>
          <br></br>
          <div style={div_style2}>
            <PieChart c1={cTodo} c2={cInProgress} c3={cCompleted}  />
            <ContributionChart data={chartData}/>
          </div>

          <br></br>
          </div>
          <Box textAlign="left">
          <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        Add student
      </Button>
      </Box>
    
        
          <TaskTable projectId={projectId} setTodoCount={setTodoCount} setInProgressCount={setInProgressCount} setCompletedCount={setCompletedCount} />
          <br></br>
          {/* <TaskTable/> */}

          {/* Add Student Modal */}
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle style={{textAlign: 'center'}} id="form-dialog-title">Add Student</DialogTitle>
            <form onSubmit={handleAdd}>
            <DialogContent>
              <DialogContentText>
                To add a student, fill in the project id and email of the student and click Submit.
              </DialogContentText>
              <TextField
                margin="dense"
                id="projid"
                label="Project ID"
                type="text"
                fullWidth
              />
              <br></br> <br></br> 
              <TextField
                margin="dense"
                id="email"
                label="Student email"
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