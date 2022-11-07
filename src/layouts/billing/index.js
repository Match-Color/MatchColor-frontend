import { useState } from "react";
// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import shirt from "../../assets/images/shirt.png";
import pants from "../../assets/images/pants.png";

function Billing() {
  const [itemValue, setItem] = useState("Top");

  const handleItemChange = (e) => {
    setItem(e.target.value);
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
      <Footer />
    </DashboardLayout>
  );
}

export default Billing;
