import React from 'react';

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
  Autocomplete
} from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import { useDropzone } from 'react-dropzone';
import { API_SERVICE } from '../../config/URI';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import moment from 'moment';
import ChatIcon from '@mui/icons-material/Chat';
import FeedIcon from '@mui/icons-material/Feed';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { ContentCutOutlined, Send } from '@mui/icons-material';
import axios from "axios"
import PreviewIcon from '@mui/icons-material/Preview';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from "react";
import { useStorage } from '../../hooks/useStorage';



const TableViewPage = ({ counter, caseall, rerender }) => {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  


  var date = caseall.createdAt;
  date = new Date(date).toString();

  const [formData, setFormData] = React.useState({});

  const setFormProp = function (e) {
    const oldFormData = formData;
    oldFormData[e.target.name] = e.target.value;

    setFormData(oldFormData);
  }

  
  
  

  const handleDeleteFile = async (file,id)=>{
   
    const res =await axios.get("http://localhost:8080/api/v1/main/getonefinanceconsutant/"+ id);
   
    res.data.urls.splice(file,1)
  
   
    const newresponse = await axios.put(`http://localhost:8080/api/v1/main/putonefinanceconsutant/${id}`,res.data);
    if (await newresponse) {
      rerender();
      setEdit(false);
      setOpen(false);
    }

  }

  const updateCase = async function () {
    const res =await axios.get("http://localhost:8080/api/v1/main/getallfinanceconsutant");
    const request = await fetch(`${API_SERVICE}/updatefinanceconsutant`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        case: caseall,
        updateable: formData
      })
    });

    if (await request.json()) {
      rerender();
      setEdit(false);
      setOpen(false);
    }
  }

  return (
    <>
      <TableRow key={caseall._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell component="th" scope="row">
          {counter}
        </TableCell>
        <TableCell align="center">{caseall.name}</TableCell>
        <TableCell align="center">
          <p>{date.replace(/(.*:\d+).*/g, '$1')}</p>
        </TableCell>
        <TableCell align="center">{caseall.type}</TableCell>
        <TableCell align="center">
          {/* <IconButton color="primary"> */}
          <Dialog
            open={open}
            onClose={() => { }}
            aria-labelledby="alert-dialog-title"
            fullWidth
            maxWidth="md"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{edit ? "Edit" : "View"} Case</DialogTitle>
            {
              !edit ?
              <DialogContent>

                <Card sx={{ maxWidth: '100%' }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {caseall.name.split('')[0]}
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        {/* <MoreVertIcon /> */}
                      </IconButton>
                    }
                    title={caseall.name}
                    subheader={moment(caseall.createdAt).format("MMMM DD, YYYY")}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.primary">
                      <div>
                        Type: {caseall.type},<br></br>
                        SubType: {caseall.subcategory}
                      </div>
                      <div>
                        ProjectType: {caseall.type}
                      </div>
                      <div>
                        EmployementYear: {caseall.employementyear}
                      </div>
                      <div>
                        Contact: {caseall.contact} <br></br> Email: {caseall.email}
                      </div>
                      
                    </Typography>
                  </CardContent>
                </Card>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">ID</TableCell>
                      <TableCell align="left">Filename</TableCell>
                      <TableCell align="left">For Case</TableCell>
                      <TableCell align="left">For Email</TableCell>
                      <TableCell align="right">View</TableCell>
                      <TableCell align="right">Delete</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[...caseall.urls].map((file, _) => {
                      if (typeof file === "object") {
                        return <TableRow key={"table_" + _}>
                          <TableCell>{_ + 1}</TableCell>
                          <TableCell align='left'>{caseall.name}</TableCell>
                          <TableCell align='left'>{caseall.name}</TableCell>
                          <TableCell align='left'>{caseall.email}</TableCell>
                          <TableCell align='right'>
                            <Button variant="outlined">
                              <PreviewIcon onClick={() => {
                                var a = document.createElement("a");
                                a.href = file.url;
                                a.download = file.name;
                                a.target = "_blank";
                                a.click();
                              }} />
                              
                            </Button>
                           
                            
                          </TableCell>
                          <TableCell align='right'>
                            
                            <Button variant="outlined" color='error'>
                              <DeleteIcon color='error' onClick={() => {
                                handleDeleteFile(_,caseall._id)
                                
                              }} />
                              
                            </Button>
                            
                          </TableCell>
                        </TableRow>
                      } else {
                        return <TableRow key={"table_" + _}>
                          <TableCell>{_ + 1}</TableCell>
                          <TableCell align='left'>File</TableCell>
                          <TableCell align='right'>
                            <Button>
                              <PreviewIcon onClick={() => {
                                var a = document.createElement("a");
                                a.href = file;
                                a.download = "File";
                                a.target = "_blank";
                                a.click();
                              }} />
                            </Button>
                          </TableCell>
                        </TableRow>
                      }
                    })}
                    {[...caseall.urls].length < 1 ?
                      <TableRow>
                        <TableCell>No Files Found!</TableCell>
                      </TableRow> :
                      null
                    }
                  </TableBody>
                </Table>
              </DialogContent>
              : <DialogContent>
                  <TextField id="outlined-basic" onChange={setFormProp} defaultValue={caseall.name} style={{minWidth: '100%', marginBottom: '20px'}} name="name" label="Casename" variant="outlined" />
                  {/* <TextField id="outlined-basic" onChange={setFormProp} defaultValue={caseall.type} style={{minWidth: '100%', marginBottom: '20px'}} name="type" label="Type" variant="outlined" /> */}
                  <select
                    id="outlined-basic"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #000000',
                      borderRadius: '10px'
                    }}
                    // defaultValue={caseall.type}
                    defaultValue={formData.type}
                    name="type"
                    onChange={setFormProp}
                  >
                    <option >
                      Select the Type
                    </option>
                    <option value="Employee">Employee</option>
                    <option value="Self-Employed">Self-Employed</option>
                  </select>


                  <select
                  style={{
                    width: '100%',
                    padding: '12px',
                    marginTop: '20px',
                    marginBottom: '20px',
                    border: '1px solid #000000',
                    borderRadius: '10px'
                  }}
                  onChange={setFormProp}
                  >
                <option>
                  Select the Sub Category
                </option>
                <option value="Sdn Bhd">Sdn Bhd</option>
                <option value="Sole proprietorship">Sole proprietorship</option>
                <option value="Basic salary">Basic salary</option>
                <option value="Basic + Commission / Allowance">
                  Basic + Commission / Allowance
                </option>
                <option value="Full commission earner">Full commission earner</option>
                </select>
                  <TextField id="outlined-basic" onChange={setFormProp} defaultValue={caseall.contact} style={{minWidth: '100%', marginBottom: '20px'}} name="contact" label="Contact" variant="outlined" />
                  <TextField id="outlined-basic" onChange={setFormProp} defaultValue={caseall.email} style={{minWidth: '100%', marginBottom: '20px'}} name="email" label="Email" variant="outlined" />
                  
              </DialogContent>
            }

            <DialogActions>
              <Button onClick={() => {setEdit(false); setOpen(false);}} autoFocus>Close</Button>
              {!edit ? (
                <Button onClick={() => setEdit(true)}>Edit</Button>
              ): (
                <Button onClick={updateCase} >Update</Button>
              ) 
              }
            </DialogActions>
          </Dialog>
          <Button><PreviewIcon onClick={() => setOpen(true)} /></Button>
          {/* </IconButton> */}
        </TableCell>
      </TableRow>
    </>
  );
};
const ShowServicesList = ({ allCase, getAllCase }) => {
  var counter = 0;
  return (
    <>
      {allCase.map((caseall) => {
        counter = counter + 1;
        return <TableViewPage caseall={caseall} rerender={getAllCase} counter={counter} key={caseall._id} />;
      })}
    </>
  );
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};


