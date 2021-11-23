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
import Input from '@material-ui/core/Input';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Link from '@material-ui/core/Link';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const paperStyle={padding :2,paddingTop :1,paddingBottom :1,height:'0%',width:'50%',margin:"0px auto",}


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
//   window.location.reload(false);
export default function Files(props) {


  
  const download_style ={
    textDecoration:'None',
    color: 'white',
  }
  const classes = useStyles();
  const {projectId} = useParams();
  const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
  const [descp, setDescp] = useState('');
  const [files,setFiles] = useState([]);  

  const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

  const changeHandler2 = (event) => {
		setDescp(event.target.descp.value);
	};




  const Fetchdata = () => {
    // const data1 = new FormData();
		// data1.append('id', projectId);
    axios.post("http://localhost:8080/mavenproject2/FilesDet", projectId)
    .catch(function (error) {
      console.log(error);
      }) 
      .then((response) => {
      setFiles(response.data);
    });
    
  }
  
  const handleSubmission = (event) => {

		const data = new FormData();
		data.append('file', selectedFile);
		data.append('id', projectId);
		data.append('descp', descp);

    axios.post("http://localhost:8080/mavenproject2/uploadServlet",data)
    .catch(function (error) {
        console.log(error);
    }) 
    .then((response) => {
        console.log(response);
        window.location.reload(false);
      });
	};


  useEffect(() => {
    Fetchdata();
}, []);


  return (

    <Container maxWidth="lg" className={classes.container}>
      
      <Paper  style={paperStyle}>
      <br></br>
      {/* <form onSubmit={handleSubmission}> */}
            <div align="center">
            <Typography component="h1" variant="h5">  File Upload    </Typography>
            <br></br>
            <Input
              type="file"
              name="file"
              onChange={changeHandler} 
              color="primary"
              variant="contained"
            />
            <br></br> <br></br>
              <TextField
                variant="outlined"
                margin="normal"
                required
                id="descp"
                label="Description"
                name="descp"
                autoComplete="descp"
                onChange={(e) => setDescp(e.target.value)} 
                autoFocus
              />

              <br></br><br></br>
              <Button  startIcon={<CloudUploadIcon />} onClick={handleSubmission} variant="contained" color="primary" component="span">
                Upload
              </Button>
              </div>
              <br></br><br></br>

              
        {/* </form> */}
      </Paper>

             <br></br><br></br>

              <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell > <h4>File Id</h4></TableCell>
                    <TableCell align="center"><h4>Name</h4></TableCell>
                    <TableCell align="center"><h4>Description</h4></TableCell>
                    <TableCell align="center"><h4>Download Link</h4></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {files.map((file) => (
                    <TableRow key={file.id}>
                      <TableCell component="th" scope="row">{file.id}</TableCell>
                      <TableCell align="center">{file.name}</TableCell>
                      <TableCell align="center">{file.description}</TableCell>
                      <TableCell align="center">
                          <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<CloudDownloadIcon />}
                            component={Link} 
                            href={"http://localhost:8080/mavenproject2/downloadAttachment?id="+file.id}
                            target="_blank"
                            style={download_style}
                            // to = 
                          ></Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>




    </Container>




  );
}