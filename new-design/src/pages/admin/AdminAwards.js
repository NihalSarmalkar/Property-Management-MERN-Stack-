import React from 'react';
import {
  Box,
  Container,
  Button,
  Dialog,
  IconButton,
  Tooltip,
  Typography,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  Grid
} from '@mui/material';
// import { DashboardLayout } from '../components/dashboard-layout';
import { useEffect, useState } from "react";
import { API_SERVICE } from '../../config/URI';
import Avatar from '@mui/material/Avatar';
import moment from 'moment'
import { red } from '@mui/material/colors';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import PreviewIcon from '@mui/icons-material/Preview';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import CardContent from '@mui/material/CardContent';

import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios"
import MenuItem from '@mui/material/MenuItem';
// import { TrafficByDevice } from '../components/dashboard/traffic-by-device';
// import { Sales } from '../components/dashboard/sales';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { TrafficByDevice } from 'src/components/charts/BarChart';
import { Sales } from 'src/components/charts/DonutChart';
import DeleteIcon from '@mui/icons-material/Delete';
import { useStorage } from '../../hooks/useStorage';
import { async } from '@firebase/util';


const statusArray = [
  {
    value: 'Enable the award'
  },
  {
    value: 'Expire the award'
  }
];

const typesArray = [
  {
    value: 'Finance Consultant'
  },
  {
    value: 'Property Agent'
  },
  {
    value: 'All'
  }
];

const demoTransaction = [
  { id: 1, name: 'Finance Consultant', date: '27-10-22', type: 'Expired', transactionAmt: 1200 },
  { id: 2, name: 'Finance Consultant', date: '27-10-22', type: 'Expired', transactionAmt: 1200 },
  { id: 3, name: 'Finance Consultant', date: '27-10-22', type: 'Expired', transactionAmt: 1200 },
  { id: 4, name: 'Bank Consultant', date: '27-10-22', type: 'Expired', transactionAmt: 1200 },
  { id: 5, name: 'Admin', date: '27-10-22', type: 'Expired', transactionAmt: 1200 }
];


