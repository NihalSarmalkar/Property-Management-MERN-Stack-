import React, { useEffect } from 'react';

import {
  Box,
  Container,
  FormControl,
  IconButton,
  Input,
  Tooltip,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import axios from 'axios';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import PreviewIcon from '@mui/icons-material/Preview';
import DeleteIcon from '@mui/icons-material/Delete';
import { API_SERVICE } from '../config/URI';

import { useDropzone } from 'react-dropzone';
import { useStorage } from '../hooks/useStorage';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import moment from 'moment';
import { useState } from 'react';

const TableViewPage = ({ counter, caseall, rerender, rejData }) => {
  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  var date = caseall.createdAt;
  date = new Date(date).toString();
  const [openreview, setOpenreview] = React.useState(false);
  const [openCommentBox,setOpenCommentBox] = React.useState(false);
  const [formData, setFormData] = React.useState({});
  const [rejjdata, setrejjData] = useState('');
  const [comment , setComment] = useState('');
  const [content , setContent] = useState('');
  const [commentBoxData , setCommentBoxData] = useState({});
  const [starValue , setstarValue] = useState();

  const setFormProp = function (e) {
    const oldFormData = formData;
    oldFormData[e.target.name] = e.target.value;

    setFormData(oldFormData);
  };
  const handleClickOpenreview = () => {
    setOpenreview(true);
  };

  const handleClickOpenCommentBox =()=>{
    setOpenCommentBox(true);
  }

  const handleDeleteFile = async (file, id) => {
    const res = await axios.get(`${API_SERVICE}/getone/${id}`);

    res.data.urls.splice(file, 1);

    const newresponse = await axios.put(
      `${API_SERVICE}/updateone/${id}`,
      res.data
    );
    if (await newresponse) {
      rerender();
      setEdit(false);
      setOpen(false);
    }
  };

  const getcommentData = async (id)=>{
    rejData.data.map((file, _) => {
                    
      if (id === file.caseId) {
        setrejjData(file.content)

      }
    });

  }

  const submitComment = async(caseId,type,name)=>{
    console.log(caseId)
    console.log(type)
    console.log(content)
    try {
      const data = {
        caseId,
        type,
        content,
        name,
        starValue
      };

      await axios.post(`${API_SERVICE}/postComment`, data);
      handleCancelCommentBox();
      
    } catch (err) {
      console.log(err)
    }
    

  }

  const updateCase = async function () {
    const request = await fetch(`${API_SERVICE}/updatecase`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
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
  };
  const handleCancel = () => {
    setOpenreview(false);
  };

  const handleCancelCommentBox = () => {
    setOpenCommentBox(false);
  };

  

  return (
    <><Dialog
    open={openCommentBox}
    onClose={handleCancelCommentBox}
    aria-labelledby="alert-dialog-title"
    fullWidth
    maxWidth="md"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">Add Comment and rate</DialogTitle>
    <DialogContent>
      <Typography sx={{ mt: 2, mb: 2 }} variant="h6">
        Comment down below.
      </Typography>
      <TextField color="secondary" focused fullWidth multiline rows="4" 
          onChange={(e) => setContent(e.target.value)}
          />
          <TextField
                sx={{ mt: 4 }}
                type="number"
                label="Rate out of 5"
                focused
                fullWidth
                onChange={(e) => setstarValue(e.target.value)}
                variant="outlined"
                color="secondary"
                
              />
    </DialogContent>

    <DialogActions>
      <Button color="inherit" onClick={handleCancelCommentBox}>
        Cancel
      </Button>
      <Button
        onClick={() => {
          submitComment(commentBoxData._id,commentBoxData.usertype,commentBoxData.name);
        }}
        autoFocus
      >
        
        Submit
      </Button>
    </DialogActions>
  </Dialog>
      <Dialog
        open={openreview}
        onClose={handleCancel}
        aria-labelledby="alert-dialog-title"
        fullWidth
        maxWidth="md"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Rjection Comment</DialogTitle>
        <DialogContent>
          <Typography sx={{ mt: 2 }} variant="h6">
          Comment : {rejjdata}
          </Typography>
        </DialogContent>
      </Dialog>
      <TableRow key={caseall._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell component="th" scope="row">
          {counter}
        </TableCell>
        
            <TableCell align="center"><Link
              to={`/dashboard/viewcase?id=${caseall._id}&type=${caseall.usertype}&name=${caseall.name}`}
              style={{ textDecoration: "none",color:"black" }}
            >{caseall.name}
            </Link></TableCell>

        
        <TableCell align="center">
          <p>{date.replace(/(.*:\d+).*/g, '$1')}</p>
        </TableCell>
        <TableCell align="center">{caseall.type}</TableCell>

        {/* {caseall.action
        ? <TableCell align="center">Accepted</TableCell>
        : <TableCell align="center">Rejected</TableCell>
       } */}
        {(() => {
          if (caseall.action) {
            return <TableCell align="center">Accepted</TableCell>;
          } else {
            if (!caseall.modified) {
              return <TableCell align="center">Not Specified</TableCell>;
            }
            return (
              <>
              <TableCell align="center">Rejected 
                        <>
                        <Tooltip title="Review Case">
                            <IconButton
                              onClick={() => {
                                // setrejjData(file.content);
                                getcommentData(caseall._id)

                                handleClickOpenreview();
                              }}
                              color="primary"
                              aria-label="upload picture"
                              component="span"
                            >
                              <RemoveRedEyeIcon />
                            </IconButton>
                          </Tooltip>
                        </>
                        
                     </TableCell>
                
              </>
            );
          }
        })()}

        <TableCell align="center">
          {/* <IconButton color="primary"> */}
          <Dialog
            open={open}
            onClose={() => {}}
            aria-labelledby="alert-dialog-title"
            fullWidth
            maxWidth="md"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{edit ? 'Edit' : 'View'} Case</DialogTitle>
            {!edit ? (
              <DialogContent>
                <Card sx={{ maxWidth: '100%' }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {caseall.name.split('')[0]}
                      </Avatar>
                    }
                    action={<IconButton aria-label="settings">{/* <MoreVertIcon /> */}</IconButton>}
                    title={caseall.name}
                    subheader={moment(caseall.createdAt).format('MMMM DD, YYYY')}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.primary">
                      <div>
                        Type: {caseall.type},<br></br>
                        SubType: {caseall.subcategory}
                      </div>
                      <div>ProjectType: {caseall.projecttype}</div>
                      <div>EmployementYear: {caseall.employementyear}</div>
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
                      if (typeof file === 'object') {
                        return (
                          <TableRow key={'table_' + _}>
                            <TableCell>{_ + 1}</TableCell>
                            <TableCell align="left">{caseall.name}</TableCell>
                            <TableCell align="left">{caseall.name}</TableCell>
                            <TableCell align="left">{caseall.email}</TableCell>
                            <TableCell align="right">
                              <Button variant="outlined">
                                <PreviewIcon
                                  onClick={() => {
                                    var a = document.createElement('a');
                                    a.href = file.url;
                                    a.download = file.name;
                                    a.target = '_blank';
                                    a.click();
                                  }}
                                />
                              </Button>
                            </TableCell>
                            <TableCell align="right">
                              <Button variant="outlined" color="error">
                                <DeleteIcon
                                  color="error"
                                  onClick={() => {
                                    handleDeleteFile(_, caseall._id);
                                  }}
                                />
                              </Button>
                            </TableCell>
                          </TableRow>
                        );
                      } else {
                        return (
                          <TableRow key={'table_' + _}>
                            <TableCell>{_ + 1}</TableCell>
                            <TableCell align="left">File</TableCell>
                            <TableCell align="right">
                              <Button>
                                <PreviewIcon
                                  onClick={() => {
                                    var a = document.createElement('a');
                                    a.href = file;
                                    a.download = 'File';
                                    a.target = '_blank';
                                    a.click();
                                  }}
                                />
                              </Button>
                            </TableCell>
                          </TableRow>
                        );
                      }
                    })}
                    {[...caseall.urls].length < 1 ? (
                      <TableRow>
                        <TableCell>No Files Found!</TableCell>
                      </TableRow>
                    ) : null}
                  </TableBody>
                </Table>
              </DialogContent>
            ) : (
              <DialogContent>
                <TextField
                  id="outlined-basic"
                  onChange={setFormProp}
                  defaultValue={caseall.name}
                  style={{ minWidth: '100%', marginBottom: '20px' }}
                  name="name"
                  label="Casename"
                  variant="outlined"
                />
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
                  <option>Select the Type</option>
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
                  <option>Select the Sub Category</option>
                  <option value="Sdn Bhd">Sdn Bhd</option>
                  <option value="Sole proprietorship">Sole proprietorship</option>
                  <option value="Basic salary">Basic salary</option>
                  <option value="Basic + Commission / Allowance">
                    Basic + Commission / Allowance
                  </option>
                  <option value="Full commission earner">Full commission earner</option>
                </select>
                <TextField
                  id="outlined-basic"
                  onChange={setFormProp}
                  defaultValue={caseall.contact}
                  style={{ minWidth: '100%', marginBottom: '20px' }}
                  name="contact"
                  label="Contact"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  onChange={setFormProp}
                  defaultValue={caseall.email}
                  style={{ minWidth: '100%', marginBottom: '20px' }}
                  name="email"
                  label="Email"
                  variant="outlined"
                />
              </DialogContent>
            )}

            <DialogActions>
              <Button
                onClick={() => {
                  setEdit(false);
                  setOpen(false);
                }}
                autoFocus
              >
                Close
              </Button>
              {!edit ? (
                <Button onClick={() => setEdit(true)}>Edit</Button>
              ) : (
                <Button onClick={updateCase}>Update</Button>
              )}
            </DialogActions>
          </Dialog>
          <Button>
            <PreviewIcon onClick={() => setOpen(true)} />
          </Button>
          {/* </IconButton> */}
        </TableCell>
        {/* <TableCell align="center">
        <Button
           
           variant="outlined"
            color="primary"
            onClick={()=>{
              setCommentBoxData(caseall);
              handleClickOpenCommentBox();

            
            }}
            
          >
           Add Comment
          </Button>
        </TableCell> */}
      </TableRow>
    </>
  );
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
      console.log(urls);
      console.log('urls');
      console.log(nurls);

      setFile(null);

      setURL(nurls);
    }
  }, [url]);

  return <span></span>;
};

