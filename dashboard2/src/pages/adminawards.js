import React from "react";
import Head from "next/head";
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
  Radio,
  Grid,
} from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";

import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import { TrafficByDevice } from "src/components/dashboard/traffic-by-device";
import { Sales } from "src/components/dashboard/sales";
import VisibilityIcon from "@mui/icons-material/Visibility";

const statusArray = [
  {
    value: "Enable the award",
  },
  {
    value: "Expire the award",
  },
];

const typesArray = [
  {
    value: "Finance Consultant",
  },
  {
    value: "Property Agent",
  },
  {
    value: "All",
  },
];

const demoTransaction = [
  { id: 1, name: "Finance Consultant", date: "27-10-22", type: "Expired", transactionAmt: 1200 },
  { id: 2, name: "Finance Consultant", date: "27-10-22", type: "Expired", transactionAmt: 1200 },
  { id: 3, name: "Finance Consultant", date: "27-10-22", type: "Expired", transactionAmt: 1200 },
  { id: 4, name: "Bank Consultant", date: "27-10-22", type: "Expired", transactionAmt: 1200 },
  { id: 5, name: "Admin", date: "27-10-22", type: "Expired", transactionAmt: 1200 },
];

const AdminAwards = () => {
  const [open, setOpen] = React.useState(false);
  const [awards, setAwards] = React.useState(0);
  const [awardsClaimed, setAwardsClaimed] = React.useState(0);

  const [status, setstatus] = React.useState("Enable the award");
  const [type, settype] = React.useState("Finance Consultant");

  const handleChange = (event) => {
    setstatus(event.target.value);
  };
  const handleTypeChange = (event) => {
    settype(event.target.value);
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
    { sl: 1, awardPoints: 2500, status: "Not Expired" },
    { sl: 2, awardPoints: 500, status: "Not Expired" },
    { sl: 3, awardPoints: 850, status: "Not Expired" },
  ];

  React.useEffect(() => {
    let total = 0;
    awardsList.map((e) => {
      total += e.awardPoints;
    });
    setAwards(total);
  }, []);
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
            label="Reward title"
            variant="outlined"
            fullWidth
            sx={{ marginTop: "1rem" }}
          />
          <TextField
            id="Reward-point-basic"
            label="Reward point"
            variant="outlined"
            fullWidth
            type={"number"}
            sx={{ marginTop: "1rem" }}
          />
          <TextField
            id="outlined-select-status"
            select
            label="Type"
            value={type}
            onChange={handleTypeChange}
            SelectProps={{
              native: true,
            }}
            fullWidth
            sx={{ marginTop: "1rem" }}
          >
            {typesArray.map((option) => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </TextField>
          <TextField
            id="outlined-select-status"
            select
            label="Status"
            value={status}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
            fullWidth
            sx={{ marginTop: "1rem" }}
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
            sx={{ marginTop: "1rem" }}
          />
          <Button
            color="primary"
            variant="contained"
            autoFocus
            sx={{ marginX: "auto", marginY: "10px" }}
          >
            Upload Image
          </Button>
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

      <Head>
        <title>Finance Consultant Awards</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Button
            sx={{
              float: "right",
              mb: 5,
            }}
            variant="contained"
            color="primary"
            onClick={handleClickOpen}
          >
            Post Awards Offer
          </Button>
          <Grid container spacing={3}>
            <Grid item sm={6}>
              <Sales />
            </Grid>
            <Grid item sm={6}>
              <TrafficByDevice sx={{ height: "100%" }} />
            </Grid>
          </Grid>
          {/* <TrafficByDevice /> */}

          <TableContainer component={Paper} sx={{ marginY: "50px" }}>
            <Table sx={{ Width: "100%" }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Sl No.</TableCell>
                  <TableCell align="left">Award Type</TableCell>
                  <TableCell align="left">Full Name</TableCell>
                  <TableCell align="left">Awards Points</TableCell>
                  <TableCell align="left">Status</TableCell>
                  <TableCell align="left">Award Claimed</TableCell>
                  <TableCell align="left">Date</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell>1</TableCell>
                  <TableCell align="left">Finance Consultant</TableCell>
                  <TableCell align="left">Prathmesh Sebastian</TableCell>
                  <TableCell align="left">150</TableCell>
                  <TableCell align="left">
                    <TextField
                      id="outlined-select-status"
                      select
                      value={status}
                      onChange={handleChange}
                      SelectProps={{
                        native: true,
                      }}
                      fullWidth
                    >
                      {statusArray.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.value}
                        </option>
                      ))}
                    </TextField>
                  </TableCell>
                  <TableCell align="left">1500</TableCell>
                  <TableCell align="left">Jan 20 2022</TableCell>
                </TableRow>
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
                {demoTransaction.map((entry) => (
                  <TableRow key={1} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {entry.id}
                    </TableCell>
                    <TableCell align="center">{entry.name}</TableCell>
                    <TableCell align="center">{entry.date}</TableCell>
                    <TableCell align="center">{entry.transactionAmt}</TableCell>
                    <TableCell align="center">{entry.id}</TableCell>
                    <TableCell align="center">
                      <IconButton color="primary">
                        <VisibilityIcon />
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

AdminAwards.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default AdminAwards;
