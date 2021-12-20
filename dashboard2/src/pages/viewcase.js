import React from 'react';
import Head from 'next/head';
import { DashboardLayout } from '../components/dashboard-layout';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, Container, Avatar, TextField, Box, Typography, Rating, Paper, IconButton, CardHeader } from '@mui/material';

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
                <Button variant="outlined" sx={{ mt: 4 }} onClick={handleClickOpen}>
                    Comment
                </Button>
                <Paper sx={{ p: 3, mt: 4 }} elevation={0}>
                    <Rating sx={{ float: 'right' }} name="read-only" value={5} readOnly />
                    <CardHeader
                        avatar={
                        <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                            R
                        </Avatar>
                        }
                        title="User Name (Designation)"
                        subheader="December 14, 2021"
                    />
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </Paper>


                
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
