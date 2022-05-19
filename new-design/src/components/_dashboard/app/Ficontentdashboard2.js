import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import React, { useEffect } from 'react';
import axios from 'axios';
import { API_SERVICE } from '../../../config/URI';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
//
import {
  Container,
  Button,
  Dialog,
  IconButton,
  Tooltip,

  RadioGroup,
  FormLabel,
  FormControlLabel,
  FormControl,
  Radio,
  InputLabel,
  Select,
  Autocomplete
} from '@mui/material';
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'Sub-sales',
    type: 'column',
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
  },
  {
    name: 'Project',
    type: 'area',
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
  },
  {
    name: 'Refinance',
    type: 'line',
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
  }
];

export default function Ficontentdashboard() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [0, 2, 3] },
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill: { type: ['solid', 'gradient', 'solid'] },
    labels: [
      '01/01/2003',
      '02/01/2003',
      '03/01/2003',
      '04/01/2003',
      '05/01/2003',
      '06/01/2003',
      '07/01/2003',
      '08/01/2003',
      '09/01/2003',
      '10/01/2003',
      '11/01/2003'
    ],
    xaxis: { type: 'datetime' },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} visits`;
          }
          return y;
        }
      }
    }
  });

  const [financeconsultantPost, setFinanceconsultantPost] = React.useState({});
  const [propertyagent, setPropertyagent] = React.useState({});
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    getAllCase();

  }, []);

  const getAllCase = async () => {
    try {
  
      const DataInfo = await axios.get(
        `${API_SERVICE}/getadminawards`
      );
      const proList=[]
      const fiList=[]
      // const DataInfo = await res.json();
      console.log(DataInfo)
      
      const newData=DataInfo.data.reverse()
      console.log(newData)

      newData.map((file,_)=>{
        if(file?.type==="Finance Consultant"){
          if(file?.status==="Enable the award"){
            fiList.push(file)


          }
        }
        if(file?.type==="Property Agent"){
          if(file?.status==="Enable the award"){
            proList.push(file)


          }
        }
   

      });
      setFinanceconsultantPost(fiList[0])
      console.log("------------------")
      setPropertyagent(proList[0])
      console.log("------------------")
      console.log("print down")
      console.log(financeconsultantPost)
      
      // setPropertyagent(propertyagentData);

    
    } catch (err) {
      // console.log(err);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };


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
        {financeconsultantPost.urls?.map((link) => {
        return (
          <img
            src={link}
            width={'100%'}
            alt=""
          />
        );
      })}
          
          <Typography
            sx={{
              float: 'left'
            }}
            align="center"
            variant="h5"
          >
            Are you sure you want to claim awards?
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button color="error" onClick={handleClose} autoFocus>
            Cancel
          </Button>
          <Button color="primary" autoFocus>
            Claim
          </Button>
        </DialogActions>
      </Dialog>
    <Card>
      <CardHeader title="Reward Details" />
      <Box sx={{ p: 2, pb: 1 }} dir="ltr">
      <Typography sx={{ mt: 1 }} variant="h6">
        Reward Title - {financeconsultantPost.rewardtitle}
       
        
          
      </Typography>
      <Typography sx={{ mt: 1 }} variant="h6">
       
        Reward points - {financeconsultantPost.rewardpoint}
       
        
          
      </Typography>
      <Typography sx={{ mt: 1 }} variant="h6">
    
        Status - {financeconsultantPost.status}

        
          
      </Typography>
      <Typography sx={{ mt: 1 }} variant="h6">
   
        Type - {financeconsultantPost.type}

      </Typography>
      <Button
              sx={{
                margin: '30px 10px'
                
              }}
              variant="contained"
              color="primary"
              style={{width:"95%"}}

              
              onClick={handleClickOpen}
            >
             Claim Your Reward
            </Button>
      
        
      </Box>
    </Card>
    </>
    
  );
}
