import React,{useState} from "react";
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import UpdateIcon from '@material-ui/icons/Update';
import axios from "axios";
import { useHistory } from "react-router-dom"; 
import  Modal  from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Paper } from '@material-ui/core';

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
const paperStyle={padding :30,paddingTop :1,height:'100%',width:'110%', margin:"100px auto"}
export default function UpdateProj(){
  const classes = useStyles();
  const history = useHistory();
  const [showit, setShowit] = useState(false);
  const [modalcont,setModalcont]=useState("");

  function closeModal() {
    setShowit(false)
  }

  function handleUpdate(event){
    event.preventDefault();
    console.log(event.target);
    const proj1 = {
      projectid: event.target.projectid.value,
      projectname: event.target.projectname.value,
      projectdesc: event.target.projectdesc.value
    };
    const proj =JSON.stringify(proj1);

    axios.post("http://localhost:8080/mavenproject2/UpdateProject", proj,{

      "headers": {
      
      "content-type": "application/x-www-form-urlencoded",
      
      },}
      ).catch(function (error) {
 
      console.log("error");
      console.log(error);
    
      }) 
      .then((response) => {
      
      console.log("sent");
      console.log(response);
      if(response.data==='True'){
        //history.push('/addproject');
        setShowit(true);
        setModalcont("PROJECT UPDATED");
      }
      else{
        setShowit(true);
        setModalcont("ERROR IN PROJECT UPDATION");
      }
    });
}


  return (
    <Container  component="main" maxWidth="xs">
    <Paper elevation={10} style={paperStyle}>
        {/* <h1 style={{textAlign:'center'}}>Faculty sign in page</h1> */}
    <CssBaseline />
    <div className={classes.paper}>
    <Avatar className={classes.avatar}>
        <UpdateIcon />
      </Avatar>
    <Typography component="h1" variant="h5">
        Update project
      </Typography>
    <form onSubmit={handleUpdate} className={classes.form}>
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
            <h2 id="transition-modal-title" align="center">{modalcont}</h2>
            <p id="transition-modal-description" align="center">Please check the details</p>
          </div>
        </Fade>
      </Modal>
      </Paper>
  </Container>
  );
}