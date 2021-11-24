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
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SettingsIcon from '@material-ui/icons/Settings';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import AppleIcon from '@material-ui/icons/Apple';
import CropIcon from '@material-ui/icons/Crop';
import BrushIcon from '@material-ui/icons/Brush';


const paperStyle={padding :2,paddingTop :1,paddingBottom :1,height:'0%',width:'40%',margin:"100px auto",}

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));
//   window.location.reload(false);
export default function Feedback(props) {

  const download_style ={
    textDecoration:'None',
    color: 'white',
  }
  const classes = useStyles();
  const {projectId} = useParams();
  const [feedback,setFeedback] = useState([]);  
  const [display,setDisplay] = useState(true);



  const Fetchdata = () => {
    axios.post("http://localhost:8080/mavenproject2/feedbackServlet", projectId)
    .catch(function (error) {
      console.log(error);
      }) 
      .then((response) => {
          setFeedback(response.data[0]);
          if(response.data.length > 0){
                setDisplay(false);
          }
    });
    
  }
  

  useEffect(() => {
    Fetchdata();
}, []);


  if(display==false){

  return (

    <Container maxWidth="lg" className={classes.container}>
    
    <Paper style={paperStyle}>
        <h2 style={{textAlign:'center'}}>Feedbacks from the faculty</h2>
        <List className={classes.root}>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <SettingsIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Implementation :" secondary={feedback.implementation} />
      </ListItem>
    
        <br></br>
      <Divider variant="inset" component="li" />

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AppleIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Innovation :" secondary={feedback.innovation} /> 
      </ListItem>
      <br></br>

      <Divider variant="inset" component="li" />

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CropIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Scope :" secondary={feedback.scope}  />
      </ListItem>
      <br></br>

      <Divider variant="inset" component="li" />

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <QueryBuilderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Punctuality :" secondary={feedback.punctuality} />
      </ListItem>
      <br></br>

      <Divider variant="inset" component="li" />

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BrushIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Design :" secondary={feedback.design}  />
      </ListItem>
      <br></br>

    </List>
    </Paper>
    </Container>




  );}

  else {

    return (

        <Container maxWidth="lg" className={classes.container}>
        
        <Paper style={paperStyle}>
            <h1 style={{textAlign:'center'}}>No Feedbacks to Display !!!</h1>
        </Paper>
        </Container>
    
    
    
    
      );}
}