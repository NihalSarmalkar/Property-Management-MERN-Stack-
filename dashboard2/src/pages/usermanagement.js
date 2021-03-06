import React from 'react';
import Head from 'next/head';
import { Box, Container, Button, TextField, Typography, Tooltip, IconButton } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Delete from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const usermanagement = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
      setOpen(true);
  };
  const handleClose = () => {
      setOpen(false);
  };

  const [usertype, setusertype] = React.useState("");

  return (
  <>
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        fullWidth
        maxWidth="md"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">
            User Management
        </DialogTitle>
        <DialogContent>
          <TextField sx={{ mt: 4 }} type="text" label="Name" fullWidth variant="outlined" />

          <select
              style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #000000',
                  borderRadius: '10px',
                  marginTop: '40px'
              }}
              onChange={(e) => setusertype(e.target.value)}
          >
              <option disabled selected>Select User Type</option>
              <option value="Finance Consultant">Finance Consultant</option>
              <option value="Property Agent">Property Agent</option>
              <option value="Banker">Banker</option>
          </select>

          {
              usertype === "Banker" ? (
                <>
                    <select
                            style={{
                                width: '100%',
                                padding: '12px',
                                border: '1px solid #000000',
                                borderRadius: '10px',
                                marginTop: '40px'
                            }}
                        >
                            <option disabled selected>Select the Bank</option>
                            <option value="Bank 1">Bank 1</option>
                            <option value="Bank 2">Bank 2</option>
                            <option value="Bank 3">Bank 3</option>
                            <option value="Bank 4">Bank 4</option>
                        </select>
                </>
              ) : null
          }
          <TextField sx={{ mt: 4 }} value="3" type="text" label="Maximum Case Request Quota" fullWidth variant="outlined" />
          <TextField sx={{ mt: 4 }} type="text" label="Email Address" fullWidth variant="outlined" />
          <TextField sx={{ mt: 4 }} type="text" label="Password" fullWidth variant="outlined" />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleClose} autoFocus>
              Submit
          </Button>
        </DialogActions>
    </Dialog>

  
    <Head>
      <title>
        User Management
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
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

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Sl No.</TableCell>
                    <TableCell align="center">Email Address</TableCell>
                    <TableCell align="center">Type</TableCell>
                    <TableCell align="center">Created On</TableCell>
                    <TableCell align="center">Action</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow
                    key={1}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        1
                    </TableCell>
                    <TableCell align="center">test@gmail.com</TableCell>
                    <TableCell align="center">Finance Consultant</TableCell>
                    <TableCell align="center">02-01-2022</TableCell>
                    <TableCell align="center">
                        <Tooltip title="Delete">
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <Delete color="error" />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="View Profile">
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <RemoveRedEyeIcon />
                            </IconButton>
                        </Tooltip>
                    </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        
      </Container>
    </Box>
  </>

  );
};

usermanagement.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default usermanagement;