const TableViewPage = ({ counter, caseall, rerender }) => {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [status, setstatus] = React.useState('');

  console.log("caseall")
  console.log(caseall)

  var date = caseall.createdAt;
  date = new Date(date).toString();

  const [formData, setFormData] = React.useState({});

  const setFormProp = function (e) {
    const oldFormData = formData;
    oldFormData[e.target.name] = e.target.value;

    setFormData(oldFormData);
  }
  const handledelete=async(id)=>{
    await axios.delete("http://localhost:8080/api/v1/main/deladminawards/"+id);

    // console.log("res")
    // allCase.push(res)
    // console.log(allCase)

    // if (res) setallCase(allCase.reverse());
    // // if (response === 'Added') {
    // //   alert('Case successfully added');
    // // }
    // setloading(true);
    rerender();
    // setEdit(false);
    // setOpen(false);




    console.log(id)
  }
  const updateAllCase=async(id,statuss)=>{
    var newdata = {
      status:statuss
    }

    console.log(statuss)
    const res =await axios.put(`http://localhost:8080/api/v1/main/updateadminawards/${id}`,newdata);

    console.log(res)

    rerender();

  }

  
  
  

  const handleDeleteFile = async (file,id)=>{
   
    const res =await axios.get("http://localhost:8080/api/v1/main/getonefinanceconsutant/"+ id);
   
    res.data.urls.splice(file,1)
  
   
    const newresponse = await axios.put(`http://localhost:8080/api/v1/main/putonefinanceconsutant/${id}`,res.data);
    if (await newresponse) {
      rerender();
      setEdit(false);
      setOpen(false);
    }

  }

  const updateCase = async function () {
    
    const request = await fetch(`${API_SERVICE}/updateawards`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        case: caseall,
        updateable: formData
      })
    });

    if (await request.json()) {
      rerender();
      setEdit(false);
      setOpen(false);
    }
  }

  return (
    <>
      <TableRow key={caseall._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell component="th" scope="row">
          {counter}
        </TableCell>
        <TableCell align="center">{caseall.type}</TableCell>
        
        <TableCell align="center">{caseall.rewardtitle}</TableCell>
        <TableCell align="center">{caseall.rewardpoint}</TableCell>
        <TableCell align="center">
                    <TextField
                      id="outlined-select-status"
                      select
                      value={caseall.status}
                      onChange={(e)=>{
                        setstatus(e.target.value)
                      }}
                      
                      onClick={
                        ()=>{
                          updateAllCase(caseall._id,status)
                        }
                      }
                      SelectProps={{
                        native: true
                      }}
                      fullWidth
                    >
                      {statusArray.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.value}
                        </option>
                      ))}
                    </TextField>
                    </TableCell>
                    <TableCell align="center">{caseall.awardsclaimed}</TableCell>
                    <TableCell align="center">{caseall.createdAt}</TableCell>

        <TableCell align="center">
          {/* <IconButton color="primary"> */}
          <Dialog
            open={open}
            onClose={() => { }}
            aria-labelledby="alert-dialog-title"
            fullWidth
            maxWidth="md"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{edit ? "Edit" : "View"} Case</DialogTitle>
            {
              !edit ?
              <DialogContent>

                <Card sx={{ maxWidth: '100%' }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {caseall.rewardtitle}
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        {/* <MoreVertIcon /> */}
                      </IconButton>
                    }
                    title={caseall.type}
                    subheader={moment(caseall.createdAt).format("MMMM DD, YYYY")}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.primary">
                      <div>
                        Type: {caseall.type},<br></br>
                        Reward Title: {caseall.rewardtitle}
                      </div>
                      <div>
                        Reward Point: {caseall.rewardpoint}
                      </div>
                      <div>
                      Status: {caseall.status}
                      </div>
                      <div>
                      Awards Claimed: {caseall.awardsclaimed} 
                      </div>
                      <div>
                      Description: {caseall.description}
                      </div>
                      
                    </Typography>
                  </CardContent>
                </Card>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">ID</TableCell>
                      <TableCell align="left">Filename</TableCell>
                     
                      <TableCell align="right">View</TableCell>
      
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[...caseall.urls].map((file, _) => {
                      if (typeof file === "object") {
                        return <TableRow key={"table_" + _}>
                        <TableCell>{_ + 1}</TableCell>
                        <TableCell align='left'>{caseall.name}</TableCell>
                      
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
                    {[...caseall.urls].length < 1 ?
                      <TableRow>
                        <TableCell>No Files Found!</TableCell>
                      </TableRow> :
                      null
                    }
                  </TableBody>
                </Table>
              </DialogContent>
              : <DialogContent>
                <br></br>
                  <TextField id="outlined-basic" onChange={setFormProp} defaultValue={caseall.rewardtitle} style={{minWidth: '100%', marginBottom: '20px'}} name="rewardtitle" label="Reward Title" variant="outlined" />
                  {/* <TextField id="outlined-basic" onChange={setFormProp} defaultValue={caseall.type} style={{minWidth: '100%', marginBottom: '20px'}} name="type" label="Type" variant="outlined" /> */}
                  

                  <TextField id="outlined-basic" onChange={setFormProp} defaultValue={caseall.rewardpoint} style={{minWidth: '100%', marginBottom: '20px'}} name="rewardpoint" label="Reward point" variant="outlined" />
               
                  <TextField id="outlined-basic" onChange={setFormProp} defaultValue={caseall.status} style={{minWidth: '100%', marginBottom: '20px'}} name="status" label="Status" variant="outlined" />
                  <TextField id="outlined-basic" onChange={setFormProp} defaultValue={caseall.description} style={{minWidth: '100%', marginBottom: '20px'}} name="description" label="Description" variant="outlined" />
                  
              </DialogContent>
            }

            <DialogActions>
              <Button onClick={() => {setEdit(false); setOpen(false);}} autoFocus>Close</Button>
              {!edit ? (
                <Button onClick={() => setEdit(true)}>Edit</Button>
              ): (
                <Button onClick={updateCase} >Update</Button>
              ) 
              }
            </DialogActions>
          </Dialog>
          <Button><PreviewIcon onClick={() => setOpen(true)} /></Button>
          {/* </IconButton> */}
        </TableCell>
      </TableRow>
    </>
  );
};

const ShowServicesList = ({ allCase, getAllCase }) => {
  var counter = 0;
  return (
    <>
      {allCase.map((caseall) => {
        counter = counter + 1;
        return <TableViewPage caseall={caseall} rerender={getAllCase} counter={counter} key={caseall._id} />;
      })}
    </>
  );
};


const AdminAwards = () => {
  const [open, setOpen] = React.useState(false);
  const [awards, setAwards] = React.useState(0);
  const [awardsClaimed, setAwardsClaimed] = React.useState(0);
  const [edit, setEdit] = React.useState(false);
  const [status, setstatus] = React.useState('');
  const [type, settype] = React.useState('');
  const [rewardtitle, setrewardtitle] = React.useState('');
  const [rewardpoint, setrewardpoint] = React.useState('');
  const [allCase, setallCase] = useState([]);
  const [description, setdescription] = React.useState('');
  const [currentFile, setCurrentFile] = React.useState(null);
  const [loading, setloading] = React.useState(true);
  const [urls, setUrls] = React.useState([]);


  const uploadFile = function (e) {
    if (currentFile !== null) {
      alert('Please wait until the file is being uploaded!');
      e.target.value = null;
      return;
    }

    const file = e.target.files[0] ?? null;
    console.log("file")
    console.log(file)

    if (file) {
      
      setCurrentFile({
        file: file,
      });
    }
  };
  const UploadFile = ({ file, setFile, setURL, urls }) => {
    const { progress, url } = useStorage(file.file, 'files');
  
    console.log(progress);
  
    useEffect(() => {
      if (url != null) {
        const nurls = urls;
        nurls.push({
          name: file.name,
          url: url
        });
        console.log(urls)
        console.log("urls")
        console.log(nurls)
  
        setFile(null);
        setUrls(url)
        
        
      }
    }, [url]);
  
    return <span></span>;
  };
  const submitCase = async () => {
   
    const data = {
      rewardtitle,
      type,
      rewardpoint,
      status,
      description,
      urls

    };
    console.log(typeof(type))
   

    const res =await axios.post("http://localhost:8080/api/v1/main/addadminawards",data);

    console.log("res")
    allCase.push(res)
    console.log(allCase)

    if (res) setallCase(allCase.reverse());
    // if (response === 'Added') {
    //   alert('Case successfully added');
    // }
    setloading(true);
    getAllCase();
    setEdit(false);
    setOpen(false);

   
  };
  const getAllCase = async () => {
    try {
      const res =await axios.get("http://localhost:8080/api/v1/main/getadminawards");
      console.log("getAllCase")
      console.log(res.data)
      setallCase(res.data.reverse())

      
      setloading(false);
    } catch (err) {
      // console.log(err);
    }
  };

  const updateAllCase=async(id,statuss)=>{
    var newdata = {
      status:statuss
    }

    console.log(statuss)
    const res =await axios.put(`http://localhost:8080/api/v1/main/updateadminawards/${id}`,newdata);

    console.log(res)

    getAllCase();

  }

  useEffect(() => {

    
    getAllCase();
  },[]);

 




  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClaim = () => {
    submitCase();
 
    
    // let total = 0;
    // awardsList.map((e) => {
    //   total += e.awardPoints;
    // });
    // setAwardsClaimed(total);
    // setAwards(0);
    // setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handledelete=async(id)=>{
    await axios.delete("http://localhost:8080/api/v1/main/deladminawards/"+id);

    // console.log("res")
    // allCase.push(res)
    // console.log(allCase)

    // if (res) setallCase(allCase.reverse());
    // // if (response === 'Added') {
    // //   alert('Case successfully added');
    // // }
    // setloading(true);
    getAllCase();
    // setEdit(false);
    // setOpen(false);




    console.log(id)
  }

  const awardsList = [
    { sl: 1, awardPoints: 2500, status: 'Not Expired' },
    { sl: 2, awardPoints: 500, status: 'Not Expired' },
    { sl: 3, awardPoints: 850, status: 'Not Expired' }
  ];

  React.useEffect(() => {
    let total = 0;
    awardsList.map((e) => {
      total += e.awardPoints;
    });
    setAwards(total);
  }, []);

  return (
    <>
    {currentFile && (
        <UploadFile file={currentFile} urls={urls} setURL={setUrls} setFile={setCurrentFile} />
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        fullWidth
        maxWidth="sm"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>Assign Awards</DialogTitle>
        <DialogContent>
          <TextField
            id="Reward-point-basic"
            label="Reward title"
            variant="outlined"
            fullWidth
            sx={{ marginTop: '1rem' }}
            onChange={(e)=>
            setrewardtitle(e.target.value)}
          />
          <TextField
            id="Reward-point-basic"
            label="Reward point"
            variant="outlined"
            fullWidth
            type={'number'}
            sx={{ marginTop: '1rem' }}
            onChange={(e)=>
              setrewardpoint(e.target.value)}
          />
          <TextField
            id="outlined-select-status"
            select
            label="Type"
            value={type}
            onChange={(e)=>{
              settype(e.target.value)
            }}
            SelectProps={{
              native: true
            }}
            fullWidth
            sx={{ marginTop: '1rem' }}
          >
            {typesArray.map((option) => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </TextField>
          <TextField
            id="outlined-select-status"
            select
            label="Status"
            value={status}
            onChange={(e)=>{
              setstatus(e.target.value)
            }}
            SelectProps={{
              native: true
            }}
            fullWidth
            sx={{ marginTop: '1rem' }}
          >
            {statusArray.map((option) => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </TextField>

          <TextField
            id="description-basic"
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={2}
            sx={{ marginTop: '1rem' }}
            onChange={(e)=>
              setdescription(e.target.value)}
          />
          <Button
            color="primary"
            variant="contained"
            autoFocus
            sx={{ marginX: 'auto', marginY: '10px' }}
          >
             <input onChange={uploadFile} type="file" />
            Upload Image
          </Button>
        </DialogContent>

        <DialogActions>
          <Button color="error" onClick={handleClose} autoFocus>
            Cancel
          </Button>
          <Button color="primary" onClick={submitCase} autoFocus>
            Assign
          </Button>
        </DialogActions>
      </Dialog>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Button
            sx={{
              float: 'right',
              mb: 5
            }}
            variant="contained"
            color="primary"
            onClick={handleClickOpen}
          >
            Post Awards Offer
          </Button>
          {/* <Grid container spacing={3}>
            <Grid item sm={6}>
              <Sales />
            </Grid>
            <Grid item sm={6}>
              <TrafficByDevice />
            </Grid>
          </Grid> */}

          <TableContainer component={Paper} sx={{ marginY: '50px' }}>
            <Table sx={{ Width: '100%' }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Sl No.</TableCell>
                  <TableCell align="left">Award Type</TableCell>
                  <TableCell align="left">Full Name</TableCell>
                  <TableCell align="left">Awards Points</TableCell>
                  <TableCell align="center">Status</TableCell>
                  <TableCell align="left">Award Claimed</TableCell>
                  <TableCell align="center">Date</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
               
                  {/* <TableCell>1</TableCell>
                  <TableCell align="left">Finance Consultant</TableCell>
                  <TableCell align="left">Prathmesh Sebastian</TableCell>
                  <TableCell align="left">150</TableCell>
                  <TableCell align="left">
                    <TextField
                      id="outlined-select-status"
                      select
                      value={status}
                      onChange={(e)=>{
                        setstatus(e)
                      }}
                      SelectProps={{
                        native: true
                      }}
                      fullWidth
                    >
                      {statusArray.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.value}
                        </option>
                      ))}
                    </TextField>
                  </TableCell>
                  <TableCell align="left">1500</TableCell>
                  <TableCell align="left">Jan 20 2022</TableCell> */}
                  
                  {/* {allCase.map((file, _) => (
                  <TableRow key={1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {_ +1}
                    </TableCell>
                    <TableCell align="center">{file.type}</TableCell>
                    <TableCell align="center">{file.rewardtitle}</TableCell>
                    <TableCell align="center">{file.rewardpoint}</TableCell>
                    <TableCell align="center">
                    <TextField
                      id="outlined-select-status"
                      select
                      value={file.status}
                      onChange={(e)=>{
                        setstatus(e.target.value)
                      }}
                      
                      onClick={
                        ()=>{
                          updateAllCase(file._id,status)
                        }
                      }
                      SelectProps={{
                        native: true
                      }}
                      fullWidth
                    >
                      {statusArray.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.value}
                        </option>
                      ))}
                    </TextField>
                    </TableCell>
                    <TableCell align="center">{file.awardsclaimed}</TableCell>
                    <TableCell align="center">{file.createdAt}</TableCell>
                    
                      <Button variant="outlined" color='error' onClick={()=>{
                        handledelete(file._id)
                      }} sx={{ marginX: 'auto', marginY: '25px' }}>
                        <DeleteIcon   align="left" color='error' />
                                
                      </Button>
                      
                    
                    
                  </TableRow>
                ))} */}
                {loading === true ? <TableRow><TableCell>Loading...</TableCell></TableRow> : <ShowServicesList getAllCase={getAllCase} allCase={allCase} />}
              
              </TableBody>
            </Table>
          </TableContainer>

          <Typography variant="h5" sx={{ my: 2 }}>
            Transaction Table
          </Typography>
          <TableContainer component={Paper} sx={{ my: 2 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Total Amount</TableCell>
                  <TableCell align="center">Project Type</TableCell>
                  <TableCell align="center">Transaction Date</TableCell>
                  <TableCell align="center">Transaction Amount</TableCell>
                  <TableCell align="center">Case ID</TableCell>
                  <TableCell align="center">View More</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {demoTransaction.map((entry) => (
                  <TableRow key={1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {entry.id}
                    </TableCell>
                    <TableCell align="center">{entry.name}</TableCell>
                    <TableCell align="center">{entry.date}</TableCell>
                    <TableCell align="center">{entry.transactionAmt}</TableCell>
                    <TableCell align="center">{entry.id}</TableCell>
                    <TableCell align="center">
                      <IconButton color="primary">
                        <VisibilityIcon />
                      </IconButton>
                    </TableCell>
                    
                  </TableRow>
                ))}
                
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </>
  );
};

// AdminAwards.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default AdminAwards;
