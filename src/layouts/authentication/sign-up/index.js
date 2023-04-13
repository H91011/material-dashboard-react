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

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
// import bgImage from "assets/images/bg-sign-up-cover.jpeg";

import * as yup from "yup";
import YupPassword from "yup-password";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

YupPassword(yup);

const userSchema = yup.object({
  name: yup.string().required("Name required!"),
  email: yup.string().email().required("Email required!"),
  password: yup
    .string()
    .min(6, "Min 6 character length!")
    .minLowercase(1, "At least one lower case!")
    .minUppercase(1, "At least one upper case!")
    .required("Password required!"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords don't match!")
    .required("ConfirmPassword is required!"),
  terms: yup
    .boolean()
    .required("You need to agree terms!")
    .oneOf([true], "The terms and conditions must be accepted."),
});

function Cover() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const singIn = async (data) => {
    console.log(data);
  };

  const onError = () => {};

  return (
    <CoverLayout>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Name"
                variant="standard"
                fullWidth
                error={!!errors?.name}
                {...register("name")}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                variant="standard"
                fullWidth
                error={!!errors?.email}
                {...register("email")}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                variant="standard"
                fullWidth
                error={!!errors?.password}
                {...register("password")}
              />
            </MDBox>

            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                variant="standard"
                fullWidth
                error={!!errors?.confirmPassword}
                {...register("confirmPassword")}
              />
            </MDBox>

            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox {...register("terms")} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>

            <MDBox mt={1} mb={1}>
              <MDTypography variant="button" color="warning" style={{ fontWeight: "bold" }}>
                {errors?.name?.message ||
                  errors?.email?.message ||
                  errors?.password?.message ||
                  errors?.confirmPassword?.message ||
                  errors?.terms?.message}
              </MDTypography>
            </MDBox>

            <MDBox mt={4} mb={1}>
              <MDButton
                variant="gradient"
                color="info"
                fullWidth
                onClick={handleSubmit(singIn, onError)}
              >
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
