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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import person1s from "../../assets/images/person1s.png";
import person1Edits from "../../assets/images/person1Edits.png";
import pants11 from "../../assets/images/pants11.png";
import pants12 from "../../assets/images/pants12.png";
import pants13 from "../../assets/images/pants13.png";
import pants14 from "../../assets/images/pants14.png";
import pants15 from "../../assets/images/pants15.png";
import pants16 from "../../assets/images/pants16.png";
import person2s from "../../assets/images/person2s.png";
import person2Edits from "../../assets/images/person2Edits.png";
import pants21 from "../../assets/images/pants21.png";
import pants22 from "../../assets/images/pants22.png";
import pants23 from "../../assets/images/pants23.png";
import pants24 from "../../assets/images/pants24.png";
import pants25 from "../../assets/images/pants25.png";
import pants26 from "../../assets/images/pants26.png";
import person3s from "../../assets/images/person3s.png";
import pants31 from "../../assets/images/pants31.png";
import pants32 from "../../assets/images/pants32.png";
import pants33 from "../../assets/images/pants33.png";
import pants34 from "../../assets/images/pants34.png";
import pants35 from "../../assets/images/pants35.png";
import pants36 from "../../assets/images/pants36.png";
import nextArrow from "../../assets/images/nextArrow.png";
import preArrow from "../../assets/images/preArrow.png";

