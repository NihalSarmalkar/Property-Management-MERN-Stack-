import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import Card from '@mui/material/Card';
import moment from 'moment';
import PreviewIcon from '@mui/icons-material/Preview';
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from '@mui/material/colors';
import { useParams } from 'react-router';
import useEffect from 'react';
import {
  Button,
  Container,
  Avatar,
  TextField,
  Box,
  Typography,
  Rating,
  Paper,
  IconButton,
  CardHeader
} from '@mui/material';

const ViewCase = () => {
  const [rating, setrating] = React.useState(0);
  const [allCase, setallCase] = useState([]);
  const [allCase1, setallCase1] = useState({});
  const [open, setOpen] = React.useState(false);
  const [starValue , setstarValue] = useState();
  const [content , setContent] = useState('');
  const idValue = useParams().id;

  console.log('id is' + idValue);
  const queryParams = new URLSearchParams(window.location.search)
  console.log(queryParams.get('id')); // 'name'
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  

  const getAllCase = async () => {
    try {
      if(queryParams.get('type')==="Property Agent"){
        console.log()

        const dataone = await axios.get('http://localhost:8080/api/v1/main/getone/'+queryParams.get('id'));
     
        setallCase1(dataone)

      }

      if(queryParams.get('type')==="Finance Consultant"){
        console.log("Finance Consultant")

        const dataone = await axios.get('http://localhost:8080/api/v1/main/getonefinanceconsutant/'+queryParams.get('id'));
      
        setallCase1(dataone)

      }




      
      console.log("------");
      console.log(allCase1.data);
      console.log("------");
      const resCase = await axios.get('http://localhost:8080/api/v1/main/getComment');
   
      let result = [];
      resCase.data.map((i, _) => {
        if (i.caseId === queryParams.get('id')) {
          result.push(i);
        }
      });
      setallCase(result);


    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    getAllCase();
    console.log(allCase);
  }, {});


  console.log("------");
  console.log(allCase1.data);
  console.log("------");
  



  const submitComment = async()=>{
    const caseId=queryParams.get('id')
    const name = queryParams.get('name');
    const type = queryParams.get('type')
    
    try {
      const data = {
        caseId,
        type,
        
        content,
        name,
        
        starValue
      };

      await axios.post('http://localhost:8080/api/v1/main/postComment', data);
      handleClose();
      getAllCase();
      
    } catch (err) {
      console.log(err)
    }

    

  }

  return (
    <>
    
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Your Comments</DialogTitle>
        <DialogContent>
          <center>
            <Box
              sx={{
                '& > legend': { mt: 2 }
              }}
            >
              <Typography component="legend">Rating</Typography>
              <Rating
                name="simple-controlled"
                value={starValue}
                onChange={(e) => setstarValue(e.target.value)}
                size="large"
              />
            </Box>
          </center>

          <TextField
            fullWidth
            rows={4}
            multiline
            onChange={(e) => setContent(e.target.value)}
            variant="outlined"
            type="text"
            label="Comments"
            sx={{ mt: 4 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button
            onClick={() => {
              submitComment();
            }}
            autoFocus
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <Container>
      <Card sx={{ maxWidth: '100%' }}>
                  <CardHeader
                    
                    action={<IconButton aria-label="settings">{/* <MoreVertIcon /> */}</IconButton>}
                    title={allCase1.data?.name}
                    subheader={moment(allCase1.data?.createdAt).format('MMMM DD, YYYY')}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.primary">
                      <div>
                        Type: {allCase1.data?.type},<br></br>
                        SubType: {allCase1.data?.subcategory}
                      </div>
                      <div>ProjectType: {allCase1.data?.projecttype}</div>
                      <div>EmployementYear: {allCase1.data?.employementyear}</div>
                      <div>
                        Contact: {allCase1.data?.contact} <br></br> Email: {allCase1.data?.email}
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">ID</TableCell>
                      <TableCell align="left">Filename</TableCell>
                      <TableCell align="left">For Case</TableCell>
                     
                      <TableCell align="right">View</TableCell>
                      
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {allCase1.data?.urls.map((file, _) => {
                      if (typeof file === "object") {
                        return <TableRow key={"table_" + _}>
                          <TableCell>{_ + 1}</TableCell>
                          <TableCell align='left'>{file?.name}</TableCell>
                          <TableCell align='left'>{file?.name}</TableCell>
                         
                          <TableCell align='right'>
                            <Button variant="outlined">
                              <PreviewIcon onClick={() => {
                                var a = document.createElement("a");
                                a.href = file.url;
                                a.download = file.name;
                                a.target = "_blank";
                                a.click();
                              }} />
                              
                            </Button>
                           
                            
                          </TableCell>
                          
                        </TableRow>
                      } else {
                        return <TableRow key={"table_" + _}>
                          <TableCell>{_ + 1}</TableCell>
                          <TableCell align='left'>File</TableCell>
                          <TableCell align='right'>
                            <Button>
                              <PreviewIcon onClick={() => {
                                var a = document.createElement("a");
                                a.href = file;
                                a.download = "File";
                                a.target = "_blank";
                                a.click();
                              }} />
                            </Button>
                          </TableCell>
                        </TableRow>
                      }
                    })}
                    {allCase1.data?.urls.length < 1 ?
                      <TableRow>
                        <TableCell>No Files Found!</TableCell>
                      </TableRow> :
                      null
                    }
                  </TableBody>
                </Table>
        <Button variant="outlined" sx={{ mt: 4 }} onClick={handleClickOpen}>
          Comment
        </Button>
        {[...allCase].map((info, _) => {
          return (
            <>
              <Paper sx={{ p: 3, mt: 4, border: '0.5px solid #c4c4c4' }} elevation={0}>
                <Rating sx={{ float: 'right' }} name="read-only" value={info?.starValue} readOnly />
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  title={info?.name}
                  subheader={info?.createdAt}
                />
                <p style={{ marginTop: '5px' }}>{info?.type}</p>
                <p style={{ marginTop: '10px' }}>{info?.content}</p>
              </Paper>
            </>
          );
        })}
      </Container>
    </>
  );
};

export default ViewCase;
