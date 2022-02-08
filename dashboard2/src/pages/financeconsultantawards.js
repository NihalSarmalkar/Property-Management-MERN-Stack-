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
import LinkIcon from "@mui/icons-material/Link";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import { useDropzone } from "react-dropzone";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ChatIcon from "@mui/icons-material/Chat";
import FeedIcon from "@mui/icons-material/Feed";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { Send } from "@mui/icons-material";

const FinanceConsultantAwards = () => {
  const [open, setOpen] = React.useState(false);
  const [awards, setAwards] = React.useState(0);
  const [awardsClaimed, setAwardsClaimed] = React.useState(0);
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
        <DialogContent>
          <img
            src="https://previews.123rf.com/images/alhovik/alhovik1708/alhovik170800009/84049519-weekend-sale-banner-this-weekend-special-offer-banner-template.jpg"
            width={"100%"}
            alt=""
          />
          <Typography
            sx={{
              float: "left",
            }}
            align="center"
            variant="h5"
          >
            Are you sure you want to claim <span>{awards}</span> awards?
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button color="error" onClick={handleClose} autoFocus>
            Cancel
          </Button>
          <Button color="primary" onClick={handleClaim} autoFocus>
            Claim
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
          <Typography
            variant="h5"
            sx={{
              mb: 2,
            }}
          >
            Total Award Points Collected: <span>{awardsClaimed}</span>
          </Typography>
          <Typography
            sx={{
              mb: 3,
            }}
            variant="h5"
          >
            Total Award Points Spent: <span>{awardsClaimed}</span>
          </Typography>
          {/* <Button
            sx={{
              float: "right",
              mb: 5,
            }}
            variant="contained"
            color="primary"
            onClick={handleClickOpen}
          >
            Claim Now
          </Button> */}

          <TableContainer component={Paper}>
            <Table sx={{ Width: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Sl No.</TableCell>
                  <TableCell align="center">Reward Title</TableCell>
                  <TableCell align="center">Awards Points</TableCell>
                  <TableCell align="center">Claim Awards Points</TableCell>
                  {/* <TableCell align="center">Expiry Status</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {awardsList.map((e) => (
                  <TableRow
                    key={e.awardPoints}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {e.sl}
                    </TableCell>
                    <TableCell align="center">Task Completion Rewards</TableCell>
                    <TableCell align="center">{e.awardPoints}</TableCell>
                    {/* <TableCell align="center">{e.status}</TableCell> */}
                    <TableCell align="center">
                      <Button
                        sx={{
                          // float: "right",
                          mb: 5,
                        }}
                        variant="contained"
                        color="primary"
                        onClick={handleClickOpen}
                      >
                        Claim Now
                      </Button>
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

FinanceConsultantAwards.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default FinanceConsultantAwards;
