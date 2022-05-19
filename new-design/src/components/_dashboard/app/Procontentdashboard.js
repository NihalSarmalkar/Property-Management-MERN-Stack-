import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import React, { useEffect } from 'react';

import { API_SERVICE } from '../../../config/URI';
import axios from 'axios';
import { BaseOptionChart } from '../../charts';
import Typography from '@mui/material/Typography';

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

export default function Procontentdashboard() {
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


  return (
    <Card>
      <CardHeader title="Submission Case" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">

      {financeconsultantPost.urls?.map((link) => {
        return (
          <img src={link} />
        );
      })}

      </Box>
    </Card>
  );
}
