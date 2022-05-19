import React from 'react';
import moment from 'moment';
import { CSVLink } from 'react-csv';
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
  InputLabel,
  Select,
  Grid,
  Autocomplete
} from '@mui/material';
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
import { DateRangePicker } from '@mui/lab';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useEffect, useState } from "react";
import axios from "axios"
import {
  AppTasks,
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppNewsUpdate,
  AppWeeklySales,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppCurrentSubject,
  AppConversionRates,
  TotalInvestment
} from '../../components/_dashboard/app';
const statusArray = [
  {
    value: 'Enable the award'
  },
  {
    value: 'Expire the award'
  }
];

const AdminAwardReports = () => {
  const [open, setOpen] = React.useState(false);
  const [awards, setAwards] = React.useState(0);
  const [awardsClaimed, setAwardsClaimed] = React.useState(0);
  const [value, setValue] = React.useState([null, null]);
  const [projecttype, setprojecttype] = React.useState('');
  const [projectsubtype, setprojectsubtype] = React.useState('');
  const [allCase, setallCase] = useState([]);
  const [allCasedemo, setallCasedemo] = useState(allCase);
  const [allCase1, setallCase1] = useState([]);
  const [allCasedemo1, setallCasedemo1] = useState(allCase1);
  const [loading, setloading] = React.useState(true);
  const [month, setMonth] = useState();

  const [status, setstatus] = React.useState('Enable the award');

  const handleChange = (event) => {
    setstatus(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const csvReport = {
    filename:'Report.csv',
    data:allCase.concat(allCase1)
  }
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

      if(month)
      {

        const res =await axios.get(`${API_SERVICE}/getcase?month=${month}`);
        setallCase1(res.data.reverse())
        setallCasedemo1(res.data.reverse())
      }
      else{
        const res =await axios.get(`${API_SERVICE}/getcase`);
        setallCase1(res.data.reverse())
        setallCasedemo1(res.data.reverse())
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

  const demoEntries = [
    { id: 1, name: 'Testing', date: '27-10-22', type: 'Expired' },
    { id: 2, name: 'Completed', date: '27-10-22', type: 'Expired' },
    { id: 3, name: 'Download', date: '27-10-22', type: 'Expired' },
    { id: 4, name: 'Completed', date: '27-10-22', type: 'Expired' },
    { id: 5, name: 'Completed', date: '27-10-22', type: 'Expired' }
  ];
  const demoTransaction = [
    { id: 1, name: 'Finance Consultant', date: '27-10-22', type: 'Expired', transactionAmt: 1200 },
    { id: 2, name: 'Finance Consultant', date: '27-10-22', type: 'Expired', transactionAmt: 1200 },
    { id: 3, name: 'Finance Consultant', date: '27-10-22', type: 'Expired', transactionAmt: 1200 },
    { id: 4, name: 'Bank Consultant', date: '27-10-22', type: 'Expired', transactionAmt: 1200 },
    { id: 5, name: 'Admin', date: '27-10-22', type: 'Expired', transactionAmt: 1200 }
  ];

  React.useEffect(() => {
    let total = 0;
    awardsList.map((e) => {
      total += e.awardPoints;
    });
    setAwards(total);
  }, []);

  
  const handleInputChange = (e) => {
    setMonth(e.target.value);
  };

  const handleProjectInputChange = (e) => {
    setprojecttype(e.target.value);
  };
  const handleSubInputChange = (e) => {
    setprojectsubtype(e.target.value);
  };
  return (
    <>
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
            label="Reward point"
            variant="outlined"
            fullWidth
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
            fullWidth
            sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, alignItems: 'center' }}
          >
            <FormControl sx={{ width: '30%' }}>
              <InputLabel id="demo-simple-select-label">Month</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={month}
                label="Month"
                onChange={handleInputChange}
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
                setallCasedemo1([]);
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
          <Container
            fullwidth="true"
            sx={{ display: 'flex', justifyContent: 'space-between', my: 5 }}
          >
            <FormControl sx={{ width: '45%' }}>
              <InputLabel id="demo-simple-select-label">Project Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={projecttype}
                label="Project Type"
                onChange={handleProjectInputChange}
              >
                <MenuItem value={'Finance Consultant'}>Finance Consultant</MenuItem>
                <MenuItem value={'Property Agent'}>Property Agent</MenuItem>
                <MenuItem value={'All'}>All</MenuItem>
                {/* <MenuItem value={"Property Agent"}>Property Agent</MenuItem> */}
              </Select>
            </FormControl>
            {projecttype === 'Finance Consultant' ? (
              <FormControl sx={{ width: '45%' }}>
                <InputLabel id="demo-simple-select-label">Project Sub Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={projectsubtype}
                  disabled={projecttype.length < 1}
                  label="Project Sub Type"
                  onChange={handleSubInputChange}
                >
                  <MenuItem value={'Basic Salary'}>Basic Salary</MenuItem>
                  <MenuItem value={'Basic + Commission / Allowance'}>
                    Basic + Commission / Allowance
                  </MenuItem>
                  <MenuItem value={'Full Commission earner'}>Full Commission earner</MenuItem>
                </Select>
              </FormControl>
            ) : (
              <FormControl sx={{ width: '45%' }}>
                <InputLabel id="demo-simple-select-label">Project Sub Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={projectsubtype}
                  disabled={projecttype.length < 1}
                  label="Project Sub Type"
                  onChange={handleSubInputChange}
                >
                  <MenuItem value={'SDN BHD'}>SDN BHD</MenuItem>
                  <MenuItem value={'Sole Proprietorship'}>Sole Proprietorship</MenuItem>
                </Select>
              </FormControl>
            )}
          </Container>

          <Grid sx={{ mb: 4 }} container spacing={3}>
            <Grid item xs={12} sm={6} md={6}>
              <AppWeeklySales />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TotalInvestment />
            </Grid>
            
  {/* 
            <Grid item xs={12} md={6} lg={8}>
              <AppConversionRates />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <AppCurrentSubject />
            </Grid>

            <Grid item xs={12} md={6} lg={8}>
              <AppNewsUpdate />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <AppOrderTimeline />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <AppTrafficBySite />
            </Grid>

            <Grid item xs={12} md={6} lg={8}>
              <AppTasks />
            </Grid> */}
          </Grid>

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
                {allCasedemo1.map((entry, _) => (
                  <TableRow
                    key={entry.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      { _+1}
                    </TableCell>
                    <TableCell align="center">{entry.name}</TableCell>
                    <TableCell align="center">{entry.createdAt}</TableCell>
                    <TableCell align="center">{entry.transactionAmt}</TableCell>
                    <TableCell align="center">{entry._id}</TableCell>
                    <TableCell align="center">
                      <IconButton color="primary">
                        <DownloadIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
                {allCasedemo1.length < 1 ?
                 <>
                {allCase1.map((entry, _) => (
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
                    <TableCell align="center">{entry.createdAt}</TableCell>
                    <TableCell align="center">{entry.transactionAmt}</TableCell>
                    <TableCell align="center">{entry._id}</TableCell>
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

// AdminAwardsReports.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default AdminAwardReports;
