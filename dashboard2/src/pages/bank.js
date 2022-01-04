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
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


const Bank = () => {
    const [openreview, setOpenreview] = React.useState(false);
    const handleClickOpenreview = () => {
        setOpenreview(true);
    };
    const handleClosereview = () => {
        setOpenreview(false);
    };
    return (
        <>

            <Dialog
                open={openreview}
                onClose={handleClosereview}
                aria-labelledby="alert-dialog-title"
                fullWidth
                maxWidth="md"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Submitted Case
                </DialogTitle>
                <DialogContent>
                    <Typography sx={{ mt: 2 }} variant='h6' >Type: Employee</Typography>
                    <Typography sx={{ mt: 2 }} variant='h6' >Category: Basic Salary</Typography>
                    <Typography sx={{ mt: 2 }} variant='h6' >Employement Year: 1 Year</Typography>
                    <Typography sx={{ mt: 2 }} variant='h6' >Name: Test Name</Typography>
                    <Typography sx={{ mt: 2 }} variant='h6' >Contact Number: +1 42009382438</Typography>
                    <Typography sx={{ mt: 2 }} variant='h6' >Email Address: test@gmail.com</Typography>
                    <Typography sx={{ mt: 2 }} variant='h6' >DSR: 20%</Typography>

                    <TableContainer sx={{ mt: 2 }} component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell align="center">
                                    Download
                                </TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow
                                key={1}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        IC Front & Back
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button color='primary' size='small'>Download</Button>
                                    </TableCell>
                                </TableRow>

                                <TableRow
                                key={1}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        3 months bank statement
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button color='primary' size='small'>Download</Button>
                                    </TableCell>
                                </TableRow>

                                <TableRow
                                key={1}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        3 months payslip
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button color='primary' size='small'>Download</Button>
                                    </TableCell>
                                </TableRow>

                                <TableRow
                                key={1}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        Latest EPF details statement 2020 & 2019
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button color='primary' size='small'>Download</Button>
                                    </TableCell>
                                </TableRow>

                                <TableRow
                                key={1}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        Latest 2 years Borang BE Full set
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button color='primary' size='small'>Download</Button>
                                    </TableCell>
                                </TableRow>

                                <TableRow
                                key={1}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        Bonus/savings/fixed deposit/Unit Trust/Shares/Gold/ASB/Tabung Haji
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button color='primary' size='small'>Download</Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    
                </DialogContent>
                <DialogActions>
                <Button color="inherit" onClick={handleClosereview}>Close</Button>
                <Button color="error" onClick={handleClosereview} autoFocus>
                    Not Approve
                </Button>
                <Button onClick={handleClosereview} autoFocus>
                    Approve
                </Button>
                </DialogActions>
            </Dialog>

            <Head>
            <title>
                Bank
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
                Bank
                </Typography>
{/* 
                <Button
                    sx={{
                        float: 'right',
                        mb: 2
                    }}
                    variant="contained"
                    color="primary"
                    onClick={handleClickOpenreview}
                >
                    Add Banker
                </Button> */}

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
                            <TableRow
                            key={1}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                1
                            </TableCell>
                            <TableCell align="center">Test Case</TableCell>
                            <TableCell align="center">22-12-2021</TableCell>
                            <TableCell align="center">Self Employed</TableCell>
                            <TableCell align="center">
                                <Tooltip title="Review Case">
                                    <IconButton onClick={handleClickOpenreview} color="primary" aria-label="upload picture" component="span">
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

Bank.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Bank;
