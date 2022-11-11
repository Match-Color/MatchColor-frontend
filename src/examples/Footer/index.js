/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React base styles
import typography from "assets/theme/base/typography";

import Grid from "@mui/material/Grid";
// Overview page components

import GoogleDrive from "../../assets/images/icons/googledrive.png";
import Jira from "../../assets/images/icons/jira.png";
import Github from "../../assets/images/icons/github.png";
import MatchColor from "../../assets/images/matchColor.png";

import Seoyeon from "../../assets/images/icons/seoyeon.png";
import Sumin from "../../assets/images/icons/sumin.png";
import Soyeon from "../../assets/images/icons/soyeon.png";
import Namyoon from "../../assets/images/icons/namyoon.png";

function Footer() {
  const { size } = typography;

  return (
    <MDBox>
      <MDBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        color="text"
        fontSize={size.sm}
        px={1.5}
        mt={3}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} xl={3}>
            <MDBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
              color="text"
              fontSize={size.sm}
              px={1.5}
            >
              <img src={MatchColor} alt="" width="300px" />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={8} xl={3} sx={{ display: "flex" }}>
            <MDBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
              color="text"
              fontSize={size.sm}
              px={1.5}
            >
              <MDBox justifyContent="center" alignItems="center" mb={13}>
                <h1>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INFO
                </h1>
                <MDBox mt={2} />
                <div>대표 | 문서연</div>
                <div>주소 | 경기도 하남시 미사강변동로180</div>
                <div>사업자등록번호 | 124-76-00470</div>
              </MDBox>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} xl={3} sx={{ display: "flex" }}>
            <MDBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
              color="text"
              fontSize={size.sm}
              px={1.5}
            >
              <MDBox justifyContent="center" alignItems="center" mb={8}>
                <h1>&nbsp;&nbsp;&nbsp;&nbsp;CONTECT</h1>
                <MDBox mt={2} />
                <div>TEL | 010-5040-1142</div>
                <div>EMAIL | anstjdus0702@duksung.ac.kr</div>
                <MDBox mt={2}>
                  <img src={GoogleDrive} alt="GoogleDrive" /> &nbsp;&nbsp;&nbsp;
                  <img src={Jira} alt="Jira" /> &nbsp;&nbsp;&nbsp;
                  <img src={Github} alt="Github" />
                </MDBox>
              </MDBox>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} xl={3} sx={{ display: "flex" }}>
            <MDBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
              color="text"
              fontSize={size.sm}
              px={1.5}
            >
              <MDBox justifyContent="center" alignItems="center">
                <h1>DEVELOPERS</h1>
                <h3>
                  &nbsp;&nbsp;PM&nbsp;&nbsp;|&nbsp;&nbsp; 문서연&nbsp;&nbsp;&nbsp;
                  <img src={Seoyeon} alt="pm" />
                </h3>
                <h3>
                  &nbsp;&nbsp;QA&nbsp;&nbsp;|&nbsp;&nbsp; 강수민&nbsp;&nbsp;&nbsp;
                  <img src={Sumin} alt="QA" />
                </h3>
                <h3>
                  &nbsp;&nbsp;PD&nbsp;&nbsp;|&nbsp;&nbsp; 박소연&nbsp;&nbsp;&nbsp;
                  <img src={Soyeon} alt="pm" />
                </h3>
                <h3>
                  DBA&nbsp;&nbsp;|&nbsp;&nbsp; 조남윤&nbsp;&nbsp;&nbsp;
                  <img src={Namyoon} alt="pm" />
                </h3>
              </MDBox>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        color="text"
        fontSize={size.sm}
        px={1.5}
      >
        copyright &copy; MatchColor 2022. All Rights Reserved
      </MDBox>
      <MDBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        color="text"
        fontSize={size.sm}
        px={1.5}
      >
        Reserved Designed by 상부상조
      </MDBox>
    </MDBox>
  );
}

export default Footer;
