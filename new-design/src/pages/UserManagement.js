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

const UserManagement = () => {
  const [open, setOpen] = React.useState(false);
  const [userType, setUserType] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            sx={{ marginTop: '1rem' }}
          />
          <FormControl fullWidth sx={{ marginTop: '1rem' }}>
            <InputLabel id="demo-simple-select-label">Select User Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={userType}
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
            fullWidth
            type={'number'}
            sx={{ marginTop: '1rem' }}
          />{' '}
          <TextField
            id="Email-point-basic"
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ marginTop: '1rem' }}
          />{' '}
          <TextField
            id="Password-basic"
            label="Password"
            variant="outlined"
            fullWidth
            sx={{ marginTop: '1rem' }}
          />
        </DialogContent>

        <DialogActions>
          <Button color="error" onClick={handleClose} autoFocus>
            Cancel
          </Button>
          <Button color="primary" onClick={handleClose} autoFocus>
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
                </TableRow>
              </TableHead>
              <TableBody>
                {demoEntries.map((entry) => (
                  <TableRow key={1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {entry.id}
                    </TableCell>
                    <TableCell align="left">{entry.email}</TableCell>
                    <TableCell align="left">{entry.type}</TableCell>
                    <TableCell align="left">{entry.date}</TableCell>
                    <TableCell align="center">
                      <IconButton color="primary">
                        <Delete />
                      </IconButton>
                      <IconButton color="primary">
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
