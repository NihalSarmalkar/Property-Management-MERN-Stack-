import Head from "next/head";
import React from "react";

import { Box, Container } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";

import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import { useDropzone } from "react-dropzone";

const newcasefinanceconsultant = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [open, setOpen] = React.useState(false);

  const [open2, setOpen2] = React.useState(false);

  const [type, settype] = React.useState("");

  const [projecttype, setprojecttype] = React.useState("");

  const [subcategory, setsubcategory] = React.useState("");
  const [employementyear, setemployementyear] = React.useState("");

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
    setsubcategory("");
    setemployementyear("");
  };

  React.useEffect(() => {
    handleClickOpen();
  }, []);

  return (
    <>
      <Dialog
        fullScreen
        open={open2}
        onClose={handleCloseNext}
        aria-labelledby="alert-dialog-title"
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
            onChange={(e) => setprojecttype(e.target.value)}
          >
            <option disabled selected>
              Select the Type
            </option>
            <option value="Sub-sales">Sub-sales</option>
            <option value="Project">Project</option>
          </select>
          {projecttype === "Sub-sales" ? (
            <>
              <section style={{ marginTop: "40px" }} className="dropzone" {...getRootProps()}>
                <div>
                  <input {...getInputProps()} />
                  <p>Please upload title</p>
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
                  <p>Please upload booking form</p>
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
            </>
          ) : projecttype === "Project" ? (
            <>
              <section style={{ marginTop: "40px" }} className="dropzone" {...getRootProps()}>
                <div>
                  <input {...getInputProps()} />
                  <p>Please upload booking form</p>
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
            </>
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseNext}>Close</Button>
          <Button onClick={goBack}>Back</Button>
          <Button onClick={() => (window.location = "/financeconsultant.html")} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        scroll="paper"
      >
        <DialogTitle id="alert-dialog-title">Create Case</DialogTitle>
        <DialogContent dividers={true}>
          <select
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #000000",
              borderRadius: "10px",
            }}
            onChange={(e) => changeEmployeeType(e.target.value)}
          >
            <option disabled selected>
              Select the Type
            </option>
            <option value="Employee">Employee</option>
            <option value="Self-Employed">Self-Employed</option>
          </select>

          {type === "Self-Employed" ? (
            <>
              <select
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #000000",
                  marginTop: "20px",
                  borderRadius: "10px",
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
          ) : type === "Employee" ? (
            <>
              <select
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #000000",
                  marginTop: "20px",
                  borderRadius: "10px",
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
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #000000",
                  marginTop: "20px",
                  borderRadius: "10px",
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

          {subcategory === "Basic salary" ? (
            <>
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
            </>
          ) : subcategory === "Basic + Commission / Allowance" ? (
            <>
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
                  <p>Please Upload 6 months bank statement</p>
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
                  <p>Please Upload 6 months payslip</p>
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
            </>
          ) : subcategory === "Full commission earner" ? (
            <>
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
                  <p>Please Upload 6 months bank statement</p>
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
                  <p>6 months commission statement</p>
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
                  <p>Please Upload latest 2 years Borang B Full set</p>
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
                  <p>Upload 2 years CP 58</p>
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
            </>
          ) : subcategory === "Sdn Bhd" ? (
            <>
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
                  <p>Please Upload 6 months bank statement</p>
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
                  <p>SSM cert</p>
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
                  <p>Form (24,44,49,M&A),</p>
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
                  <p>2 years borang B full set</p>
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
            </>
          ) : subcategory === "Sole proprietorship" ? (
            <>
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
                  <p>Please Upload 6 months bank statement</p>
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
                  <p>SSM cert</p>
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
                  <p>2 years borang B full set</p>
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
                  <p>2 years management account</p>
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
            </>
          ) : null}

          {employementyear === "Less than 1 Year" ? (
            <section style={{ marginTop: "40px" }} className="dropzone" {...getRootProps()}>
              <div>
                <input {...getInputProps()} />
                <p>Please upload Employment letter</p>
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
          ) : employementyear === "1 Year" ? (
            <section style={{ marginTop: "40px" }} className="dropzone" {...getRootProps()}>
              <div>
                <input {...getInputProps()} />
                <p>Please upload Employment letter</p>
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
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleClose2} autoFocus>
            Next
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
        <Container maxWidth="xl"></Container>
      </Box>
    </>
  );
};

newcasefinanceconsultant.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default newcasefinanceconsultant;
