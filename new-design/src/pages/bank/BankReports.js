import React from 'react';
import { CSVLink } from 'react-csv';
import moment from 'moment';
import { API_SERVICE } from '../../config/URI';
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
import { useEffect, useState } from 'react';
import axios from 'axios';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

const statusArray = [
  {
    value: 'Enable the award'
  },
  {
    value: 'Expire the award'
  }
];

const demoEntries = [
  { id: 1, name: 'Testing', date: '27-10-22', type: '' },
  { id: 2, name: 'Completed', date: '27-10-22', type: '' },
  { id: 3, name: 'Download', date: '27-10-22', type: '' },
  { id: 4, name: 'Completed', date: '27-10-22', type: '' },
  { id: 5, name: 'Completed', date: '27-10-22', type: '' }
];

const BankReports = () => {
  const [open, setOpen] = React.useState(false);
  const [awards, setAwards] = React.useState(0);
  const [awardsClaimed, setAwardsClaimed] = React.useState(0);
  const [value, setValue] = React.useState([null, null]);
  const [allCase, setallCase] = useState([]);
  const [formdata, setFormData] = useState({});
  const [allCasedemo, setallCasedemo] = useState(allCase);
  const [month, setMonth] = useState();

  const [status, setstatus] = React.useState('Enable the award');

  const handleChange = (event) => {
    setstatus(event.target.value);
  };

  const getAllCase = async (month) => {
    try {
      if(month){

        const res = await axios.get(`${API_SERVICE}/getcase?month=${month}`);
        setallCase(res.data.reverse());
        setallCasedemo(res.data.reverse())
      }
      else{
        const res = await axios.get(`${API_SERVICE}/getcase`);
        setallCase(res.data.reverse());
        setallCasedemo(res.data.reverse())


      }
      

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(month);
    getAllCase(month);
   

  }, [month]);

  const csvReport = {
    filename:'Report.csv',
    data:allCase
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClaim = () => {
    let total = 0;
    awardsList.map((e) => {
      total += e.awardPoints;
    });
    setAwardsClaimed(total);
    setAwards(0);
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleReset=()=>{
    window.location.reload();
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

  const demoEntries = [
    { id: 1, name: 'Testing', date: '27-10-22', type: 'Expired' },
    { id: 2, name: 'Completed', date: '27-10-22', type: 'Expired' },
    { id: 3, name: 'Download', date: '27-10-22', type: 'Expired' },
    { id: 4, name: 'Completed', date: '27-10-22', type: 'Expired' },
    { id: 5, name: 'Completed', date: '27-10-22', type: 'Expired' }
  ];


  const handleInputChange = (e) => {
    setMonth(e.target.value);
  };

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Typography sx={{ mb: 3 }} variant="h4">
            Bank Reports
          </Typography>
          <Container fullWidth sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <FormControl sx={{ width: '30%' }}>
              <InputLabel id="demo-simple-select-label">Month</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={month}
                label="Month"
                onChange={(e)=>setMonth(e.target.value)}
              >
                <MenuItem value={'January'}>January</MenuItem>
                <MenuItem value={'February'}>February</MenuItem>
                <MenuItem value={'March'}>March</MenuItem>
                <MenuItem value={'April'}>April</MenuItem>
                <MenuItem value={'May'}>May</MenuItem>
                <MenuItem value={'June'}>June</MenuItem>
                <MenuItem value={'July'}>July</MenuItem>
                <MenuItem value={'August'}>August</MenuItem>
                <MenuItem value={'September'}>September</MenuItem>
                <MenuItem value={'October'}>October</MenuItem>
                <MenuItem value={'November'}>November</MenuItem>
                <MenuItem value={'December'}>December</MenuItem>
              </Select>
            </FormControl>
            <DateRangePicker
              startText="Start Date"
              endText="End Date"
              value={value}
              onChange={(e) => {
                setallCasedemo([]);
                setValue(e);
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} />
                </React.Fragment>
              )}
            />
            <CSVLink {...csvReport}><Button
              sx={{
                float: 'right'
              }}
              variant="contained"
              color="primary"
              
              // onClick={handleClickOpen}
            >
              Download CSV Report
            </Button></CSVLink>
            
          </Container>
          <Button
              sx={{
                float: 'right'
              }}
              variant="contained"
              color="primary"
              
              onClick={handleReset}
            >
              Reset filters
            </Button>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Sl No.</TableCell>
                  <TableCell align="center">Case Name</TableCell>
                  <TableCell align="center">Submitted On</TableCell>
                  <TableCell align="center">Type</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allCasedemo.map((entry, _) => {
                  if (entry.action === true) {
                    return (
                      <TableRow key={entry.id}>
                        <TableCell>{_ + 1}</TableCell>
                        <TableCell align="center">{entry.name}</TableCell>
                        <TableCell align="center">{entry.createdAt}</TableCell>
                        <TableCell align="center">{entry.type}</TableCell>
                        <TableCell align="center">
                          <IconButton color="primary">
                            <DownloadIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  } 
                })}
                {allCasedemo.length < 1 ?
                 <>
                {allCase.map((entry, _) =>{
                  if (entry.action === true) {
                    return (
                      <TableRow key={entry.id}>
                        <TableCell>{_ + 1}</TableCell>
                        <TableCell align="center">{entry.name}</TableCell>
                        <TableCell align="center">{entry.createdAt}</TableCell>
                        <TableCell align="center">{entry.type}</TableCell>
                        <TableCell align="center">
                          <IconButton color="primary">
                            <DownloadIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                    }
                  })}
            </> : null
           }
                
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </>
  );
};

export default BankReports;
