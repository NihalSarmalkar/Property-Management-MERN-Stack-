import React from 'react';
import Head from 'next/head';
import { Box, Container, Button, Dialog, IconButton, Tooltip, Typography } from '@mui/material';
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



import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
    'Bank 1',
    'Bank 2',
    'Bank 3',
    'Bank 4',
    'Bank 5',
    'Bank 6',
    'Bank 7',
    'Bank 8',
];

const Financeconsultant = () => {
    const [open, setOpen] = React.useState(false);

    const [openreview, setOpenreview] = React.useState(false);

    const handleClickOpenreview = () => {
        setOpenreview(true);
    };
    
    const handleClosereview = () => {
        setOpenreview(false);
    };

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

    const [name, setname] = React.useState("Test Name")
    const [contact, setcontact] = React.useState("46256273990")
    const [email, setemail] = React.useState("test@gmail.com")
    const [dsr, setdsr] = React.useState(0);

    const [personName, setPersonName] = React.useState([]);
    const handleChange = (event) => {
        const {
        target: { value },
        } = event;
        setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
        );
    };

    const [confirmation, setconfirmation] = React.useState(false);
    const handleClickconfirmation = () => {
        setconfirmation(true);
    };
    const handleClosereconfirmation = () => {
        setconfirmation(false);
    };

    const [downloadBackup, setdownloadBackup] = React.useState(false);
    const downloadbackup = () => {
        setdownloadBackup(true);
    }

    const continueEditing = () => {
        window.location = "/newcasefinanceconsultant.html";
    }

    return (
    <>
            <Dialog
                open={confirmation}
                onClose={handleClosereconfirmation}
                aria-labelledby="alert-dialog-title"
                fullWidth
                maxWidth="md"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Confirm
                </DialogTitle>

                <DialogContent>
                    <h4>
                        Editing this will effect the change in the data below, if you wish to continue please download the
                        data backup first then try editing this.
                    </h4>
                </DialogContent>

                <DialogActions>
                    <Button color="error" onClick={handleClosereconfirmation} autoFocus>
                        Cancel
                    </Button>
                    <Button color='inherit' onClick={downloadbackup} autoFocus>
                        Download Data Backup
                    </Button>
                    {
                        downloadBackup ? (
                            <Button onClick={continueEditing} autoFocus>
                                Continue Editing
                            </Button>
                        ) : null
                    }
                </DialogActions>
            </Dialog>


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
                    <div style={{ border: '1px solid #000', padding: '10px' }}>
                        <Button onClick={handleClickconfirmation} sx={{ float: 'right' }}>Edit This</Button>
                        <Typography variant='h6' >Type: Employee</Typography>
                        <Typography sx={{ mt: 2 }} variant='h6' >Category: Basic Salary</Typography>
                        <Typography sx={{ mt: 2 }} variant='h6' >Employement Year: 1 Year</Typography>
                    </div>

                    


                    <TextField onChange={(e) => setname(e.target.value)} sx={{ mt: 4 }} value={name} type="text" label="Name" fullWidth variant="outlined" />
                    <TextField onChange={(e) => setcontact(e.target.value)} sx={{ mt: 4 }} value={contact} type="text" label="Contact Number" fullWidth variant="outlined" />
                    <TextField onChange={(e) => setemail(e.target.value)} sx={{ mt: 4 }} value={email} type="email" label="Email Address" fullWidth variant="outlined" />

                    <TextField sx={{ mt: 4 }} onChange={(e) => setdsr(e.target.value)} type="text" value={dsr} label="DSR %" fullWidth variant="outlined" />

                    <FormControl sx={{ mt: 4, width: "100%" }}>
                            <InputLabel id="demo-multiple-checkbox-label">Select the Bank</InputLabel>
                            <Select
                                labelId="demo-multiple-checkbox-label"
                                id="demo-multiple-checkbox"
                                multiple
                                value={personName}
                                onChange={handleChange}
                                input={<OutlinedInput label="Tag" />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                {names.map((name) => (
                                    <MenuItem key={name} value={name}>
                                    <Checkbox checked={personName.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                    </MenuItem>
                                ))}
                            </Select>
                    </FormControl>

                <TextField sx={{ mt: 4 }} type="text" label="Insurance Amount" fullWidth variant="outlined" value="" />
                <select
                    style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid #000000',
                        borderRadius: '10px',
                        marginTop: '40px'
                    }}
                    onChange={(e) => settype(e.target.value)}
                >
                    <option disabled selected>Select Insurance Type</option>
                    <option value="Insurance Type 1">Insurance Type 1</option>
                    <option value="Insurance Type 2">Insurance Type 2</option>
                    <option value="Insurance Type 3">Insurance Type 3</option>
                    <option value="Insurance Type 4">Insurance Type 4</option>
                </select>

                    <center>
                        <Button sx={{ mt: 4 }}>Download IC Front & Back</Button>
                    </center>
                    <section style={{ marginTop: '10px' }} className="dropzone" {...getRootProps()}>
                        <div >
                            <input {...getInputProps()} />
                            <p>Re-Upload IC Front & Back</p>
                        </div>
                        <aside>
                            <h4>Files</h4>
                            <img style={{ marginTop: '10px', marginBottom: '10px' }} alt="Upload" src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"/>
                            <ul>{files}</ul>
                        </aside>
                    </section>

                    <center>
                        <Button sx={{ mt: 4 }}>Download 3 months bank statement</Button>
                    </center>
                    <section style={{ marginTop: '10px' }} className="dropzone" {...getRootProps()}>
                        <div >
                            <input {...getInputProps()} />
                            <p>Re-Upload 3 months bank statement</p>
                        </div>
                        <aside>
                            <h4>Files</h4>
                            <img style={{ marginTop: '10px', marginBottom: '10px' }} alt="Upload" src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"/>
                            <ul>{files}</ul>
                        </aside>
                    </section>

                    <center>
                        <Button sx={{ mt: 4 }}>Download 3 months payslip</Button>
                    </center>
                    <section style={{ marginTop: '10px' }} className="dropzone" {...getRootProps()}>
                        <div >
                            <input {...getInputProps()} />
                            <p>Re-Upload 3 months payslip</p>
                        </div>
                        <aside>
                            <h4>Files</h4>
                            <img style={{ marginTop: '10px', marginBottom: '10px' }} alt="Upload" src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"/>
                            <ul>{files}</ul>
                        </aside>
                    </section>

                    <center>
                        <Button sx={{ mt: 4 }}>Download Latest EPF details statement 2020 & 2019</Button>
                    </center>
                    <section style={{ marginTop: '40px' }} className="dropzone" {...getRootProps()}>
                        <div >
                            <input {...getInputProps()} />
                            <p>Re-Upload Latest EPF details statement 2020 & 2019</p>
                        </div>
                        <aside>
                            <h4>Files</h4>
                            <img style={{ marginTop: '10px', marginBottom: '10px' }} alt="Upload" src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"/>
                            <ul>{files}</ul>
                        </aside>
                    </section>

                    <center>
                        <Button sx={{ mt: 4 }}>Download latest 2 years Borang BE Full set</Button>
                    </center>
                    <section style={{ marginTop: '10px' }} className="dropzone" {...getRootProps()}>
                        <div >
                            <input {...getInputProps()} />
                            <p>Re-Upload latest 2 years Borang BE Full set</p>
                        </div>
                        <aside>
                            <h4>Files</h4>
                            <img style={{ marginTop: '10px', marginBottom: '10px' }} alt="Upload" src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"/>
                            <ul>{files}</ul>
                        </aside>
                    </section>

                    <center>
                        <Button sx={{ mt: 4 }}>Download Bonus/savings/fixed deposit/Unit Trust/Shares/Gold/ASB/Tabung Haji</Button>
                    </center>
                    <section style={{ marginTop: '10px' }} className="dropzone" {...getRootProps()}>
                        <div >
                            <input {...getInputProps()} />
                            <p>Re-Upload Bonus/savings/fixed deposit/Unit Trust/Shares/Gold/ASB/Tabung Haji</p>
                        </div>
                        <aside>
                            <h4>Files</h4>
                            <img style={{ marginTop: '10px', marginBottom: '10px' }} alt="Upload" src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"/>
                            <ul>{files}</ul>
                        </aside>
                    </section>

                    <select
                        style={{
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #000000',
                            borderRadius: '10px',
                            marginTop: '40px'
                        }}
                    >
                        <option disabled selected>Select Status</option>
                        <option value="Stuck">Stuck</option>
                        <option value="DSR Burst">DSR Burst</option>
                        <option value="Reject">Reject</option>
                    </select>


                </DialogContent>
                <DialogActions>
                <Button color="inherit" onClick={handleClosereview}>Close</Button>
                <Button onClick={handleClosereview} autoFocus>
                    Submit
                </Button>
                </DialogActions>
            </Dialog>




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
                <Button color="inherit" onClick={handleClose}>Close</Button>
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
}

Financeconsultant.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Financeconsultant;
