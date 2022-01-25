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
  Autocomplete,
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

const statusArray = [
  {
    value: "Enable the award",
  },
  {
    value: "Expire the award",
  },
];

const AdminAwards = () => {
  const [open, setOpen] = React.useState(false);
  const [awards, setAwards] = React.useState(0);
  const [awardsClaimed, setAwardsClaimed] = React.useState(0);

  const [status, setstatus] = React.useState("Enable the award");

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
            type={"number"}
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

          <TableContainer component={Paper}>
            <Table sx={{ Width: "100%" }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Sl No.</TableCell>
                  <TableCell align="left">Email Address</TableCell>
                  <TableCell align="left">Awards Points</TableCell>
                  <TableCell align="left">Status</TableCell>
                  <TableCell align="left">Award Claimed</TableCell>
                  <TableCell align="left">Date</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell>1</TableCell>
                  <TableCell align="left">johndoe@gmail.com</TableCell>
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
        </Container>
      </Box>
    </>
  );
};

AdminAwards.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default AdminAwards;
