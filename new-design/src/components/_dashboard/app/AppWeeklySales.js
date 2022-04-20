import { Icon } from '@iconify/react';
import androidFilled from '@iconify/icons-ant-design/android-filled';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
import { useEffect, useState } from "react";
import axios from "axios"
// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.primary.darker,
  backgroundColor: theme.palette.primary.lighter
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
  color: theme.palette.primary.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0)} 0%, ${alpha(
    theme.palette.primary.dark,
    0.24
  )} 100%)`
}));




// ----------------------------------------------------------------------

const TOTAL = 714000;

export default function AppWeeklySales() {
  const [allCase, setallCase] = useState([]);

  const getAllCase = async (month) => {
    try {
      
    
        const res =await axios.get("http://localhost:8080/api/v1/main/getcase");
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
        Case Submission
      </Typography>
    </RootStyle>
  );
}