function Notifications() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Slider {...settings}>
        {/** 1. 시작 */}
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
        {/** 1. 끝 */}
        {/** 2. 시작 */}
        <MDBox mb={30}>
          <Grid container spacing={4}>
            <div className="topoftop" />
            <Grid container xs={7}>
              <span className="imgspan" />
              <img src={person2s} alt="person" />
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
                <div className="bottomColor2" />
                <div>
                  <span className="firstspan">Bottom</span>
                  <span className="secondspan">Warm Brown</span>
                  <span>#66585C</span>
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
                      <img src={pants21} alt="person" />
                      <span className="brandspan">Brand | KOLON</span>
                      <span className="namespan">Name | brown dyed ankle jeans</span>
                      <span className="pricespan">Price | ₩63,000</span>
                    </MDBox>
                  </Card>
                </MDBox>
                <MDBox mt={10} mb={3}>
                  <Card>
                    <MDBox mt={1} mb={1} mr={0.5} ml={0.5}>
                      <img width={386} src={pants24} alt="person" />
                      <span className="brandspan">Brand | NORDSTORM</span>
                      <span className="namespan">Name | 하이웨이트스 앵클 진</span>
                      <span className="pricespan">Price | ₩350,000</span>
                    </MDBox>
                  </Card>
                </MDBox>
              </Grid>
              <Grid item xs={4}>
                <MDBox mt={10} mb={10}>
                  <Card>
                    <MDBox mt={1} mb={1} mr={0.5} ml={0.5}>
                      <img src={pants22} alt="person" />
                      <span className="brandspan">Brand | NORDSTORM</span>
                      <span className="namespan">Name | 카고조거팬츠</span>
                      <span className="pricespan">Price | ₩82,000</span>
                    </MDBox>
                  </Card>
                </MDBox>
                <MDBox mt={10} mb={3}>
                  <Card>
                    <MDBox mt={1} mb={1} mr={0.5} ml={0.5}>
                      <img src={pants25} alt="person" />
                      <span className="brandspan">Brand | ASOS</span>
                      <span className="namespan">Name | 코듀로이 진</span>
                      <span className="pricespan">Price | ₩43,000</span>
                    </MDBox>
                  </Card>
                </MDBox>
              </Grid>
              <Grid item xs={4}>
                <MDBox mt={10} mb={10}>
                  <Card>
                    <MDBox mt={1} mb={1} mr={0.5} ml={0.5}>
                      <img src={pants23} alt="person" />
                      <span className="brandspan">Brand | NORDSTORM</span>
                      <span className="namespan">Name | 하이 라이즈 스키니 진</span>
                      <span className="pricespan">Price | ₩420,000</span>
                    </MDBox>
                  </Card>
                </MDBox>
                <MDBox mt={10} mb={3}>
                  <Card>
                    <MDBox mt={1} mb={1} mr={0.5} ml={0.5}>
                      <img src={pants26} alt="person" />
                      <span className="brandspan">Brand | brandy melville</span>
                      <span className="namespan">Name | 크리스피나 카고 진</span>
                      <span className="pricespan">Price | ₩63,000</span>
                    </MDBox>
                  </Card>
                </MDBox>
              </Grid>
            </Grid>
          </MDBox>
        </MDBox>
        {/** 2. 끝 */}
        {/** 3. 시작 */}
        <MDBox mb={30}>
          <Grid container spacing={4}>
            <div className="topoftop" />
            <Grid container xs={7}>
              <span className="imgspan" />
              <img src={person3s} alt="person" />
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
                <div className="bottomColor3" />
                <div>
                  <span className="firstspan">Bottom</span>
                  <span className="secondspan">Black</span>
                  <span>#0D0B0B</span>
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
                      <img src={pants31} alt="person" />
                      <span className="brandspan">Brand | 모드나인</span>
                      <span className="namespan">Name | black stardust -MOD1w</span>
                      <span className="pricespan">Price | ₩95,400</span>
                    </MDBox>
                  </Card>
                </MDBox>
                <MDBox mt={10} mb={3}>
                  <Card>
                    <MDBox mt={1} mb={1} mr={0.5} ml={0.5}>
                      <img width={386} src={pants34} alt="person" />
                      <span className="brandspan">Brand | 어반드레스</span>
                      <span className="namespan">Name | buckle wide denim panats</span>
                      <span className="pricespan">Price | ₩37,900</span>
                    </MDBox>
                  </Card>
                </MDBox>
              </Grid>
              <Grid item xs={4}>
                <MDBox mt={10} mb={10}>
                  <Card>
                    <MDBox mt={1} mb={1} mr={0.5} ml={0.5}>
                      <img src={pants32} alt="person" />
                      <span className="brandspan">Brand | 가까이 유니언즈</span>
                      <span className="namespan">Name | 원턱 와이드 팬츠</span>
                      <span className="pricespan">Price | ₩36,400</span>
                    </MDBox>
                  </Card>
                </MDBox>
                <MDBox mt={10} mb={3}>
                  <Card>
                    <MDBox mt={1} mb={1} mr={0.5} ml={0.5}>
                      <img src={pants35} alt="person" />
                      <span className="brandspan">Brand | 포트너스</span>
                      <span className="namespan">Name | 투턱 와이드 진</span>
                      <span className="pricespan">Price | ₩109,400</span>
                    </MDBox>
                  </Card>
                </MDBox>
              </Grid>
              <Grid item xs={4}>
                <MDBox mt={10} mb={10}>
                  <Card>
                    <MDBox mt={1} mb={1} mr={0.5} ml={0.5}>
                      <img src={pants33} alt="person" />
                      <span className="brandspan">Brand | 무신사 스탠다드</span>
                      <span className="namespan">Name | 와이드 데님 팬츠</span>
                      <span className="pricespan">Price | ₩47,000</span>
                    </MDBox>
                  </Card>
                </MDBox>
                <MDBox mt={10} mb={3}>
                  <Card>
                    <MDBox mt={1} mb={1} mr={0.5} ml={0.5}>
                      <img src={pants36} alt="person" />
                      <span className="brandspan">Brand | 굿라이프웍스</span>
                      <span className="namespan">Name | 와이드 빅포켓 카고 팬츠</span>
                      <span className="pricespan">Price | ₩46,400</span>
                    </MDBox>
                  </Card>
                </MDBox>
              </Grid>
            </Grid>
          </MDBox>
        </MDBox>
        {/** 3. 끝 */}
      </Slider>
      <Footer />
    </DashboardLayout>
  );
}

export default Notifications;
