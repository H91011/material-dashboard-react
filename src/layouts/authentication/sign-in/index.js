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

import { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
//  import Grid from "@mui/material/Grid";
//  import MuiLink from "@mui/material/Link";
//
//  // @mui icons
//  import FacebookIcon from "@mui/icons-material/Facebook";
//  import GitHubIcon from "@mui/icons-material/GitHub";
//  import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
// import bgImage from "assets/images/bg-sign-in-basic.jpeg";

import * as yup from "yup";
import YupPassword from "yup-password";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import axios from "axios";
import { setAuth } from "store/authSlice";
import { useDispatch } from "react-redux";

YupPassword(yup);

const userSchema = yup.object({
  email: yup.string().email().required("Email required!"),
  password: yup.string().required("Password required!"),
});

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const nav = useNavigate();
  const dispatch = useDispatch();

  const signIn = async ({ email, password }) => {
    const login = process.env.REACT_APP_API_LOGIN;

    try {
      const {
        data: {
          token: { token },
          user,
        },
      } = await axios.post(
        login,
        {
          email, // : "akkaya.hu@gmail.com",
          password, // : "123",
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );

      dispatch(setAuth({ user, token }));

      nav("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/*
      <Grid
        sx={{
          position: "absolute",
          right: 20,
          top: 100,
          height: "75px",
          zIndex: 99999,
        }}
        spacing={2}
        xs={12}
        md={12}
      >
        <Alert severity="error" color="error">
          Error
        </Alert>
      </Grid>
      */}
      <CoverLayout hide>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <MDBox component="img" src="brandLogoDark.png" alt="Brand" width="16rem" />

          <Card style={{ width: "400px", marginTop: "30px" }}>
            <MDBox
              variant="gradient"
              bgColor="info"
              borderRadius="lg"
              coloredShadow="info"
              mx={2}
              mt={-3}
              p={2}
              mb={1}
              textAlign="center"
            >
              <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                Sign in
              </MDTypography>
            </MDBox>
            <MDBox pt={4} pb={3} px={3}>
              <MDBox component="form" role="form">
                <MDBox mb={2}>
                  <MDInput type="email" label="Email" fullWidth {...register("email")} />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput type="password" label="Password" fullWidth {...register("password")} />
                </MDBox>
                <MDBox display="flex" alignItems="center" ml={-1}>
                  <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                  <MDTypography
                    variant="button"
                    fontWeight="regular"
                    color="text"
                    onClick={handleSetRememberMe}
                    sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                  >
                    &nbsp;&nbsp;Remember me
                  </MDTypography>
                </MDBox>

                <MDBox mt={1} mb={1}>
                  <MDTypography variant="button" color="warning" style={{ fontWeight: "bold" }}>
                    {errors?.name?.message || errors?.password?.message}
                  </MDTypography>
                </MDBox>

                <MDBox mt={4} mb={1}>
                  <MDButton
                    variant="gradient"
                    color="info"
                    fullWidth
                    onClick={handleSubmit(signIn)}
                  >
                    sign in
                  </MDButton>
                </MDBox>
                <MDBox mt={3} mb={1} textAlign="center">
                  <MDTypography variant="button" color="text">
                    Don&apos;t have an account?{" "}
                    <MDTypography
                      component={Link}
                      to="/sign-up"
                      variant="button"
                      color="info"
                      fontWeight="medium"
                      textGradient
                    >
                      Sign up
                    </MDTypography>
                  </MDTypography>
                </MDBox>
              </MDBox>
            </MDBox>
          </Card>
        </div>
      </CoverLayout>
    </>
  );
}

export default Basic;