const ShowServicesList = ({ allCase, getAllCase, rejData }) => {
  var counter = 0;
  return (
    <>
      {allCase.map((caseall) => {
        counter = counter + 1;
        return (
          <TableViewPage
            caseall={caseall}
            rerender={getAllCase}
            counter={counter}
            key={caseall._id}
            rejData={rejData}
          />
        );
      })}
    </>
  );
};

const CasePage = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [open, setOpen] = React.useState(false);

  const [open2, setOpen2] = React.useState(false);

  const [type, settype] = React.useState('');
  const [projecttype, setprojecttype] = React.useState('');
  const [subcategory, setsubcategory] = React.useState('');
  const [employementyear, setemployementyear] = React.useState('');
  const [name, setname] = React.useState('');
  const [contact, setcontact] = React.useState('');
  const [email, setemail] = React.useState('');
  const [rejData, setrejData] = React.useState('');

  const [loading, setloading] = React.useState(true);
  const [allCase, setallCase] = React.useState([]);
  const [urls, setUrls] = React.useState([]);
  const [currentFile, setCurrentFile] = React.useState(null);

  const uploadFile = function (e) {
    if (currentFile !== null) {
      alert('Please wait until the file is being uploaded!');
      e.target.value = null;
      return;
    }

    const file = e.target.files[0] ?? null;
    console.log(file);

    if (file) {
      setCurrentFile({
        name: e.target.parentElement.querySelector('p').innerText.replace('Please Upload', ''),
        file: file
      });
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClose2 = () => {
    setOpen(false);
    handleClickOpenNext();
  };

  const handleClickOpenNext = () => {
    setOpen2(true);
  };

  const handleCloseNext = () => {
    setOpen2(false);

    if (currentFile === null) submitCase();
    else alert('Please wait the file is being uploaded');
  };

  const goBack = () => {
    handleCloseNext();
    handleClickOpen();
  };

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const changeEmployeeType = (type) => {
    settype(type);
    setsubcategory('');
    setemployementyear('');
  };

  const submitCase = async () => {
    // console.log(API_SERVICE);

    try {
      const data = {
        usertype: 'Property Agent',
        type,
        projecttype,
        subcategory,
        employementyear,
        name,
        contact,
        email,
        urls
      };
      console.log('After ---');
      console.log(urls);
      const res = await fetch(`${API_SERVICE}/addcasepropertyagent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const response = await res.json();
      if (response) setallCase(response);
      // if (response === 'Added') {
      //   alert('Case successfully added');
      // }
      // setloading(true);
      // getAllCase();
    } catch (err) {
      // console.log(err);
    }
  };

  React.useEffect(() => {
    getAllCase();
    console.log(rejData);
  }, []);

  const getAllCase = async () => {
    try {
      const res = await fetch(`${API_SERVICE}/getcase`);
      const caseall = await res.json();
      const rejectionData = await axios.get(
        `${API_SERVICE}/getrejectionContent`
      );
      setrejData(rejectionData);

      setallCase(caseall);
      setloading(false);
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <>
      {currentFile && (
        <UploadFile file={currentFile} urls={urls} setURL={setUrls} setFile={setCurrentFile} />
      )}
      <Dialog
        open={open2}
        onClose={handleCloseNext}
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
            onChange={(e) => setprojecttype(e.target.value)}
          >
            <option>Select the Type</option>
            <option value="Sub-sales">Sub-sales</option>
            <option value="Project">Project</option>
            {/* {console.log(getInputProps())} */}
          </select>
          {projecttype === 'Sub-sales' ? (
            <>
              <section style={{ marginTop: '40px' }} className="dropzone" {...getRootProps()}>
                <div>
                  <input onChange={uploadFile} type="file" />
                  <p>Please Upload title</p>
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
                  <p>Please Upload booking form</p>
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
            </>
          ) : projecttype === 'Project' ? (
            <>
              <section style={{ marginTop: '40px' }} className="dropzone" {...getRootProps()}>
                <div>
                  <input onChange={uploadFile} type="file" />
                  <p>Please Upload booking form</p>
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
                  <p>Please Upload the title</p>
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
            </>
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseNext}>Close</Button>
          <Button onClick={goBack}>Back</Button>
          <Button onClick={handleCloseNext} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        scroll="paper"
      >
        <DialogTitle id="alert-dialog-title">Create Case</DialogTitle>
        <DialogContent dividers={true}>
          <select
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #000000',
              borderRadius: '10px'
            }}
            onChange={(e) => changeEmployeeType(e.target.value)}
          >
            <option>Select the Type</option>
            <option value="Employee">Employee</option>
            <option value="Self-Employed">Self-Employed</option>
          </select>

          {type === 'Self-Employed' ? (
            <>
              <select
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #000000',
                  marginTop: '20px',
                  borderRadius: '10px'
                }}
                onChange={(e) => setsubcategory(e.target.value)}
              >
                <option>Select the Sub Category</option>
                <option value="Sdn Bhd">Sdn Bhd</option>
                <option value="Sole proprietorship">Sole proprietorship</option>
              </select>
            </>
          ) : type === 'Employee' ? (
            <>
              <select
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #000000',
                  marginTop: '20px',
                  borderRadius: '10px'
                }}
                onChange={(e) => setsubcategory(e.target.value)}
              >
                <option>Select the Sub Category</option>
                <option value="Basic salary">Basic salary</option>
                <option value="Basic + Commission / Allowance">
                  Basic + Commission / Allowance
                </option>
                <option value="Full commission earner">Full commission earner</option>
              </select>

              <select
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #000000',
                  marginTop: '20px',
                  borderRadius: '10px'
                }}
                onChange={(e) => setemployementyear(e.target.value)}
              >
                <option>Select employement year</option>
                <option value="Less than 1 Year">Less than 1 Year</option>
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                <option value="5 Year">5 Year</option>
                <option value="6 Year">6 Year</option>
                <option value="7 Year">7 Year</option>
                <option value="8 Year">8 Year</option>
                <option value="9 Year">9 Year</option>
                <option value="10 Year">10 Year</option>
                <option value="More than 10 Years">More than 10 Years</option>
              </select>
            </>
          ) : null}

          {subcategory === 'Basic salary' ? (
            <>
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
            </>
          ) : subcategory === 'Basic + Commission / Allowance' ? (
            <>
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
                  <p>Please Upload 6 months bank statement</p>
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
                  <p>Please Upload 6 months payslip</p>
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
            </>
          ) : subcategory === 'Full commission earner' ? (
            <>
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
                  <p>Please Upload 6 months bank statement</p>
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
                  <p>6 months commission statement</p>
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
                  <p>Please Upload latest 2 years Borang B Full set</p>
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
                  <p>Upload 2 years CP 58</p>
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
            </>
          ) : subcategory === 'Sdn Bhd' ? (
            <>
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
                  <p>Please Upload 6 months bank statement</p>
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
                  <p>SSM cert</p>
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
                  <p>Form (24,44,49,M&A),</p>
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
                  <p>2 years borang B full set</p>
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
            </>
          ) : subcategory === 'Sole proprietorship' ? (
            <>
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
                  <p>Please Upload 6 months bank statement</p>
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
                  <p>SSM cert</p>
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
                  <p>2 years borang B full set</p>
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
                  <p>2 years management account</p>
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
            </>
          ) : null}

          {employementyear === 'Less than 1 Year' ? (
            <section style={{ marginTop: '40px' }} className="dropzone" {...getRootProps()}>
              <div>
                <input onChange={uploadFile} type="file" />
                <p>Please Upload Employment letter</p>
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
          ) : employementyear === '1 Year' ? (
            <section style={{ marginTop: '40px' }} className="dropzone" {...getRootProps()}>
              <div>
                <input onChange={uploadFile} type="file" />
                <p>Please Upload Employment letter</p>
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
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleClose2} autoFocus>
            Next
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
        <Container maxWidth="xl">
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
                  <TableCell align="center">Status</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loading === true ? (
                  <TableRow>
                    <TableCell>Loading...</TableCell>
                  </TableRow>
                ) : (
                  <ShowServicesList getAllCase={getAllCase} allCase={allCase} rejData={rejData} />
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </>
  );
};

export default CasePage;
