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
  FormControl,
  FormControlLabel,
  Radio,
  Select,
  InputLabel,
  Autocomplete
} from '@mui/material';
import { DateRangePicker } from '@mui/lab';
import axios from "axios"
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
import { useEffect, useState } from "react";


const statusArray = [
  {
    value: 'Enable the award'
  },
  {
    value: 'Expire the award'
  }
];

const FinanceConsultantReports = () => {
  const [open, setOpen] = React.useState(false);
  const [awards, setAwards] = React.useState(0);
  const [awardsClaimed, setAwardsClaimed] = React.useState(0);
  const [value, setValue] = React.useState([null, null]);
  const [projecttype, setprojecttype] = React.useState('Refinance');
  const [projectsubtype, setprojectsubtype] = React.useState('');
  const [allCase, setallCase] = useState([]);
  const [allCasedemo, setallCasedemo] = useState(allCase);
  const [status, setstatus] = React.useState('Enable the award');
  const [loading, setloading] = React.useState(true);

  const [month, setMonth] = useState();
  const [projectType, setProjectType]=useState("");
  const [startdate, setStartdate]=useState("");
  const [enddate, setEnddate]=useState("");
  const handleChange = (event) => {
    setstatus(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const csvReport = {
    filename:'Report.csv',
    data:allCase
  }
  const handleClaim = () => {
    let total = 0;
    awardsList.map((e) => {
      total += e.awardPoints;
    });
    setAwardsClaimed(total);
    setAwards(0);
    setOpen(false);
  };
  const handleReset=()=>{
    window.location.reload();
  }

  const handleClose = () => {
    setOpen(false);
  };

  

  const getAllCase = async (month) => {
    try {
      
      if(month)
      {

        const res =await axios.get(`${API_SERVICE}/getallfinanceconsutant?month=${month}`);
        setallCase(res.data.reverse())
        setallCasedemo(res.data.reverse())
      }
      else{
        const res =await axios.get(`${API_SERVICE}/getallfinanceconsutant`);
        setallCase(res.data.reverse())
        setallCasedemo(res.data.reverse())
      }
      
      setloading(false);
    } catch (err) {
      // console.log(err);
    }
  };

  useEffect(() => {
    
    console.log(month);
    console.log(typeof(value[0]));

    
    getAllCase(month);
  },[month]);




  const awardsList = [
    { sl: 1, awardPoints: 2500, status: 'Not Expired' },
    { sl: 2, awardPoints: 500, status: 'Not Expired' },
    { sl: 3, awardPoints: 850, status: 'Not Expired' }
  ];
  const demoEntries = [
    { id: 1, name: 'Testing', date: '27-10-22', type: 'Expired' },
    { id: 2, name: 'Completed', date: '27-10-22', type: 'Expired' },
    { id: 3, name: 'Download', date: '27-10-22', type: 'Expired' },
    { id: 4, name: 'Completed', date: '27-10-22', type: 'Expired' },
    { id: 5, name: 'Completed', date: '27-10-22', type: 'Expired' }
  ];


  
  
  const handleProjectInputChange = (e) => {
    setprojecttype(e.target.value);
  };
  // const handleSubInputChange = (e) => {
  //   setprojectsubtype(e.target.value);
  // };

  
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        fullwidth="true"
        maxWidth="sm"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>Assign Awards</DialogTitle>
        <DialogContent>
          <TextField
            id="Reward-point-basic"
            label="Reward point"
            variant="outlined"
            fullwidth="true"
            type={'number'}
            sx={{ marginTop: '1rem' }}
          />
          <TextField
            id="outlined-select-status"
            select
            label="Status"
            value={status}
            onChange={handleChange}
            SelectProps={{
              native: true
            }}
            fullwidth="true"
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
            fullwidth="true"
            multiline
            rows={2}
            sx={{ marginTop: '1rem' }}
          />
        </DialogContent>

        <DialogActions>
          <Button color="error" onClick={handleClose} autoFocus>
            Cancel
          </Button>
          <Button color="primary" onClick={handleClaim} autoFocus>
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
        <Container maxWidth="xl">
          <Container
            fullwidth="true"
            sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}
          >
            <FormControl sx={{ width: '30%' }}>
              <InputLabel id="demo-simple-select-label">Month</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              
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
          <Container fullwidth="true" sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2 }}>
            <FormControl sx={{ width: '45%' }}>
              <InputLabel id="demo-simple-select-label">Project Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={projecttype}
                label="Project Type"
                onChange={handleProjectInputChange}
              >
                <MenuItem value={'Refinance'}>Refinance</MenuItem>
                {/* <MenuItem value={"Property Agent"}>Property Agent</MenuItem> */}
                {/* <MenuItem value={"All"}>All</MenuItem> */}
              </Select>
            </FormControl>
            {/* <FormControl sx={{ width: "45%" }}>
              <InputLabel id="demo-simple-select-label">Project Sub Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={projectsubtype}
                label="Project Sub Type"
                onChange={handleSubInputChange}
              >
                <MenuItem value={"Finance Consultant"}>Finance Consultant</MenuItem>
                <MenuItem value={"Property Agent"}>Property Agent</MenuItem>
                <MenuItem value={"All"}>All</MenuItem>
              </Select>
            </FormControl> */}
          </Container>

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
                {allCasedemo.map((entry, _) => (
                  <TableRow
                    key={entry.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      { _+1}
                    </TableCell>
                    <TableCell align="center">{entry.name}</TableCell>
                    <TableCell align="center">{entry.createdAt}</TableCell>
                    <TableCell align="center">{entry.type}</TableCell>
                    <TableCell align="center">
                      <IconButton color="primary">
                        <DownloadIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
                {allCasedemo.length < 1 ?
                 <>
                {allCase.map((entry, _) => (
                  <TableRow
                  key={_ + "filter"}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    {
                      (value[0] != null ) && (moment(entry.createdAt).isBetween(moment(value[0]), value[1] != null ? moment(value[1]) : moment().toISOString())) ?
                      <>
                          <TableCell component="th" scope="row">
                            {_ + 1} One
                          </TableCell>
                          <TableCell align="center">{entry.name}</TableCell>
                          <TableCell align="center">{moment(entry.createdAt).format("DD-MM-YY")}</TableCell>
                          <TableCell align="center">{entry.type}</TableCell>
                          <TableCell align="center">
                            <IconButton color="primary">
                              <DownloadIcon />
                            </IconButton>
                          </TableCell>
                        </> :
                        null
                    }
                
                  </TableRow>
                ))}
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

export default FinanceConsultantReports;
