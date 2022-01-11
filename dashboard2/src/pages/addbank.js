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

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const AddBank = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
      setOpen(true);
  };
  const handleClose = () => {
      setOpen(false);
  };

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
            Add Bank
        </DialogTitle>
        <DialogContent>
          <TextField sx={{ mt: 4 }} type="text" label="Name" fullWidth variant="outlined" />


          <TextField sx={{ mt: 4 }} type="text" label="DSR%" fullWidth variant="outlined" />
          {/* <TextField sx={{ mt: 4 }} value="3" type="text" label="Maximum Case Request Quota" fullWidth variant="outlined" /> */}

          {/* <TextField sx={{ mt: 4 }} type="text" label="Email Address" fullWidth variant="outlined" /> */}
          {/* <TextField sx={{ mt: 4 }} type="text" label="Password" fullWidth variant="outlined" /> */}

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
        Add Bank
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
          Add Bank
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
            Add Bank
        </Button>

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Sl No.</TableCell>
                    <TableCell align="center">Bank Name</TableCell>
                    <TableCell align="center">DSR %</TableCell>
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
                    <TableCell align="center">Test Bank</TableCell>
                    <TableCell align="center">48</TableCell>
                    <TableCell align="center">
                        <Tooltip title="Review Case">
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <Delete color="error" />
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

AddBank.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default AddBank;
