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

const names = ["Bank 1", "Bank 2", "Bank 3", "Bank 4", "Bank 5", "Bank 6", "Bank 7", "Bank 8"];
const BankersArray = ["Banker1", "Banker2", "Banker3", "Banker4"];
const Financeconsultant = () => {
  const [open, setOpen] = React.useState(false);
  const [LawyersDialog, setLawyersDialog] = React.useState(false);
  const [openreview, setOpenreview] = React.useState(false);
  const [openlogs, setOpenlogs] = React.useState(false);
  const [openchats, setOpenchats] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [status, setStatus] = React.useState("Select Status");

  const handleClickOpenreview = () => {
    setOpenreview(true);
  };

  const handleClosereview = () => {
    setOpenreview(false);
  };

  const handleClickOpenlogs = () => {
    setOpenlogs(true);
  };
  const handleCloselogs = () => {
    setOpenlogs(false);
  };

  const handleCloseOpen2 = () => {
    setOpen2(false);
  };

  const handleClickOpenchats = () => {
    setOpenchats(true);
  };

  const handleClosechats = () => {
    setOpenchats(false);
  };

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
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

  const [name, setname] = React.useState("Test Name");
  const [contact, setcontact] = React.useState("46256273990");
  const [email, setemail] = React.useState("test@gmail.com");
  const [bankers1, setBankers1] = React.useState("Banker1");
  const [bankers2, setBankers2] = React.useState("Banker1");
  const [PAC, setPAC] = React.useState("Not See");
  const [showSelect, setShowSelect] = React.useState(false);
  const [dsr, setdsr] = React.useState(0);
  const [insuranceType, setInsuranceType] = React.useState("");

  const [personName, setPersonName] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
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
  };

  const continueEditing = () => {
    window.location = "/newcasefinanceconsultant.html";
  };

  const getDate = (time) => {
    var d = new Date(time);
    var formattedDate = "";
    formattedDate += d.getDate() + "-" + d.getMonth() + 1 + "-" + d.getFullYear();
    return formattedDate;
  };

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
        <DialogTitle id="alert-dialog-title">Confirm</DialogTitle>

        <DialogContent>
          <h4>
            Editing this will effect the change in the data below, if you wish to continue please
            download the data backup first then try editing this.
          </h4>
        </DialogContent>

        <DialogActions>
          <Button color="error" onClick={handleClosereconfirmation} autoFocus>
            Cancel
          </Button>
          <Button color="inherit" onClick={downloadbackup} autoFocus>
            Download Data Backup
          </Button>
          {downloadBackup ? (
            <Button onClick={continueEditing} autoFocus>
              Continue Editing
            </Button>
          ) : null}
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
        <DialogTitle id="alert-dialog-title">Submitted Case</DialogTitle>
        <DialogContent>
          <div style={{ border: "1px solid #000", padding: "10px" }}>
            <Button onClick={handleClickconfirmation} sx={{ float: "right" }}>
              Edit This
            </Button>
            <Typography variant="h6">Type: Employee</Typography>
            <Typography sx={{ mt: 2 }} variant="h6">
              Category: Basic Salary
            </Typography>
            <Typography sx={{ mt: 2 }} variant="h6">
              Employement Year: 1 Year
            </Typography>
          </div>

          <TextField
            onChange={(e) => setname(e.target.value)}
            sx={{ mt: 4 }}
            value={name}
            type="text"
            label="Name"
            fullWidth
            variant="outlined"
          />
          <TextField
            onChange={(e) => setcontact(e.target.value)}
            sx={{ mt: 4 }}
            value={contact}
            type="text"
            label="Contact Number"
            fullWidth
            variant="outlined"
          />
          <TextField
            onChange={(e) => setemail(e.target.value)}
            sx={{ mt: 4 }}
            value={email}
            type="email"
            label="Email Address"
            fullWidth
            variant="outlined"
          />

          <TextField
            sx={{ mt: 4 }}
            onChange={(e) => setdsr(e.target.value)}
            type="text"
            value={dsr}
            label="DSR %"
            fullWidth
            variant="outlined"
          />

          <FormControl sx={{ mt: 4, width: "100%" }}>
            <InputLabel id="demo-multiple-checkbox-label">Select the Bank</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
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

          <center>
            <Button sx={{ mt: 4 }}>Download IC Front & Back</Button>
          </center>
          <section style={{ marginTop: "10px" }} className="dropzone" {...getRootProps()}>
            <div>
              <input {...getInputProps()} />
              <p>Re-Upload IC Front & Back</p>
            </div>
            <aside>
              <h4>Files</h4>
              <img
                style={{ marginTop: "10px", marginBottom: "10px" }}
                alt="Upload"
                src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"
              />
              <ul>{files}</ul>
            </aside>
          </section>

          <center>
            <Button sx={{ mt: 4 }}>Download 3 months bank statement</Button>
          </center>
          <section style={{ marginTop: "10px" }} className="dropzone" {...getRootProps()}>
            <div>
              <input {...getInputProps()} />
              <p>Re-Upload 3 months bank statement</p>
            </div>
            <aside>
              <h4>Files</h4>
              <img
                style={{ marginTop: "10px", marginBottom: "10px" }}
                alt="Upload"
                src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"
              />
              <ul>{files}</ul>
            </aside>
          </section>

          <center>
            <Button sx={{ mt: 4 }}>Download 3 months payslip</Button>
          </center>
          <section style={{ marginTop: "10px" }} className="dropzone" {...getRootProps()}>
            <div>
              <input {...getInputProps()} />
              <p>Re-Upload 3 months payslip</p>
            </div>
            <aside>
              <h4>Files</h4>
              <img
                style={{ marginTop: "10px", marginBottom: "10px" }}
                alt="Upload"
                src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"
              />
              <ul>{files}</ul>
            </aside>
          </section>

          <center>
            <Button sx={{ mt: 4 }}>Download Latest EPF details statement 2020 & 2019</Button>
          </center>
          <section style={{ marginTop: "40px" }} className="dropzone" {...getRootProps()}>
            <div>
              <input {...getInputProps()} />
              <p>Re-Upload Latest EPF details statement 2020 & 2019</p>
            </div>
            <aside>
              <h4>Files</h4>
              <img
                style={{ marginTop: "10px", marginBottom: "10px" }}
                alt="Upload"
                src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"
              />
              <ul>{files}</ul>
            </aside>
          </section>

          <center>
            <Button sx={{ mt: 4 }}>Download latest 2 years Borang BE Full set</Button>
          </center>
          <section style={{ marginTop: "10px" }} className="dropzone" {...getRootProps()}>
            <div>
              <input {...getInputProps()} />
              <p>Re-Upload latest 2 years Borang BE Full set</p>
            </div>
            <aside>
              <h4>Files</h4>
              <img
                style={{ marginTop: "10px", marginBottom: "10px" }}
                alt="Upload"
                src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"
              />
              <ul>{files}</ul>
            </aside>
          </section>

          <center>
            <Button sx={{ mt: 4 }}>
              Download Bonus/savings/fixed deposit/Unit Trust/Shares/Gold/ASB/Tabung Haji
            </Button>
          </center>
          <section style={{ marginTop: "10px" }} className="dropzone" {...getRootProps()}>
            <div>
              <input {...getInputProps()} />
              <p>Re-Upload Bonus/savings/fixed deposit/Unit Trust/Shares/Gold/ASB/Tabung Haji</p>
            </div>
            <aside>
              <h4>Files</h4>
              <img
                style={{ marginTop: "10px", marginBottom: "10px" }}
                alt="Upload"
                src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"
              />
              <ul>{files}</ul>
            </aside>
          </section>

          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Select Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <MenuItem value={"Select Status"}>Select Status</MenuItem>
              <MenuItem value={"Submit"}>Submit</MenuItem>
              <MenuItem value={"Reject"}>Reject</MenuItem>
              <MenuItem value={"DSR Burst"}>DSR Burst</MenuItem>
              <MenuItem value={"Stuck"}>Stuck</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={handleClosereview}>
            Close
          </Button>
          <Button
            onClick={() => {
              handleClosereview();
              if (status !== "Submit") {
                setOpen2(true);
              }
            }}
            autoFocus
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openlogs}
        onClose={handleCloselogs}
        aria-labelledby="alert-dialog-title"
        fullWidth
        maxWidth="md"
        aria-describedby="alert-dialog-description"
      >
        <div className="container">
          <DialogTitle id="alert-dialog-title" sx={{ float: "left" }}>
            Logs
          </DialogTitle>
          <DialogActions>
            <Button color="inherit" onClick={setOpenchats}>
              <ChatIcon />
            </Button>
          </DialogActions>
        </div>

        <DialogContent>
          <TableContainer component={Paper}>
            <Table sx={{ Width: "100%" }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Sl No.</TableCell>
                  <TableCell align="left">Action</TableCell>
                  <TableCell align="left">Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key={1} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    1
                  </TableCell>
                  <TableCell align="left">Created Logs Dialog</TableCell>
                  <TableCell align="left">{getDate(Date.now())}</TableCell>
                </TableRow>
                <TableRow key={1} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    2
                  </TableCell>
                  <TableCell align="left">Added multiple table rows</TableCell>
                  <TableCell align="left">{getDate(Date.now())}</TableCell>
                </TableRow>
                <TableRow key={1} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    3
                  </TableCell>
                  <TableCell align="left">Created chat dialog</TableCell>
                  <TableCell align="left">{getDate(Date.now())}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={handleCloselogs}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openchats}
        onClose={handleClosechats}
        aria-labelledby="alert-dialog-title"
        fullWidth
        maxWidth="sm"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <TextField fullWidth multiline rows={8} />
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={handleClosechats}>
            <Send />
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open2}
        onClose={handleCloseOpen2}
        aria-labelledby="alert-dialog-title"
        fullWidth
        maxWidth="md"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"></DialogTitle>
        <DialogContent>
          <div style={{ border: "1px solid #E0E0E0", padding: "5px", marginTop: "20px" }}>
            <Typography
              sx={{
                backgroundColor: "#E0E0E0",
                border: "1px solid #B0B0B0",
                borderRadius: 1,
                p: 1,
                mb: 2,
              }}
              textAlign="center"
              variant="h5"
            >
              Bank 1
            </Typography>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={BankersArray}
              renderInput={(params) => {
                setBankers1(params.inputProps.value);
                return <TextField {...params} label="Bankers" />;
              }}
            />
            {bankers1 !== "" ? (
              <Button sx={{ m: 2 }} variant="outlined">
                <Radio checked />
                {bankers1}
              </Button>
            ) : (
              <Box sx={{ mb: 11.5 }}></Box>
            )}
          </div>
          <div style={{ border: "1px solid #E0E0E0", padding: "5px", marginTop: "20px" }}>
            <Typography
              sx={{
                backgroundColor: "#E0E0E0",
                border: "1px solid #B0B0B0",
                borderRadius: 1,
                p: 1,
                mb: 2,
              }}
              textAlign="center"
              variant="h5"
            >
              Bank 2
            </Typography>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={BankersArray}
              renderInput={(params) => {
                setBankers2(params.inputProps.value);
                return <TextField {...params} label="Bankers" />;
              }}
            />
            {bankers2 !== "" ? (
              <Button sx={{ m: 2 }} variant="outlined">
                <Radio checked />
                {bankers2}
              </Button>
            ) : (
              <Box sx={{ mb: 11.5 }}></Box>
            )}
          </div>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={handleCloseOpen2}>
            Close
          </Button>
          <Button onClick={handleCloseOpen2} autoFocus>
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
        <DialogTitle id="alert-dialog-title">Create Case</DialogTitle>
        <DialogContent>
          <select
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #000000",
              borderRadius: "10px",
            }}
            onChange={(e) => settype(e.target.value)}
          >
            <option value="Refinance" selected>
              Refinance
            </option>
          </select>

          <TextField
            sx={{ mt: 4 }}
            type="text"
            label="Name"
            fullWidth
            variant="outlined"
            value=""
          />
          <TextField
            sx={{ mt: 4 }}
            type="text"
            label="Contact Number"
            fullWidth
            variant="outlined"
            value=""
          />
          <TextField
            sx={{ mt: 4 }}
            type="email"
            label="Email Address"
            fullWidth
            variant="outlined"
            value=""
          />

          <section style={{ marginTop: "40px" }} className="dropzone" {...getRootProps()}>
            <div>
              <input {...getInputProps()} />
              <p>Please Upload 3 months bank statement</p>
            </div>
            <aside>
              <h4>Files</h4>
              <img
                style={{ marginTop: "10px", marginBottom: "10px" }}
                alt="Upload"
                src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"
              />
              <ul>{files}</ul>
            </aside>
          </section>

          <section style={{ marginTop: "40px" }} className="dropzone" {...getRootProps()}>
            <div>
              <input {...getInputProps()} />
              <p>Please Upload 3 months payslip</p>
            </div>
            <aside>
              <h4>Files</h4>
              <img
                style={{ marginTop: "10px", marginBottom: "10px" }}
                alt="Upload"
                src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"
              />
              <ul>{files}</ul>
            </aside>
          </section>

          <section style={{ marginTop: "40px" }} className="dropzone" {...getRootProps()}>
            <div>
              <input {...getInputProps()} />
              <p>Please Upload Latest EPF details statement 2020 & 2019</p>
            </div>
            <aside>
              <h4>Files</h4>
              <img
                style={{ marginTop: "10px", marginBottom: "10px" }}
                alt="Upload"
                src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"
              />
              <ul>{files}</ul>
            </aside>
          </section>

          <section style={{ marginTop: "40px" }} className="dropzone" {...getRootProps()}>
            <div>
              <input {...getInputProps()} />
              <p>Please Upload latest 2 years Borang BE Full set</p>
            </div>
            <aside>
              <h4>Files</h4>
              <img
                style={{ marginTop: "10px", marginBottom: "10px" }}
                alt="Upload"
                src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"
              />
              <ul>{files}</ul>
            </aside>
          </section>

          <section style={{ marginTop: "40px" }} className="dropzone" {...getRootProps()}>
            <div>
              <input {...getInputProps()} />
              <p>Upload Bonus/savings/fixed deposit/Unit Trust/Shares/Gold/ASB/Tabung Haji</p>
            </div>
            <aside>
              <h4>Files</h4>
              <img
                style={{ marginTop: "10px", marginBottom: "10px" }}
                alt="Upload"
                src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"
              />
              <ul>{files}</ul>
            </aside>
          </section>

          <section style={{ marginTop: "40px" }} className="dropzone" {...getRootProps()}>
            <div>
              <input {...getInputProps()} />
              <p>Please Upload IC Front & Back</p>
            </div>
            <aside>
              <h4>Files</h4>
              <img
                style={{ marginTop: "10px", marginBottom: "10px" }}
                alt="Upload"
                src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"
              />
              <ul>{files}</ul>
            </aside>
          </section>

          <section style={{ marginTop: "40px" }} className="dropzone" {...getRootProps()}>
            <div>
              <input {...getInputProps()} />
              <p>Please Upload latest 2 years Borang BE Full set</p>
            </div>
            <aside>
              <h4>Files</h4>
              <img
                style={{ marginTop: "10px", marginBottom: "10px" }}
                alt="Upload"
                src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"
              />
              <ul>{files}</ul>
            </aside>
          </section>

          <section style={{ marginTop: "40px" }} className="dropzone" {...getRootProps()}>
            <div>
              <input {...getInputProps()} />
              <p>Annual report (3 years)</p>
            </div>
            <aside>
              <h4>Files</h4>
              <img
                style={{ marginTop: "10px", marginBottom: "10px" }}
                alt="Upload"
                src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"
              />
              <ul>{files}</ul>
            </aside>
          </section>

          <section style={{ marginTop: "40px" }} className="dropzone" {...getRootProps()}>
            <div>
              <input {...getInputProps()} />
              <p>Bank offer letter / latest loan statement</p>
            </div>
            <aside>
              <h4>Files</h4>
              <img
                style={{ marginTop: "10px", marginBottom: "10px" }}
                alt="Upload"
                src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"
              />
              <ul>{files}</ul>
            </aside>
          </section>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleClose} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={showSelect}
        onClose={() => setShowSelect(false)}
        aria-labelledby="alert-dialog-title"
        fullWidth
        maxWidth="md"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"></DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <Typography sx={{ mb: 2 }}>Property Agent can</Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={PAC}
              sx={{ textAlign: "left" }}
              onChange={(e) => {
                setPAC(e.target.value);
              }}
            >
              <MenuItem value={"See"}>See</MenuItem>
              <MenuItem value={"Not See"}>Not See</MenuItem>
            </Select>
          </FormControl>
          <TextField
            sx={{ mt: 4, mb: 5 }}
            type="text"
            label="Insurance Amount"
            fullWidth
            variant="outlined"
            value=""
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Insurance Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={insuranceType}
              label="Select Status"
              onChange={(e) => setInsuranceType(e.target.value)}
            >
              <MenuItem value={""}>Select Insurance Type</MenuItem>
              <MenuItem value={"Insurance Type 1"}>Insurance Type 1</MenuItem>
              <MenuItem value={"Insurance Type 2"}>Insurance Type 2</MenuItem>
              <MenuItem value={"Insurance Type 3"}>Insurance Type 3</MenuItem>
              <MenuItem value={"Insurance Type 4"}>Insurance Type 4</MenuItem>
            </Select>
          </FormControl>

          {/*  */}
          {/* <DialogContent> */}
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
          <Typography sx={{ mt: 2 }} variant="h6">
            Status: KIV
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
                <TableRow key={1} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    IC Front & Back
                  </TableCell>
                  <TableCell align="center">
                    <Button color="primary" size="small">
                      Download
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow key={1} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    3 months bank statement
                  </TableCell>
                  <TableCell align="center">
                    <Button color="primary" size="small">
                      Download
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow key={1} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    3 months payslip
                  </TableCell>
                  <TableCell align="center">
                    <Button color="primary" size="small">
                      Download
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow key={1} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    Latest EPF details statement 2020 & 2019
                  </TableCell>
                  <TableCell align="center">
                    <Button color="primary" size="small">
                      Download
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow key={1} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    Latest 2 years Borang BE Full set
                  </TableCell>
                  <TableCell align="center">
                    <Button color="primary" size="small">
                      Download
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow key={1} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
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
              <MenuItem value={""}>Select Status</MenuItem>
              <MenuItem value={"Missing document"}>Missing document</MenuItem>
              <MenuItem value={"KIV"}>KIV</MenuItem>
              <MenuItem value={"Approved"}>Approved </MenuItem>
              <MenuItem value={"Reject"}>Reject </MenuItem>
              <MenuItem value={"Submitted"}>Submitted </MenuItem>
            </Select>
          </FormControl>
          {/* </DialogContent> */}
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={() => setShowSelect(false)}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <Head>
        <title>Finance Consultant</title>
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
              mb: 2,
            }}
            variant="contained"
            color="primary"
            onClick={handleClickOpen}
          >
            Submit new case
          </Button>

          <TableContainer component={Paper}>
            <Table sx={{ Width: 650 }} aria-label="simple table">
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
                <TableRow key={1} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    1
                  </TableCell>
                  <TableCell align="center">Test Case</TableCell>
                  <TableCell align="center">22-12-2021</TableCell>
                  <TableCell align="center">Self Employed</TableCell>
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
                    </Tooltip>
                    {/* <Tooltip title="Property Agent can">
                      <IconButton
                        onClick={() => setShowSelect(!showSelect)}
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        <LinkIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="View Logs">
                      <IconButton
                        onClick={handleClickOpenlogs}
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        <FeedIcon />
                      </IconButton>
                    </Tooltip> */}
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

Financeconsultant.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Financeconsultant;
