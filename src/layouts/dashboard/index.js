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

// @mui material components

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
// import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import "./index2.css";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import { useState } from "react";
import fileUpload from "../../assets/images/fileUpload.png";

import Spinner from "../../components/Loader/Loading";

// import IconImage from "../../assets/images/icons/selectionIcon.png";

function Dashboard() {
  const [imageSrc, setImageSrc] = useState(fileUpload);
  const [spinnerLoader, setspinnerLoader] = useState(false);

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    setspinnerLoader(true);

    setTimeout(() => window.open("/profile", "_self"), 3000);
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      {spinnerLoader ? <Spinner /> : null}
      <MDBox pt={3} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox>
                {/* 파일 업로드 확인 */}
                {/* 업로드 한 파일명: imageSrc */}
                <MDBox>
                  {/* {console.log(imageSrc)}
                  {console.log(imageSrc.toString)} */}
                  {imageSrc === "/static/media/fileUpload.82aece8c23679e8bda46.png" ? (
                    <p />
                  ) : (
                    <MDBox
                      mb="-100px"
                      mt="50px"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      flexWrap="wrap"
                      color="text"
                      px={1.5}
                    >
                      <span className="selectOption">Select Option&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      <form onSubmit={handleSubmit}>
                        <button className="selectBtn" type="submit">
                          {/* <img src={IconImage} alt="IconImage" /> */}
                          {">"}
                        </button>
                      </form>
                    </MDBox>
                  )}
                </MDBox>
                <MDBox
                  mt="150px"
                  mb="210px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexWrap="wrap"
                  color="text"
                  px={1.5}
                >
                  <label htmlFor="input-file">
                    {imageSrc && (
                      <img
                        src={imageSrc}
                        accept=".jpg, .jpeg, .png"
                        alt="preview-img"
                        width="550px"
                      />
                    )}
                  </label>

                  <input
                    width="500px"
                    type="file"
                    id="input-file"
                    onChange={(e) => {
                      encodeFileToBase64(e.target.files[0]);
                    }}
                    style={{ display: "none" }}
                  />
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
