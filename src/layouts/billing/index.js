import { useState } from "react";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import shirt from "../../assets/images/shirt.png";
import pants from "../../assets/images/pants.png";
import "./index.css";
function Billing() {
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

  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
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
      <MDBox mb={3} mt={8}>
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
                <input type="radio" value="Top" id="Top" onChange={handleItemChange} name="item" />{" "}
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
          <a href="/tables">
            <div className="match"> match!</div>
          </a>
        </div>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Billing;