const names = ['Bank 1', 'Bank 2', 'Bank 3', 'Bank 4', 'Bank 5', 'Bank 6', 'Bank 7', 'Bank 8'];
const BankersArray = ['Banker1', 'Banker2', 'Banker3', 'Banker4'];
const Financeconsultant = () => {
  const [open, setOpen] = React.useState(false);
  const [LawyersDialog, setLawyersDialog] = React.useState(false);
  const [openreview, setOpenreview] = React.useState(false);
  const [openlogs, setOpenlogs] = React.useState(false);
  const [openchats, setOpenchats] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [status, setStatus] = React.useState('Select Status');
  const [allCase, setallCase] = useState([]);
  const handleClickOpenreview = () => {
    setOpenreview(true);
  };
  const handleCloseNext = () => {
    setOpen2(false);

    if (currentFile === null) submitCase();
    else alert('Please wait the file is being uploaded');
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
  const [edit, setEdit] = React.useState(false);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [type, settype] = React.useState('Refinance');

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

  const [name, setname] = React.useState('');
  const [contact, setcontact] = React.useState('');
  const [email, setemail] = React.useState('');
  const [bankers1, setBankers1] = React.useState('');
  const [bankers2, setBankers2] = React.useState('');
  const [PAC, setPAC] = React.useState('Not See');
  const [showSelect, setShowSelect] = React.useState(false);
  const [dsr, setdsr] = React.useState(0);
  const [insuranceType, setInsuranceType] = React.useState('');
  const [currentFile, setCurrentFile] = React.useState(null);
  const [urls, setUrls] = React.useState([]);
  const [loading, setloading] = React.useState(true);

  const [personName, setPersonName] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
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
    window.location = '/newcasefinanceconsultant.html';
  };

  const getDate = (time) => {
    var d = new Date(time);
    var formattedDate = '';
    formattedDate += d.getDate() + '-' + d.getMonth() + 1 + '-' + d.getFullYear();
    return formattedDate;
  };

  const handleDeleteFile = async (file,id)=>{
   
    const res =await axios.get("http://localhost:8080/api/v1/main/getone/"+ id);
   
    res.data.urls.splice(file,1)
  
   
    const newresponse = await axios.put(`http://localhost:8080/api/v1/main/updateone/${id}`,res.data);
    if (await newresponse) {
    
      setEdit(false);
      setOpen(false);
    }

  }
  const getAllCase = async () => {
    try {
      const res =await axios.get("http://localhost:8080/api/v1/main/getallfinanceconsutant");
      console.log("getAllCase")
      console.log(res.data)
      setallCase(res.data.reverse())

      
      setloading(false);
    } catch (err) {
      // console.log(err);
    }
  };

  useEffect(() => {
    getAllCase();
  },[]);

  
  const uploadFile = function (e) {
    if (currentFile !== null) {
      alert('Please wait until the file is being uploaded!');
      e.target.value = null;
      return;
    }

    const file = e.target.files[0] ?? null;
    console.log(file)

    if (file) {
      
      setCurrentFile({
        name: e.target.parentElement.querySelector('p').innerText.replace('Please Upload', ""),
        file: file,
      });
    }
  };
  const UploadFile = ({ file, setFile, setURL, urls }) => {
    const { progress, url } = useStorage(file.file, 'files');
  
    console.log(progress);
  
    React.useEffect(() => {
      if (url != null) {
        const nurls = urls;
        nurls.push({
          name: file.name,
          url: url
        });
        console.log(urls)
        console.log("urls")
        console.log(nurls)
  
        setFile(null);
        
        setURL(nurls);
      }
    }, [url]);
  
    return <span></span>;
  };
  const submitCase = async () => {
    // console.log(API_SERVICE);

    try {
      const data = {
        usertype: 'Finance Consultant',
        type:'Refinance',
        name,
        contact,
        email,
        urls
        
      };
      console.log("After ---")
      console.log(urls)
      const res =await axios.post("http://localhost:8080/api/v1/main/addfinanceconsutant",data);
      console.log(res)
      allCase.push(res)
      console.log(allCase)

      if (res) setallCase(allCase.reverse());
      // if (response === 'Added') {
      //   alert('Case successfully added');
      // }
      setloading(true);
      getAllCase();
      setEdit(false);
      setOpen(false);
      
    } catch (err) {
      // console.log(err);
    }
  };
  console.log("data")
  console.log(allCase)


  return (
    <>
    {currentFile && (
        <UploadFile file={currentFile} urls={urls} setURL={setUrls} setFile={setCurrentFile} />
      )}
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
          <div style={{ border: '1px solid #000', padding: '10px' }}>
            <Button onClick={handleClickconfirmation} sx={{ float: 'right' }}>
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

          <FormControl sx={{ mt: 4, width: '100%' }}>
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

          <center>
            <Button sx={{ mt: 4 }}>Download IC Front & Back</Button>
          </center>
          <section style={{ marginTop: '10px' }} className="dropzone" {...getRootProps()}>
            <div>
              <input {...getInputProps()} />
              <p>Re-Upload IC Front & Back</p>
            </div>
            <aside style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h4>Files</h4>
              <img
                style={{ marginTop: '10px', marginBottom: '10px' }}
                alt="Upload"
                src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"
              />
              <ul>{files}</ul>
            </aside>
          </section>

          <center>
            <Button sx={{ mt: 4 }}>Download 3 months bank statement</Button>
          </center>
          <section style={{ marginTop: '10px' }} className="dropzone" {...getRootProps()}>
            <div>
              <input {...getInputProps()} />
              <p>Re-Upload 3 months bank statement</p>
            </div>
            <aside style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h4>Files</h4>
              <img
                style={{ marginTop: '10px', marginBottom: '10px' }}
                alt="Upload"
                src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"
              />
              <ul>{files}</ul>
            </aside>
          </section>

          <center>
            <Button sx={{ mt: 4 }}>Download 3 months payslip</Button>
          </center>
          <section style={{ marginTop: '10px' }} className="dropzone" {...getRootProps()}>
            <div>
              <input {...getInputProps()} />
              <p>Re-Upload 3 months payslip</p>
            </div>
            <aside style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h4>Files</h4>
              <img
                style={{ marginTop: '10px', marginBottom: '10px' }}
                alt="Upload"
                src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"
              />
              <ul>{files}</ul>
            </aside>
          </section>

          <center>
            <Button sx={{ mt: 4 }}>Download Latest EPF details statement 2020 & 2019</Button>
          </center>
          <section style={{ marginTop: '40px' }} className="dropzone" {...getRootProps()}>
            <div>
              <input {...getInputProps()} />
              <p>Re-Upload Latest EPF details statement 2020 & 2019</p>
            </div>
            <aside style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h4>Files</h4>
              <img
                style={{ marginTop: '10px', marginBottom: '10px' }}
                alt="Upload"
                src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"
              />
              <ul>{files}</ul>
            </aside>
          </section>

          <center>
            <Button sx={{ mt: 4 }}>Download latest 2 years Borang BE Full set</Button>
          </center>
          <section style={{ marginTop: '10px' }} className="dropzone" {...getRootProps()}>
            <div>
              <input {...getInputProps()} />
              <p>Re-Upload latest 2 years Borang BE Full set</p>
            </div>
            <aside style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h4>Files</h4>
              <img
                style={{ marginTop: '10px', marginBottom: '10px' }}
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
          <section style={{ marginTop: '10px' }} className="dropzone" {...getRootProps()}>
            <div>
              <input {...getInputProps()} />
              <p>Re-Upload Bonus/savings/fixed deposit/Unit Trust/Shares/Gold/ASB/Tabung Haji</p>
            </div>
            <aside style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h4>Files</h4>
              <img
                style={{ marginTop: '10px', marginBottom: '10px' }}
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
              <MenuItem value={'Select Status'}>Select Status</MenuItem>
              <MenuItem value={'Submit'}>Submit</MenuItem>
              <MenuItem value={'Reject'}>Reject</MenuItem>
              <MenuItem value={'DSR Burst'}>DSR Burst</MenuItem>
              <MenuItem value={'Stuck'}>Stuck</MenuItem>
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
              if (status !== 'Submit') {
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
          <DialogTitle id="alert-dialog-title" sx={{ float: 'left' }}>
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
            <Table sx={{ Width: '100%' }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Sl No.</TableCell>
                  <TableCell align="left">Action</TableCell>
                  <TableCell align="left">Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key={1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    1
                  </TableCell>
                  <TableCell align="left">Created Logs Dialog</TableCell>
                  <TableCell align="left">{getDate(Date.now())}</TableCell>
                </TableRow>
                <TableRow key={1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    2
                  </TableCell>
                  <TableCell align="left">Added multiple table rows</TableCell>
                  <TableCell align="left">{getDate(Date.now())}</TableCell>
                </TableRow>
                <TableRow key={1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
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
          <div style={{ border: '1px solid #E0E0E0', padding: '5px', marginTop: '20px' }}>
            <Typography
              sx={{
                backgroundColor: '#E0E0E0',
                border: '1px solid #B0B0B0',
                borderRadius: 1,
                p: 1,
                mb: 2
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
            {bankers1 !== '' ? (
              <Button sx={{ m: 2 }} variant="outlined">
                <Radio checked />
                {bankers1}
              </Button>
            ) : (
              <Box sx={{ mb: 11.5 }}></Box>
            )}
          </div>
          <div style={{ border: '1px solid #E0E0E0', padding: '5px', marginTop: '20px' }}>
            <Typography
              sx={{
                backgroundColor: '#E0E0E0',
                border: '1px solid #B0B0B0',
                borderRadius: 1,
                p: 1,
                mb: 2
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
            {bankers2 !== '' ? (
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
              width: '100%',
              padding: '12px',
              border: '1px solid #000000',
              borderRadius: '10px'
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
            onChange={(e) => setname(e.target.value)}
            fullWidth
            variant="outlined"
            value={name}
          />
          <TextField
            sx={{ mt: 4 }}
            type="text"
            label="Contact Number"
            onChange={(e) => setcontact(e.target.value)}
            fullWidth
            variant="outlined"
            value={contact}
          />
          <TextField
            sx={{ mt: 4 }}
            type="email"
            label="Email Address"
            onChange={(e) => setemail(e.target.value)}
            fullWidth
            variant="outlined"
            value={email}
          />

          <section style={{ marginTop: '40px' }} className="dropzone" {...getRootProps()}>
            <div>
              <input onChange={uploadFile} type="file" />
              <p>Please Upload 3 months bank statement</p>
            </div>
            <aside style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h4>Files</h4>
              <img
                style={{ marginTop: '10px', marginBottom: '10px' }}
                alt="Upload"
                src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"
              />
              <ul>{files}</ul>
            </aside>
          </section>

          <section style={{ marginTop: '40px' }} className="dropzone" {...getRootProps()}>
            <div>
              <input onChange={uploadFile} type="file" />
              <p>Please Upload 3 months payslip</p>
            </div>
            <aside style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h4>Files</h4>
              <img
                style={{ marginTop: '10px', marginBottom: '10px' }}
                alt="Upload"
                src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"
              />
              <ul>{files}</ul>
            </aside>
          </section>

          <section style={{ marginTop: '40px' }} className="dropzone" {...getRootProps()}>
            <div>
            <input onChange={uploadFile} type="file" />
              <p>Please Upload Latest EPF details statement 2020 & 2019</p>
            </div>
            <aside style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h4>Files</h4>
              <img
                style={{ marginTop: '10px', marginBottom: '10px' }}
                alt="Upload"
                src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"
              />
              <ul>{files}</ul>
            </aside>
          </section>

          <section style={{ marginTop: '40px' }} className="dropzone" {...getRootProps()}>
            <div>
            <input onChange={uploadFile} type="file" />
              <p>Please Upload latest 2 years Borang BE Full set</p>
            </div>
            <aside style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h4>Files</h4>
              <img
                style={{ marginTop: '10px', marginBottom: '10px' }}
                alt="Upload"
                src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"
              />
              <ul>{files}</ul>
            </aside>
          </section>

          <section style={{ marginTop: '40px' }} className="dropzone" {...getRootProps()}>
            <div>
            <input onChange={uploadFile} type="file" />
              <p>Upload Bonus/savings/fixed deposit/Unit Trust/Shares/Gold/ASB/Tabung Haji</p>
            </div>
            <aside style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h4>Files</h4>
              <img
                style={{ marginTop: '10px', marginBottom: '10px' }}
                alt="Upload"
                src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"
              />
              <ul>{files}</ul>
            </aside>
          </section>

          <section style={{ marginTop: '40px' }} className="dropzone" {...getRootProps()}>
            <div>
            <input onChange={uploadFile} type="file" />
              <p>Please Upload IC Front & Back</p>
            </div>
            <aside style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h4>Files</h4>
              <img
                style={{ marginTop: '10px', marginBottom: '10px' }}
                alt="Upload"
                src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"
              />
              <ul>{files}</ul>
            </aside>
          </section>

          <section style={{ marginTop: '40px' }} className="dropzone" {...getRootProps()}>
            <div>
            <input onChange={uploadFile} type="file" />
              <p>Please Upload latest 2 years Borang BE Full set</p>
            </div>
            <aside style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h4>Files</h4>
              <img
                style={{ marginTop: '10px', marginBottom: '10px' }}
                alt="Upload"
                src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"
              />
              <ul>{files}</ul>
            </aside>
          </section>

          <section style={{ marginTop: '40px' }} className="dropzone" {...getRootProps()}>
            <div>
            <input onChange={uploadFile} type="file" />
              <p>Annual report (3 years)</p>
            </div>
            <aside style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h4>Files</h4>
              <img
                style={{ marginTop: '10px', marginBottom: '10px' }}
                alt="Upload"
                src="https://img.icons8.com/external-kmg-design-flat-kmg-design/28/000000/external-upload-user-interface-kmg-design-flat-kmg-design.png"
              />
              <ul>{files}</ul>
            </aside>
          </section>

          <section style={{ marginTop: '40px' }} className="dropzone" {...getRootProps()}>
            <div>
            <input onChange={uploadFile} type="file" />
              <p>Bank offer letter / latest loan statement</p>
            </div>
            <aside style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h4>Files</h4>
              <img
                style={{ marginTop: '10px', marginBottom: '10px' }}
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
          <Button onClick={handleCloseNext} autoFocus>
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
              sx={{ textAlign: 'left' }}
              onChange={(e) => {
                setPAC(e.target.value);
              }}
            >
              <MenuItem value={'See'}>See</MenuItem>
              <MenuItem value={'Not See'}>Not See</MenuItem>
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
              <MenuItem value={''}>Select Insurance Type</MenuItem>
              <MenuItem value={'Insurance Type 1'}>Insurance Type 1</MenuItem>
              <MenuItem value={'Insurance Type 2'}>Insurance Type 2</MenuItem>
              <MenuItem value={'Insurance Type 3'}>Insurance Type 3</MenuItem>
              <MenuItem value={'Insurance Type 4'}>Insurance Type 4</MenuItem>
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
          {/* </DialogContent> */}
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={() => setShowSelect(false)}>
            Save
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
                {loading === true ? <TableRow><TableCell>Loading...</TableCell></TableRow> : <ShowServicesList getAllCase={getAllCase} allCase={allCase} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </>
  );
};

export default Financeconsultant;
