// @mui material components
import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import "./index1.css";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import person1s from "../../assets/images/person1s.png";
import person1Edits from "../../assets/images/person1Edits.png";
import pants11 from "../../assets/images/pants11.png";
import pants12 from "../../assets/images/pants12.png";
import pants13 from "../../assets/images/pants13.png";
import pants14 from "../../assets/images/pants14.png";
import pants15 from "../../assets/images/pants15.png";
import pants16 from "../../assets/images/pants16.png";

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
        <MDBox mt={40} ml={10} mr={10}>
          <h1>Recommend Items</h1>
          <Grid container spacing={15}>
            <Grid item xs={4}>
              <MDBox mt={10} mb={10}>
                <Card>
                  <MDBox mt={1} mb={1} mr={0.5} ml={0.5}>
                    <img src={pants11} alt="person" />
                    <span className="brandspan">Brand | 그란데라인</span>
                    <span className="namespan">Name | 스완클래식팬츠</span>
                    <span className="pricespan">Price | ₩56,000</span>
                  </MDBox>
                </Card>
              </MDBox>
              <MDBox mt={10} mb={3}>
                <Card>
                  <MDBox mt={1} mb={1} mr={0.5} ml={0.5}>
                    <img width={386} src={pants16} alt="person" />
                    <span className="brandspan">Brand | 에트몽</span>
                    <span className="namespan">Name | 투웨이 벤딩 팬츠</span>
                    <span className="pricespan">Price | ₩93,000</span>
                  </MDBox>
                </Card>
              </MDBox>
            </Grid>
            <Grid item xs={4}>
              <MDBox mt={10} mb={10}>
                <Card>
                  <MDBox mt={1} mb={1} mr={0.5} ml={0.5}>
                    <img src={pants12} alt="person" />
                    <span className="brandspan">Brand | 어프레쉬</span>
                    <span className="namespan">Name | 코지라인조거팬츠</span>
                    <span className="pricespan">Price | ₩69,000</span>
                  </MDBox>
                </Card>
              </MDBox>
              <MDBox mt={10} mb={3}>
                <Card>
                  <MDBox mt={1} mb={1} mr={0.5} ml={0.5}>
                    <img src={pants15} alt="person" />
                    <span className="brandspan">Brand | 와르</span>
                    <span className="namespan">Name | 피그먼트 데님 팬츠</span>
                    <span className="pricespan">Price | ₩63,000</span>
                  </MDBox>
                </Card>
              </MDBox>
            </Grid>
            <Grid item xs={4}>
              <MDBox mt={10} mb={10}>
                <Card>
                  <MDBox mt={1} mb={1} mr={0.5} ml={0.5}>
                    <img src={pants13} alt="person" />
                    <span className="brandspan">Brand | 어프레쉬</span>
                    <span className="namespan">Name | 코지라인조거팬츠</span>
                    <span className="pricespan">Price | ₩69,000</span>
                  </MDBox>
                </Card>
              </MDBox>
              <MDBox mt={10} mb={3}>
                <Card>
                  <MDBox mt={1} mb={1} mr={0.5} ml={0.5}>
                    <img src={pants14} alt="person" />
                    <span className="brandspan">Brand | PHILOGRAM</span>
                    <span className="namespan">Name | 피그먼트 와이드 데님 팬츠</span>
                    <span className="pricespan">Price | ₩83,000</span>
                  </MDBox>
                </Card>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Notifications;
