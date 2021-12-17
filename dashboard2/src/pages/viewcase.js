import React from 'react';
import Head from 'next/head';
import { DashboardLayout } from '../components/dashboard-layout';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { Button, Container, TextField, Box, Typography, Rating } from '@mui/material';

const viewcase = () => {
    const [rating, setrating] = React.useState(0);

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Head>
                <title>
                    Dashboard | Property Management
                </title>
            </Head>

            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth="sm"
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                Your Comments
                </DialogTitle>
                <DialogContent>

                <center>
                    <Box
                        sx={{
                            '& > legend': { mt: 2 },
                        }}
                        >
                        <Typography component="legend">Rating</Typography>
                        <Rating
                            name="simple-controlled"
                            value={rating}
                            onChange={(event, newrating) => {
                                setrating(newrating);
                            }}
                            size="large"
                        />
                    </Box>
                </center>
                


                    <TextField 
                        fullWidth
                        rows={4}
                        multiline
                        variant="outlined"
                        type="text"
                        label="Comments"
                        sx={{ mt: 4 }}
                    />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <Button onClick={handleClose} autoFocus>
                    Submit
                </Button>
                </DialogActions>
            </Dialog>

            <Container>
                <Button sx={{ mt: 4 }} onClick={handleClickOpen}>
                    Comment
                </Button>
            </Container>
        </>
);
}
viewcase.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default viewcase;
