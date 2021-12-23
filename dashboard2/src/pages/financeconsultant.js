import React from 'react';
import Head from 'next/head';
import { Box, Container, Button, Dialog, IconButton, Tooltip } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';



import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import {useDropzone} from "react-dropzone";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const Financeconsultant = () => {
    const [open, setOpen] = React.useState(false);
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
    const [type, settype] = React.useState("Refinance");

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const files = acceptedFiles.map((file) => (
        <li key={file.path}>
        {file.path} - {file.size} bytes
        </li>
    ));

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
                    Create Case
                </DialogTitle>
                <DialogContent>
                    <select
                        style={{
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #000000',
                            borderRadius: '10px'
                        }}
                        onChange={(e) => settype(e.target.value)}
                    >
                        <option value="Refinance" selected>Refinance</option>
                    </select>

                    <TextField sx={{ mt: 4 }} type="text" label="Name" fullWidth variant="outlined" value="" />
                    <TextField sx={{ mt: 4 }} type="text" label="Contact Number" fullWidth variant="outlined" value="" />
                    <TextField sx={{ mt: 4 }} type="email" label="Email Address" fullWidth variant="outlined" value="" />
                    <TextField sx={{ mt: 4 }} type="text" label="Title" fullWidth variant="outlined" value="" />

                    <section style={{ marginTop: '40px' }} className="dropzone" {...getRootProps()}>
                        <div >
                            <input {...getInputProps()} />
                            <p>Please Upload 3 months bank statement</p>
                        </div>
                        <aside>
                            <h4>Files</h4>
                            <img style={{ marginTop: '10px', marginBottom: '10px' }} alt="Upload" src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"/>
                            <ul>{files}</ul>
                        </aside>
                    </section>

                    <section style={{ marginTop: '40px' }} className="dropzone" {...getRootProps()}>
                        <div >
                            <input {...getInputProps()} />
                            <p>Please Upload 3 months payslip</p>
                        </div>
                        <aside>
                            <h4>Files</h4>
                            <img style={{ marginTop: '10px', marginBottom: '10px' }} alt="Upload" src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"/>
                            <ul>{files}</ul>
                        </aside>
                    </section>

                    <section style={{ marginTop: '40px' }} className="dropzone" {...getRootProps()}>
                        <div >
                            <input {...getInputProps()} />
                            <p>Please Upload Latest EPF details statement 2020 & 2019</p>
                        </div>
                        <aside>
                            <h4>Files</h4>
                            <img style={{ marginTop: '10px', marginBottom: '10px' }} alt="Upload" src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"/>
                            <ul>{files}</ul>
                        </aside>
                    </section>

                    <section style={{ marginTop: '40px' }} className="dropzone" {...getRootProps()}>
                        <div >
                            <input {...getInputProps()} />
                            <p>Please Upload latest 2 years Borang BE Full set</p>
                        </div>
                        <aside>
                            <h4>Files</h4>
                            <img style={{ marginTop: '10px', marginBottom: '10px' }} alt="Upload" src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"/>
                            <ul>{files}</ul>
                        </aside>
                    </section>

                    <section style={{ marginTop: '40px' }} className="dropzone" {...getRootProps()}>
                        <div >
                            <input {...getInputProps()} />
                            <p>Upload Bonus/savings/fixed deposit/Unit Trust/Shares/Gold/ASB/Tabung Haji</p>
                        </div>
                        <aside>
                            <h4>Files</h4>
                            <img style={{ marginTop: '10px', marginBottom: '10px' }} alt="Upload" src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"/>
                            <ul>{files}</ul>
                        </aside>
                    </section>

                    <section style={{ marginTop: '40px' }} className="dropzone" {...getRootProps()}>
                        <div >
                            <input {...getInputProps()} />
                            <p>Please Upload IC Front & Back</p>
                        </div>
                        <aside>
                            <h4>Files</h4>
                            <img style={{ marginTop: '10px', marginBottom: '10px' }} alt="Upload" src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"/>
                            <ul>{files}</ul>
                        </aside>
                    </section>

                    <section style={{ marginTop: '40px' }} className="dropzone" {...getRootProps()}>
                        <div >
                            <input {...getInputProps()} />
                            <p>Please Upload latest 2 years Borang BE Full set</p>
                        </div>
                        <aside>
                            <h4>Files</h4>
                            <img style={{ marginTop: '10px', marginBottom: '10px' }} alt="Upload" src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"/>
                            <ul>{files}</ul>
                        </aside>
                    </section>


                    <section style={{ marginTop: '40px' }} className="dropzone" {...getRootProps()}>
                        <div >
                            <input {...getInputProps()} />
                            <p>Annual report (3 years)</p>
                        </div>
                        <aside>
                            <h4>Files</h4>
                            <img style={{ marginTop: '10px', marginBottom: '10px' }} alt="Upload" src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"/>
                            <ul>{files}</ul>
                        </aside>
                    </section>

                    <section style={{ marginTop: '40px' }} className="dropzone" {...getRootProps()}>
                        <div >
                            <input {...getInputProps()} />
                            <p>Bank offer letter / latest loan statement</p>
                        </div>
                        <aside>
                            <h4>Files</h4>
                            <img style={{ marginTop: '10px', marginBottom: '10px' }} alt="Upload" src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"/>
                            <ul>{files}</ul>
                        </aside>
                    </section>
                    
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
            Finance Consultant
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
            <Button
                sx={{
                    float: 'right',
                    mb: 2
                }}
                variant="contained"
                color="primary"
                onClick={handleClickOpen}
            >
                Submit new case
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
}

Financeconsultant.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Financeconsultant;
