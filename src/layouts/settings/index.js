import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import MDButton from "components/MDButton";
// Data

// Dashboard components

export default function Settings() {
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <MDBox py={3}>
        <Grid item xs={12} md={6} lg={8}>
          <MDButton variant="text">
            <DefaultInfoCard
              color="error"
              icon="vpn_key_off"
              title="Etsy"
              description="Connect Etsy Accounts"
            />
          </MDButton>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}
