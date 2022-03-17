import React from 'react';

import { Box, Container, IconButton } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DownloadIcon from '@mui/icons-material/Download';
import { API_SERVICE } from '../config/URI';

import { useDropzone } from 'react-dropzone';

const TableViewPage = ({ counter, caseall }) => {


  var date = caseall.createdAt;
  date = new Date(date).toString();
  return (
    <>
      <TableRow key={caseall._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell component="th" scope="row">
          {counter}
        </TableCell>
        <TableCell align="center">{caseall.name}</TableCell>
        <TableCell align="center">
          <p>
            {date.replace(/(.*:\d+).*/g, "$1")}
          </p>
        </TableCell>
        <TableCell align="center">{caseall.type}</TableCell>
        <TableCell align="center">
          <IconButton color="primary">
            <DownloadIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  )
}


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

  const [loading, setloading] = React.useState(true);
  const [allCase, setallCase] = React.useState([]);


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
    submitCase();
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
    console.log(API_SERVICE);
    try {
      const data = {
        usertype: 'Property Agent', type, projecttype, subcategory, employementyear, name, contact, email
      };
        const res = await fetch(`${API_SERVICE}/addcasepropertyagent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const response = await res.json();
      console.log(response);
      if (response === "Added") {
        alert("Case successfully added");
        setloading(true);
        getAllCase();
      }
    } catch (err) {
      console.log(err);
    }
  }

  React.useEffect(() => {
    getAllCase();
  }, []);
  

  const getAllCase = async () => {
    try {
      const res = await fetch(
        `${API_SERVICE}/getcase`
      );
      const caseall = await res.json();
      setallCase(caseall);
      setloading(false);
    } catch (err) {
      console.log(err);
    }
  }

  const showServicesList = () => {
    var counter = 0;
    return (
      <>
        {allCase.map((caseall) => {
          counter = counter + 1;
          return (
            <TableViewPage
              caseall={caseall}
              counter={counter}
              key={caseall._id}
            />
          );
        })}
      </>
    );
  };

  return (
    <>
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
            <option disabled selected>
              Select the Type
            </option>
            <option value="Sub-sales">Sub-sales</option>
            <option value="Project">Project</option>
          </select>
          {projecttype === 'Sub-sales' ? (
            <>
              <section style={{ marginTop: '40px' }} className="dropzone" {...getRootProps()}>
                <div>
                  <input {...getInputProps()} />
                  <p>Please upload title</p>
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
                  <input {...getInputProps()} />
                  <p>Please upload booking form</p>
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
                  <input {...getInputProps()} />
                  <p>Please upload booking form</p>
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
                  <input {...getInputProps()} />
                  <p>Please upload the title</p>
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
            <option disabled selected>
              Select the Type
            </option>
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
                <option disabled selected>
                  Select the Sub Category
                </option>
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
                <option disabled selected>
                  Select the Sub Category
                </option>
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
                <option disabled selected>
                  Select employement year
                </option>
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
                  <input {...getInputProps()} />
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
                  <input {...getInputProps()} />
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
                  <input {...getInputProps()} />
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
                  <input {...getInputProps()} />
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
                  <input {...getInputProps()} />
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
                  <input {...getInputProps()} />
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
                  <input {...getInputProps()} />
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
                  <input {...getInputProps()} />
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
                  <input {...getInputProps()} />
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
                  <input {...getInputProps()} />
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
                  <input {...getInputProps()} />
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
                  <input {...getInputProps()} />
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
                  <input {...getInputProps()} />
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
                  <input {...getInputProps()} />
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
                  <input {...getInputProps()} />
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
                  <input {...getInputProps()} />
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
                  <input {...getInputProps()} />
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
                  <input {...getInputProps()} />
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
                  <input {...getInputProps()} />
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
                  <input {...getInputProps()} />
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
                  <input {...getInputProps()} />
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
                  <input {...getInputProps()} />
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
                  <input {...getInputProps()} />
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
                  <input {...getInputProps()} />
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
                  <input {...getInputProps()} />
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
                  <input {...getInputProps()} />
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
                  <input {...getInputProps()} />
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
                  <input {...getInputProps()} />
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
                  <input {...getInputProps()} />
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
                  <input {...getInputProps()} />
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
                  <input {...getInputProps()} />
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
                <input {...getInputProps()} />
                <p>Please upload Employment letter</p>
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
                <input {...getInputProps()} />
                <p>Please upload Employment letter</p>
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
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  {loading === true ? (
                    <>
                      Loading...
                    </>
                  ) : (
                    <>{showServicesList()}</>
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
