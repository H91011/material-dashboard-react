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
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Overview page components
import Header from "layouts/profile/components/Header";
import MDTypography from "components/MDTypography";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import YupPassword from "yup-password";
import { yupResolver } from "@hookform/resolvers/yup";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
// Data

// Images

YupPassword(yup);

const userSchema = yup.object({
  email: yup.string().email().required("Email required!"),
  currentPassword: yup.string().required("Password required!"),
  password: yup.string().required("Password required!"),
});

function Overview() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = () => {};
  const onError = () => {};

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox>
          <Grid mt={5} spacing={1}>
            <Grid item xs={12} md={8} lg={6}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <MDBox mb={3}>
                <MDTypography variant="h6" fontWeight="medium" mt={1}>
                  User Options
                </MDTypography>
              </MDBox>

              <MDBox mb={3}>
                <MDInput type="email" label="Email" fullWidth {...register("email")} disabled />
              </MDBox>
              <MDBox mb={3}>
                <MDInput
                  type="password"
                  label="CurrentPassword"
                  fullWidth
                  {...register("currentPassword")}
                />
              </MDBox>
              <MDBox mb={3}>
                <MDInput type="password" label="New Pasword" fullWidth {...register("password")} />
              </MDBox>
              <MDBox mb={2} style={{ float: "right" }}>
                <MDButton color="info" onClick={handleSubmit(onSubmit, onError)}>
                  Save
                </MDButton>
              </MDBox>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
            </Grid>
          </Grid>
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
