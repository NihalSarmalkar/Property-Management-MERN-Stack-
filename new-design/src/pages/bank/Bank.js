import React from 'react';

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
  const [LawyersDialog, setLawyersDialog] = React.useState(false);

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
            Type: Employee
          </Typography>
          <Typography sx={{ mt: 2 }} variant="h6">
            Category: Basic Salary
          </Typography>
          <Typography sx={{ mt: 2 }} variant="h6">
            Employement Year: 1 Year
          </Typography>
          <Typography sx={{ mt: 2 }} variant="h6">
            Name: Test Name
          </Typography>
          <Typography sx={{ mt: 2 }} variant="h6">
            Contact Number: +1 42009382438
          </Typography>
          <Typography sx={{ mt: 2 }} variant="h6">
            Email Address: test@gmail.com
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
                </TableRow>
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
          <TextField color="secondary" focused fullWidth multiline rows="4" />
        </DialogContent>

        <DialogActions>
          <Button color="inherit" onClick={() => setRejectionReasonDialog(false)}>
            Cancel
          </Button>
          <Button onClick={() => setRejectionReasonDialog(false)} autoFocus>
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
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key={1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    1
                  </TableCell>
                  <TableCell align="center">Test Case</TableCell>
                  <TableCell align="center">22-12-2021</TableCell>
                  <TableCell align="center">Self Employed</TableCell>
                  {approved ? (
                    <TableCell align="center">
                      <Tooltip title="Review Case">
                        <IconButton
                          onClick={handleClickOpenreview}
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
                          onClick={() => setApproved(true)}
                          color="secondary"
                          aria-label="upload picture"
                          component="span"
                        >
                          <DoneIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Reject">
                        <IconButton
                          onClick={() => setRejectionReasonDialog(true)}
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
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </>
  );
};

export default Bank;
