// @mui material components
import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";


// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";



function Notifications() {
 
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={30}>
          <Grid container spacing={4}>
            <div className="topoftop" />
            <Grid container xs={7}>
              <span className="imgspan" />
              <img src={person1s} alt="person" />
            </Grid>
            <Grid container xs={5}>
              <Grid container xs={12}>
                <div className="topoftop2" />
                <div className="topColor1" />
                <div>
                  <span className="firstspan">Top</span>
                  <span className="secondspan">Black Navy</span>
                  <span>#322B2D</span>
                </div>
              </Grid>

              <Grid container xs={12}>
                <div className="bottomColor1" />
                <div>
                  <span className="firstspan">Bottom</span>
                  <span className="secondspan">Purple Grey</span>
                  <span>#99848A</span>
                </div>
              </Grid>
            </Grid>
          </Grid>

      <Footer />
    </DashboardLayout>
  );
}

export default Notifications;
