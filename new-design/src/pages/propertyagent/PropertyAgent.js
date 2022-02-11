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
  FormControl,
  FormControlLabel,
  Radio,
  Select,
  InputLabel,
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

const statusArray = [
  {
    value: 'Enable the award'
  },
  {
    value: 'Expire the award'
  }
];

const PropertyAgent = () => {
  const [open, setOpen] = React.useState(false);
  const [awards, setAwards] = React.useState(0);
  const [awardsClaimed, setAwardsClaimed] = React.useState(0);
  const [value, setValue] = React.useState([null, null]);
  const [projecttype, setprojecttype] = React.useState('');
  const [projectsubtype, setprojectsubtype] = React.useState('');

  const [status, setstatus] = React.useState('Enable the award');

  const handleChange = (event) => {
    setstatus(event.target.value);
  };
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
  React.useEffect(() => {
    let total = 0;
    awardsList.map((e) => {
      total += e.awardPoints;
    });
    setAwards(total);
  }, []);

  const [month, setMonth] = React.useState('January');
  const handleInputChange = (e) => {
    setMonth(e.target.value);
  };
  const [type, settype] = React.useState('');
  const [subtype, setsubtype] = React.useState('');

  const handleProjectInputChange = (e) => {
    settype(e.target.value);
    // console.log(e.target.value);
  };
  const handleSubProjectInputChange = (e) => {
    setsubtype(e.target.value);
  };
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
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} />
                </React.Fragment>
              )}
            />
            <Button
              sx={{
                float: 'right'
              }}
              variant="contained"
              color="primary"
              // onClick={handleClickOpen}
            >
              Download CSV Report
            </Button>
          </Container>
          <Container
            fullwidth="true"
            sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}
          >
            <FormControl sx={{ width: '45%' }}>
              <InputLabel id="demo-simple-select-label">Project Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="Project Type"
                onChange={handleProjectInputChange}
              >
                <MenuItem value={'Employee'}>Employee</MenuItem>
                <MenuItem value={'Self-Employed'}>Self-Employed</MenuItem>
                {/* <MenuItem value={"Property Agent"}>Property Agent</MenuItem> */}
              </Select>
            </FormControl>
            {type === 'Employee' ? (
              <FormControl sx={{ width: '45%' }}>
                <InputLabel id="demo-simple-select-label">Project Sub Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={subtype}
                  disabled={type.length < 1}
                  label="Project Sub Type"
                  onChange={handleSubProjectInputChange}
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
                  value={subtype}
                  disabled={type.length < 1}
                  label="Project Sub Type"
                  onChange={handleSubProjectInputChange}
                >
                  <MenuItem value={'SDN BHD'}>SDN BHD</MenuItem>
                  <MenuItem value={'Sole Proprietorship'}>Sole Proprietorship</MenuItem>
                </Select>
              </FormControl>
            )}
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
                {demoEntries.map((entry) => (
                  <TableRow
                    key={entry.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {entry.id}
                    </TableCell>
                    <TableCell align="center">{entry.name}</TableCell>
                    <TableCell align="center">{entry.date}a</TableCell>
                    <TableCell align="center">{entry.type}</TableCell>
                    <TableCell align="center">
                      <IconButton color="primary">
                        <DownloadIcon />
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

export default PropertyAgent;
