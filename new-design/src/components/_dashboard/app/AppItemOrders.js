import { Icon } from '@iconify/react';
import windowsFilled from '@iconify/icons-ant-design/windows-filled';
// material
import React from 'react';
import { API_SERVICE } from '../../../config/URI';
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { useEffect, useState } from 'react';
import axios from 'axios';
import { fShortenNumber } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.warning.darker,
  backgroundColor: theme.palette.warning.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.warning.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.warning.dark, 0)} 0%, ${alpha(
    theme.palette.warning.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

const TOTAL = 1723315;

export default function AppItemOrders() {

  const [count, setCount] = React.useState('');
  const getAllCase = async (month) => {
    try {
      const resCase = await axios.get(`${API_SERVICE}/getcase`);
      const resFinanceConsultant = await axios.get(
        `${API_SERVICE}/getallfinanceconsutant`
      );
      const data1 = resCase.data;
      const data2 = resFinanceConsultant.data;
      const resData = data1.concat(data2);
      console.log(resData)
      const completed=[] 
      resData.map((i)=>{
        if(i.action){
          completed.push(i)
        }
      })
      setCount(completed.length)

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllCase();
  }, []);

  return (
    <RootStyle>
      <Typography variant="h3">{fShortenNumber(count)}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Completed Case
      </Typography>
    </RootStyle>
  );
}
