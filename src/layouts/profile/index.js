import { useState } from "react";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import shirt from "../../assets/images/shirt.png";
import pants from "../../assets/images/pants.png";
import "./index.css";
import Spinner from "../../components/Loader/Loading2";

function Overview() {
  const styleList = ["Tone On Tone", "Tone In Tone", "Monotone"];
  const topList = ["T-shirts", "blouse", "shirt", "hoodie", "sweatshirt", "neat/sweater"];
  const bottomList = ["slacks", "jean", "skirt"];

  const [StyleSelected, setStyle] = useState("");
  const [TopSelected, setTop] = useState("");
  const [BottomSelected, setBottom] = useState("");
  const [itemValue, setItem] = useState("Top");

  const handleStyleSelect = (e) => {
    setStyle(e.target.value);
  };
  const handleItemChange = (e) => {
    setItem(e.target.value);
  };
  const handleTopSelect = (e) => {
    setTop(e.target.value);
  };
  const handleBottomSelect = (e) => {
    setBottom(e.target.value);
  };

  const [spinnerLoader, setspinnerLoader] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
    setspinnerLoader(true);

    setTimeout(() => window.open("/notifications", "_self"), 3000);
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      {spinnerLoader ? <Spinner /> : null}
      <MDBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        color="text"
        px={1.5}
      >
        <MDBox mb={3} mt={8}>
          <div className="firstBox">
            <div className="secondBox">
              {itemValue === "Top" ? (
                <img src={shirt} alt="shirt" />
              ) : (
                <img src={pants} alt="shirt" />
              )}
            </div>
          </div>
        </MDBox>
      </MDBox>
      <MDBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        color="text"
        px={1.5}
      >
        <MDBox mb={30} mt={8}>
          <div className="selectBox">
            <span className="pleaseChoose">Choose Your Options</span>
            <div className="styleBox">
              <span className="spanItem">Style</span>
              <select className="style" onChange={handleStyleSelect} value={StyleSelected}>
                {styleList.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="styleBox">
              <span className="spanItem">Item</span>
              <form className="form" style={{ display: "inline-block" }}>
                <label className="label" htmlFor="Top">
                  <input
                    type="radio"
                    value="Top"
                    id="Top"
                    onChange={handleItemChange}
                    name="item"
                  />{" "}
                  Top
                </label>{" "}
                <label className="label" htmlFor="Bottom">
                  <input
                    type="radio"
                    value="Bottom"
                    id="Bottom"
                    onChange={handleItemChange}
                    name="item"
                  />{" "}
                  Bottom
                </label>
              </form>
            </div>
            <div className="styleBox">
              <span className="spanItem">Type</span>
              {itemValue === "Top" ? (
                <select className="style" onChange={handleTopSelect} value={TopSelected}>
                  {topList.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
              ) : (
                <select className="style" onChange={handleBottomSelect} value={BottomSelected}>
                  {bottomList.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
              )}
            </div>
            <form onSubmit={handleSubmit}>
              <button type="submit" className="match">
                Match!
              </button>
            </form>
          </div>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
