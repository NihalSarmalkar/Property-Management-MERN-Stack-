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

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
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
                  
                  {allCase.map((file, _) => (
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
                ))}
              
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
