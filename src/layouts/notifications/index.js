// @mui material components
import React from "react";
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
import pants11 from "../../assets/images/pants11.png";
import pants12 from "../../assets/images/pants12.png";
import pants13 from "../../assets/images/pants13.png";
import pants14 from "../../assets/images/pants14.png";
import pants15 from "../../assets/images/pants15.png";
import pants16 from "../../assets/images/pants16.png";
import person2s from "../../assets/images/person2s.png";
import pants21 from "../../assets/images/pants21.jpg";
import pants22 from "../../assets/images/pants22.jpg";
import pants23 from "../../assets/images/pants23.jpg";
import pants24 from "../../assets/images/pants24.jpg";
import pants25 from "../../assets/images/pants25.jpg";
import pants26 from "../../assets/images/pants26.jpg";
import person3s from "../../assets/images/person3s.png";
import pants31 from "../../assets/images/pants31.png";
import pants32 from "../../assets/images/pants32.png";
import pants33 from "../../assets/images/pants33.png";
import pants34 from "../../assets/images/pants34.png";
import pants35 from "../../assets/images/pants35.png";
import pants36 from "../../assets/images/pants36.png";

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
        <MDBox mb={20}>
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
                  <span className="thirdspan">#322B2D</span>
                </div>
              </Grid>

              <Grid container xs={12}>
                <div className="bottomColor1" />
                <div>
                  <span className="firstspan">Bottom</span>
                  <span className="secondspan">Purple Grey</span>
                  <span className="thirdspan">#99848A</span>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <MDBox mt={20} ml={10} mr={10}>
            <span className="recommendItem">Recommend Items</span>
            <Grid container spacing={15}>
              <Grid item xs={4}>
                <MDBox mt={10} mb={10}>
                  <Card>
                    <MDBox mt={2.5} mb={1} mr={3} ml={3}>
                      <img className="imgTag" width={275} src={pants11} alt="person" />
                      <span className="brandspan">그란데라인</span>
                      <span className="namespan">스완클래식팬츠</span>
                      <span className="pricespan">₩56,000</span>
                    </MDBox>
                  </Card>
                </MDBox>
                <MDBox mt={10} mb={3}>
                  <Card>
                    <MDBox mt={2.5} mb={1} mr={3} ml={3}>
                      <img className="imgTag" width={275} src={pants16} alt="person" />
                      <span className="brandspan">에트몽</span>
                      <span className="namespan">투웨이 벤딩 팬츠</span>
                      <span className="pricespan">₩93,000</span>
                    </MDBox>
                  </Card>
                </MDBox>
              </Grid>
              <Grid item xs={4}>
                <MDBox mt={10} mb={10}>
                  <Card>
                    <MDBox mt={2.5} mb={1} mr={3} ml={3}>
                      <img className="imgTag" width={275} src={pants12} alt="person" />
                      <span className="brandspan">어프레쉬</span>
                      <span className="namespan">코지라인 조거팬츠</span>
                      <span className="pricespan">₩69,000</span>
                    </MDBox>
                  </Card>
                </MDBox>
                <MDBox mt={10} mb={3}>
                  <Card>
                    <MDBox mt={2.5} mb={1} mr={3} ml={3}>
                      <img className="imgTag" width={275} src={pants15} alt="person" />
                      <span className="brandspan">와르</span>
                      <span className="namespan">피그먼트 데님 팬츠</span>
                      <span className="pricespan">₩63,000</span>
                    </MDBox>
                  </Card>
                </MDBox>
              </Grid>
              <Grid item xs={4}>
                <MDBox mt={10} mb={10}>
                  <Card>
                    <MDBox mt={2.5} mb={1} mr={3} ml={3}>
                      <img className="imgTag" width={275} src={pants13} alt="person" />
                      <span className="brandspan">Rag & bone</span>
                      <span className="namespan">jacey velvet pants</span>
                      <span className="pricespan">₩66,000</span>
                    </MDBox>
                  </Card>
                </MDBox>
                <MDBox mt={10} mb={3}>
                  <Card>
                    <MDBox mt={2.5} mb={1} mr={3} ml={3}>
                      <img className="imgTag" width={275} src={pants14} alt="person" />
                      <span className="brandspan">PHILOGRAM</span>
                      <span className="namespan">피그먼트 와이드 데님 팬츠</span>
                      <span className="pricespan">₩83,000</span>
                    </MDBox>
                  </Card>
                </MDBox>
              </Grid>
            </Grid>
          </MDBox>
        </MDBox>
        {/** 1. 끝 */}
        {/** 2. 시작 */}
        <MDBox mb={20}>
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
                  <span className="thirdspan">#322B2D</span>
                </div>
              </Grid>

              <Grid container xs={12}>
                <div className="bottomColor2" />
                <div>
                  <span className="firstspan">Bottom</span>
                  <span className="secondspan">Warm Brown</span>
                  <span className="thirdspan">#66585C</span>
                </div>
              </Grid>
            </Grid>
          </Grid>

          <MDBox mt={20} ml={10} mr={10}>
            <h1>Recommend Items</h1>
            <Grid container spacing={15}>
              <Grid item xs={4}>
                <MDBox mt={10} mb={10}>
                  <Card>
                    <MDBox mt={2.5} mb={1} mr={3} ml={3}>
                      <img className="imgTag" width={275} src={pants21} alt="person" />
                      <span className="brandspan">육육걸즈</span>
                      <span className="namespan">여유핏 골덴 일자 롱팬츠</span>
                      <span className="pricespan">₩25,000</span>
                    </MDBox>
                  </Card>
                </MDBox>
                <MDBox mt={10} mb={3}>
                  <Card>
                    <MDBox mt={2.5} mb={1} mr={3} ml={3}>
                      <img className="imgTag" width={275} src={pants24} alt="person" />
                      <span className="brandspan">니어웨어</span>
                      <span className="namespan">BURNER broze pants</span>
                      <span className="pricespan">₩32,900</span>
                    </MDBox>
                  </Card>
                </MDBox>
              </Grid>
              <Grid item xs={4}>
                <MDBox mt={10} mb={10}>
                  <Card>
                    <MDBox mt={2.5} mb={1} mr={3} ml={3}>
                      <img className="imgTag" width={275} src={pants22} alt="person" />
                      <span className="brandspan">habi, unni</span>
                      <span className="namespan">보이핏 일자 와이드 면바지</span>
                      <span className="pricespan">₩39,800</span>
                    </MDBox>
                  </Card>
                </MDBox>
                <MDBox mt={10} mb={3}>
                  <Card>
                    <MDBox mt={2.5} mb={1} mr={3} ml={3}>
                      <img className="imgTag" width={275} src={pants25} alt="person" />
                      <span className="brandspan">프롬비기닝</span>
                      <span className="namespan">브룩 헤링본 일자 팬츠</span>
                      <span className="pricespan">₩29,000</span>
                    </MDBox>
                  </Card>
                </MDBox>
              </Grid>
              <Grid item xs={4}>
                <MDBox mt={10} mb={10}>
                  <Card>
                    <MDBox mt={2.5} mb={1} mr={3} ml={3}>
                      <img className="imgTag" width={275} src={pants23} alt="person" />
                      <span className="brandspan">파스텔데이</span>
                      <span className="namespan">원터 코듀로이 골덴 일자 팬츠</span>
                      <span className="pricespan">₩22,500</span>
                    </MDBox>
                  </Card>
                </MDBox>
                <MDBox mt={10} mb={3}>
                  <Card>
                    <MDBox mt={2.5} mb={1} mr={3} ml={3}>
                      <img className="imgTag" width={275} src={pants26} alt="person" />
                      <span className="brandspan">오어유</span>
                      <span className="namespan">딥 워싱 브라운 스트레이트핏 팬츠</span>
                      <span className="pricespan">₩30,000</span>
                    </MDBox>
                  </Card>
                </MDBox>
              </Grid>
            </Grid>
          </MDBox>
        </MDBox>
        {/** 2. 끝 */}
        {/** 3. 시작 */}
        <MDBox mb={20}>
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
                  <span className="thirdspan">#322B2D</span>
                </div>
              </Grid>

              <Grid container xs={12}>
                <div className="bottomColor3" />
                <div>
                  <span className="firstspan">Bottom</span>
                  <span className="secondspan">Black</span>
                  <span className="thirdspan">#0D0B0B</span>
                </div>
              </Grid>
            </Grid>
          </Grid>

          <MDBox mt={20} ml={10} mr={10}>
            <h1>Recommend Items</h1>
            <Grid container spacing={15}>
              <Grid item xs={4}>
                <MDBox mt={10} mb={10}>
                  <Card>
                    <MDBox mt={2.5} mb={1} mr={3} ml={3}>
                      <img className="imgTag" width={275} src={pants31} alt="person" />
                      <span className="brandspan">모드나인</span>
                      <span className="namespan">black stardust -MOD1w</span>
                      <span className="pricespan">₩95,400</span>
                    </MDBox>
                  </Card>
                </MDBox>
                <MDBox mt={10} mb={3}>
                  <Card>
                    <MDBox mt={2.5} mb={1} mr={3} ml={3}>
                      <img className="imgTag" width={275} src={pants34} alt="person" />
                      <span className="brandspan">어반드레스</span>
                      <span className="namespan">buckle wide denim panats</span>
                      <span className="pricespan">₩37,900</span>
                    </MDBox>
                  </Card>
                </MDBox>
              </Grid>
              <Grid item xs={4}>
                <MDBox mt={10} mb={10}>
                  <Card>
                    <MDBox mt={2.5} mb={1} mr={3} ml={3}>
                      <img className="imgTag" width={275} src={pants32} alt="person" />
                      <span className="brandspan">가까이 유니언즈</span>
                      <span className="namespan">원턱 와이드 팬츠</span>
                      <span className="pricespan">₩36,400</span>
                    </MDBox>
                  </Card>
                </MDBox>
                <MDBox mt={10} mb={3}>
                  <Card>
                    <MDBox mt={2.5} mb={1} mr={3} ml={3}>
                      <img className="imgTag" width={275} src={pants35} alt="person" />
                      <span className="brandspan">포트너스</span>
                      <span className="namespan">투턱 와이드 진</span>
                      <span className="pricespan">₩109,400</span>
                    </MDBox>
                  </Card>
                </MDBox>
              </Grid>
              <Grid item xs={4}>
                <MDBox mt={10} mb={10}>
                  <Card>
                    <MDBox mt={2.5} mb={1} mr={3} ml={3}>
                      <img className="imgTag" width={275} src={pants33} alt="person" />
                      <span className="brandspan">무신사 스탠다드</span>
                      <span className="namespan">와이드 데님 팬츠</span>
                      <span className="pricespan">₩47,000</span>
                    </MDBox>
                  </Card>
                </MDBox>
                <MDBox mt={10} mb={3}>
                  <Card>
                    <MDBox mt={2.5} mb={1} mr={3} ml={3}>
                      <img className="imgTag" width={275} src={pants36} alt="person" />
                      <span className="brandspan">굿라이프웍스</span>
                      <span className="namespan">와이드 빅포켓 카고 팬츠</span>
                      <span className="pricespan">₩46,400</span>
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
