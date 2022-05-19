import React from 'react';
import { API_SERVICE } from '../../config/URI';
import {
  Box,
  Container,
  Button,
  TextField,
  Typography,
  Tooltip,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  Radio,
  FormLabel,
  FormControlLabel,
  Grid
} from '@mui/material';

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
import { styled } from '@mui/material/styles';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { async } from '@firebase/util';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

const Bank = () => {
  const [openreview, setOpenreview] = React.useState(false);
  const [approved, setApproved] = React.useState(false);
  const [rejectionReasonDialog, setRejectionReasonDialog] = React.useState(false);
  const [status, setStatus] = React.useState('');
  const [lawyer, setLawyer] = React.useState('');
  const [casedata, setcaseData] = useState({});
  const [LawyersDialog, setLawyersDialog] = React.useState(false);
  const [allCase, setallCase] = useState([]);
  const [formdata, setFormData] = useState({});
  const [content , setcontent] = useState({});

  const getAllCase = async (month) => {
    try {
      const resCase = await axios.get(`${API_SERVICE}/getcase`);
      const resFinanceConsultant = await axios.get(
        `${API_SERVICE}/getallfinanceconsutant`
      );
      const data1 = resCase.data;
      const data2 = resFinanceConsultant.data;
      const resData = data1.concat(data2);

      setallCase(resData.reverse());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllCase();
  }, []);

  const handleClickOpenreview = () => {
    setOpenreview(true);
  };

  const handleClosereview = () => {
    setOpenreview(false);
  };
  const handleSubmit = () => {
    setLawyersDialog(false);
    setOpenreview(false);
    setStatus('');
  };
  const handleCancel = () => {
    setLawyersDialog(false);
    setOpenreview(false);
    setStatus('');
  };

  const handleRejection = async (id, userType) => {
    if (userType == 'Finance Consultant') {
      console.log('Finance Consultant');
      console.log(userType);
      var newdata = {
        modified: true
      };

      const newresponse = await axios.put(
        `${API_SERVICE}/putonefinanceconsutant/${id}`,
        newdata
      );
      getAllCase();
    } else {
      console.log('handlemodified');
      console.log(userType);
      var newdata = {
        modified: true
      };

      const newresponse = await axios.put(
        `${API_SERVICE}/updateone/${id}`,
        newdata
      );
      getAllCase();
    }
  };

  const submitRejection = async (caseId) => {
    try {
      const data = {
        caseId,
        content
      };

      const res = await axios.post(`${API_SERVICE}/rejectionContent`, data);

      setRejectionReasonDialog(false);
    } catch (err) {}
  };

  const handleAccept = async (id, userType) => {
    if (userType == 'Finance Consultant') {
      console.log('Finance Consultant');
      var newdata = {
        action: true
      };

      const newresponse = await axios.put(
        `${API_SERVICE}/putonefinanceconsutant/${id}`,
        newdata
      );
      getAllCase();
    } else {
      console.log('Not Finance Consultant');
      var newdata = {
        action: true
      };

      const newresponse = await axios.put(
        `${API_SERVICE}/updateone/${id}`,
        newdata
      );
      getAllCase();
    }
  };
  return (
    <>
      <Dialog
        open={openreview}
        onClose={handleCancel}
        aria-labelledby="alert-dialog-title"
        fullWidth
        maxWidth="md"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Submitted Case</DialogTitle>
        <DialogContent>
          <Typography sx={{ mt: 2 }} variant="h6">
            Type:{formdata?.type}
          </Typography>
          <Typography sx={{ mt: 2 }} variant="h6">
            Category: {formdata?.subcategory}
          </Typography>
          <Typography sx={{ mt: 2 }} variant="h6">
            Employement Year: {formdata?.employementyear}
          </Typography>
          <Typography sx={{ mt: 2 }} variant="h6">
            Name: {formdata?.name}
          </Typography>
          <Typography sx={{ mt: 2 }} variant="h6">
            Contact Number:{formdata?.contact}
          </Typography>
          <Typography sx={{ mt: 2 }} variant="h6">
            Email Address: {formdata?.email}
          </Typography>
          <Typography sx={{ mt: 2 }} variant="h6">
            DSR: 20%
          </Typography>

          <TableContainer sx={{ mt: 2, mb: 3 }} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell align="center">Download</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {formdata.urls?.map((file, _) => {
                  if (typeof file === 'object') {
                    return (
                      <TableRow key={1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                          {file.name}
                        </TableCell>
                        <TableCell align="center">
                          <a href={file.url}>
                            <Button color="primary" size="small">
                              Download
                            </Button>
                          </a>
                        </TableCell>
                      </TableRow>
                    );
                  }
                })}

                {/* <TableRow key={1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    IC Front & Back
                  </TableCell>
                  <TableCell align="center">
                    <Button color="primary" size="small">
                      Download
                    </Button>
                  </TableCell>
                </TableRow>



                <TableRow key={1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    IC Front & Back
                  </TableCell>
                  <TableCell align="center">
                    <Button color="primary" size="small">
                      Download
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow key={1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    3 months bank statement
                  </TableCell>
                  <TableCell align="center">
                    <Button color="primary" size="small">
                      Download
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow key={1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    3 months payslip
                  </TableCell>
                  <TableCell align="center">
                    <Button color="primary" size="small">
                      Download
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow key={1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    Latest EPF details statement 2020 & 2019
                  </TableCell>
                  <TableCell align="center">
                    <Button color="primary" size="small">
                      Download
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow key={1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    Latest 2 years Borang BE Full set
                  </TableCell>
                  <TableCell align="center">
                    <Button color="primary" size="small">
                      Download
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow key={1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    Bonus/savings/fixed deposit/Unit Trust/Shares/Gold/ASB/Tabung Haji
                  </TableCell>
                  <TableCell align="center">
                    <Button color="primary" size="small">
                      Download
                    </Button>
                  </TableCell>
                </TableRow> */}
              </TableBody>
            </Table>
          </TableContainer>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              label="Select Status"
              onChange={(e) => setStatus(e.target.value)}
            >
              <MenuItem value={''}>Select Status</MenuItem>
              <MenuItem value={'Missing document'}>Missing document</MenuItem>
              <MenuItem value={'KIV'}>KIV</MenuItem>
              <MenuItem value={'Approved'}>Approved </MenuItem>
              <MenuItem value={'Reject'}>Reject </MenuItem>
              <MenuItem value={'Submitted'}>Submitted </MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={handleCancel}>
            Close
          </Button>

          <Button
            color="success"
            onClick={() => {
              if (status === 'Approved') {
                setOpenreview(false);
                setLawyersDialog(true);
              } else {
                handleSubmit();
              }
            }}
            autoFocus
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={rejectionReasonDialog}
        onClose={() => setRejectionReasonDialog(false)}
        aria-labelledby="alert-dialog-title"
        fullWidth
        maxWidth="md"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Reject</DialogTitle>
        <DialogContent>
          <Typography sx={{ mt: 2, mb: 2 }} variant="h6">
            Rejection Reason
          </Typography>
          <TextField color="secondary" focused fullWidth multiline rows="4" 
          onChange={(e) => setcontent(e.target.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button color="inherit" onClick={() => setRejectionReasonDialog(false)}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              submitRejection(casedata._id);
            }}
            autoFocus
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={LawyersDialog}
        onClose={handleCancel}
        aria-labelledby="alert-dialog-title"
        fullWidth
        maxWidth="md"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Lawyer</DialogTitle>
        <DialogContent>
          <FormControl component="fieldset">
            <FormLabel component="legend">Select Lawyer</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="controlled-radio-buttons-group"
              value={lawyer}
              onChange={(e) => setLawyer(e.target.value)}
            >
              <FormControlLabel
                value={`Low wong & Zahrita`}
                control={<Radio />}
                label={`Low wong & Zahrita`}
              />
              <FormControlLabel value={'Others'} control={<Radio />} label="Others" />
            </RadioGroup>
          </FormControl>
          {lawyer === 'Others' ? (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Item>
                  <TextField fullWidth label="Full Name" type="text" />
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <TextField fullWidth label="Email" type="email" />
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <TextField fullWidth label="Phone Number" type="text" />
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <TextField
                    fullWidth
                    color="primary"
                    label="Reason"
                    fullWidth
                    multiline
                    rows="4"
                  />
                </Item>
              </Grid>
            </Grid>
          ) : null}
        </DialogContent>

        <DialogActions>
          <Button
            onClick={() => {
              if (status === 'Approved') {
                setLawyersDialog(false);
              } else {
                handleSubmit();
              }
            }}
            autoFocus
          >
            Submit
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
        <Container maxWidth="lg">
          <Typography sx={{ mb: 3 }} variant="h4">
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
                  <TableCell align="center">User Type</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allCase.map((entry, _) => {
                  if (entry.modified == false) {
                    return (
                      <TableRow
                        key={entry.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {_ + 1}
                        </TableCell>
                        <TableCell align="center">{entry.name}</TableCell>
                        <TableCell align="center">{entry.createdAt}</TableCell>
                        <TableCell align="center">{entry.type}</TableCell>
                        <TableCell align="center">{entry.usertype}</TableCell>
                        {entry.action ? (
                          <TableCell align="center">
                            <Tooltip title="Review Case">
                              <IconButton
                                onClick={() => {
                                  setFormData(entry);

                                  handleClickOpenreview();
                                }}
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <RemoveRedEyeIcon />
                              </IconButton>
                            </Tooltip>{' '}
                          </TableCell>
                        ) : (
                          <TableCell align="center">
                            <Tooltip title="Accept">
                              <IconButton
                                onClick={() => {
                                  handleAccept(entry._id, entry.usertype);
                                }}
                                color="secondary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <DoneIcon />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Reject">
                              <IconButton
                                // onClick={() => setRejectionReasonDialog(true)}

                                onClick={() => {
                                  setcaseData(entry);
                                  setRejectionReasonDialog(true);
                                  handleRejection(entry._id, entry.usertype);
                                }}
                                sx={{ color: 'red' }}
                                aria-label="upload picture"
                                component="span"
                              >
                                <CloseIcon />
                              </IconButton>
                            </Tooltip>
                          </TableCell>
                        )}
                      </TableRow>
                    );
                  }
                })}
                {/* {allCase.map((entry, _) => (
                  <TableRow
                    key={entry.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {_ + 1}
                    </TableCell>
                    <TableCell align="center">{entry.name}</TableCell>
                    <TableCell align="center">{entry.createdAt}</TableCell>
                    <TableCell align="center">{entry.type}</TableCell>
                    <TableCell align="center">{entry.usertype}</TableCell>
                    {entry.action ? (
                      <TableCell align="center">
                        <Tooltip title="Review Case">
                          <IconButton
                            onClick={() => {
                              setFormData(entry);

                              handleClickOpenreview();
                            }}
                            color="primary"
                            aria-label="upload picture"
                            component="span"
                          >
                            <RemoveRedEyeIcon />
                          </IconButton>
                        </Tooltip>{' '}
                      </TableCell>
                    ) : (
                      <TableCell align="center">
                        <Tooltip title="Accept">
                          <IconButton
                            onClick={() => {
                              handleAccept(entry._id,entry.usertype);
                            }}
                            color="secondary"
                            aria-label="upload picture"
                            component="span"
                          >
                            <DoneIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Reject">
                          <IconButton
                            // onClick={() => setRejectionReasonDialog(true)}
                            onClick={()=>{
                              handleRejection(entry._id,entry.usertype)
                            }}
                            sx={{ color: 'red' }}
                            aria-label="upload picture"
                            component="span"
                          >
                            <CloseIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    )}
                  </TableRow>
                ))} */}
                {/* {loading === true ? <TableRow><TableCell>Loading...</TableCell></TableRow> : <ShowServicesList getAllCase={getAllCase} allCase={allCase} openreview={openreview} />} */}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </>
  );
};

export default Bank;
