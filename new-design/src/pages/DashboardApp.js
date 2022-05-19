// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components

import React, { useEffect } from 'react';
import Page from '../components/Page';
import {
  AppTasks,
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppNewsUpdate,
  AppWeeklySales,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  Procontentdashboard,
  AppWebsiteAdminRewards,
  Ficontentdashboard,
  Ficontentdashboard2,
  Procontentdashboard2,
  AppTrafficBySite,
  AppCurrentSubject,
  AppConversionRates
} from '../components/_dashboard/app';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const { user: currentUser, dispatch } = useContext(AuthContext);

  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>


          <Grid item xs={12} sm={6} md={3}>
            <AppWeeklySales />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppNewUsers />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppItemOrders />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBugReports />
          </Grid>


          {(() => {
            if (currentUser?.usertype === 'Finance Consultant') {
              return (
                <>
                  <Grid item xs={12} md={6} lg={8}>
                    <Ficontentdashboard />
                  </Grid>

                  <Grid item xs={12} md={6} lg={4}>
                    <Ficontentdashboard2 />
                  </Grid>
                </>
              );
            }
          })()}

          {(() => {
            if (currentUser?.usertype === 'Property Agent') {
              return (
                <>
                  <Grid item xs={12} md={6} lg={8}>
                    <Procontentdashboard />
                  </Grid>

                  <Grid item xs={12} md={6} lg={4}>
                    <Procontentdashboard2 />
                  </Grid>
                </>
              );
            }
          })()}
          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid>

          

          {/* 
          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks />
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
}
