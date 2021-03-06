import { Icon } from '@iconify/react';
import appleFilled from '@iconify/icons-ant-design/apple-filled';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { API_SERVICE } from '../../../config/URI';
import { fShortenNumber } from '../../../utils/formatNumber';
import { useEffect, useState } from "react";
import axios from "axios"
// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.info.darker,
  backgroundColor: theme.palette.info.lighter
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
  color: theme.palette.info.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.info.dark, 0)} 0%, ${alpha(
    theme.palette.info.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

const TOTAL = 1352831;

export default function TotalInvestment() {
  const [allCase, setallCase] = useState([]);

  const getAllCase = async (month) => {
    try {
      
    
        const res =await axios.get(`${API_SERVICE}/getallfinanceconsutant`);
        setallCase(res.data.reverse())
       
  
    } catch (err) {
      // console.log(err);
    }
  };
  
  useEffect(() => {
    
  
  
    
    getAllCase();
    console.log(allCase.length)
  },[]);
  return (
    <RootStyle>
      <Typography variant="h3">{fShortenNumber(allCase.length)}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Total Investment
      </Typography>
    </RootStyle>
  );
}
