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
  FormControl,
  Radio,
  InputLabel,
  Select,
  Autocomplete
} from '@mui/material';
import { DateRangePicker } from '@mui/lab';

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
import MenuItem from '@mui/material/MenuItem';
import DownloadIcon from '@mui/icons-material/Download';
import { Delete, ViewAgenda, Visibility } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import axios from 'axios';

const UserManagement = () => {
  const [openreview, setOpenreview] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [allCase, setallCase] = useState([]);
  const [formdata, setFormData] = useState({});
  const [name, setName] = useState([]);
  const [usertype, setUserType] = useState([]);
  const [casequota, setCasequota] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);


  const handleClickOpen = () => {
    setOpen(true);
  };


  const getAllCase = async (month) => {
    try {
      const res = await axios.get('http://localhost:8080/api/v1/main/getusers');
      setallCase(res.data.reverse());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllCase();

    
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {

    setOpenreview(false);

  };

  const handleClickOpenreview = () => {
    setOpenreview(true);
  };

  const submitCase = async () => {
   
    const data = {
      usertype,
      name,
      casequota,
      email,
      password

    };

   

    const res =await axios.post("http://localhost:8080/api/v1/main/adduser",data);

    console.log("res")
    allCase.push(res)
    console.log(allCase)

    if (res) setallCase(allCase.reverse());
    // if (response === 'Added') {
    //   alert('Case successfully added');
    // }

    getAllCase();
    handleClose();
   

   
  };


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
    // setAwards(total);
  }, []);

  const handledeleteUser = async(id)=>{
    console.log(id)
    await axios.delete(`http://localhost:8080/api/v1/main/deluser/${id}`);
    getAllCase();
    console.log(id)
  }

  const demoEntries = [
    { id: 1, email: 'jhondoes@gmail.com', date: '27-10-22', type: 'Expired' },
    { id: 2, email: 'jhondoes@gmail.com', date: '27-10-22', type: 'Expired' },
    { id: 4, email: 'jhondoes@gmail.com', date: '27-10-22', type: 'Expired' },
    { id: 5, email: 'jhondoes@gmail.com', date: '27-10-22', type: 'Expired' }
  ];

  const [month, setMonth] = React.useState('January');
  const handleInputChange = (e) => {
    setMonth(e.target.value);
  };

  return (
    <>
    <Dialog
    open={openreview}
    onClose={handleCancel}
    aria-labelledby="alert-dialog-title"
    fullWidth
    maxWidth="md"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">User Details</DialogTitle>
      <DialogContent>
        <Typography sx={{ mt: 2 }} variant="h6">
          Type:{formdata?.usertype}
        </Typography>
        <Typography sx={{ mt: 2 }} variant="h6">
          Name: {formdata?.name}
        </Typography>
        <Typography sx={{ mt: 2 }} variant="h6">
        Case Quota: {formdata?.caseQuota}
        </Typography>
        <Typography sx={{ mt: 2 }} variant="h6">
         Email:{formdata?.email}
        </Typography>
        <Typography sx={{ mt: 2 }} variant="h6">
        CreatedAt Date: {formdata?.createdAt}
        </Typography>
    </DialogContent>
    </Dialog>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        fullWidth
        maxWidth="sm"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>User Management</DialogTitle>
        <DialogContent>
          <TextField
            id="Name-point-basic"
            label="Name"
            variant="outlined"
            fullWidth
            onChange={(e) => setName(e.target.value)}
            sx={{ marginTop: '1rem' }}
          />
          <FormControl fullWidth sx={{ marginTop: '1rem' }}>
            <InputLabel id="demo-simple-select-label">Select User Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={usertype}
              label="Select User Type"
              onChange={(e) => setUserType(e.target.value)}
            >
              <MenuItem value={'Property Agent'}>Property Agent</MenuItem>
              <MenuItem value={'Finance Consultant'}>Finance Consultant</MenuItem>
              <MenuItem value={'Banker'}>Banker</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="Maximum Case Request Quota-point-basic"
            label="Maximum Case Request Quota
            "
            variant="outlined"
            onChange={(e) => setCasequota(e.target.value)}
            fullWidth
            type={'number'}
            sx={{ marginTop: '1rem' }}

          />{' '}
          <TextField
            id="Email-point-basic"
            label="Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            sx={{ marginTop: '1rem' }}
          />{' '}
          <TextField
            id="Password-basic"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            fullWidth
            sx={{ marginTop: '1rem' }}
          />
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
        <Container fullWidth sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography sx={{ mb: 3 }} variant="h4">
            User Management
          </Typography>
          <Button
            sx={{
              float: 'right',
              mb: 2
            }}
            variant="contained"
            color="primary"
            onClick={handleClickOpen}
          >
            Add User
          </Button>
        </Container>
        <Container maxWidth="lg">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Sl No.</TableCell>
                  <TableCell align="left">Email Address</TableCell>
                  <TableCell align="left">Type</TableCell>
                  <TableCell align="left">Created On</TableCell>
                  <TableCell align="center">Action</TableCell>
                  <TableCell align="center">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allCase.map((entry,_) => (
                  <TableRow key={1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {_+1}
                    </TableCell>
                    <TableCell align="left">{entry.email}</TableCell>
                    <TableCell align="left">{entry.usertype}</TableCell>
                    <TableCell align="left">{entry.createdAt}</TableCell>
                    <TableCell align="center">
                      <IconButton color="primary" onClick={()=>{
                        handledeleteUser(entry._id)
                      }}>
                        <Delete />
                      </IconButton>
                      <IconButton color="primary"
                      onClick={() => {
                        setFormData(entry);

                        handleClickOpenreview();
                      }}>
                        <Visibility />
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

export default UserManagement;
