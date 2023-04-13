import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import MDButton from "components/MDButton";
import { useState } from "react";
// Data

// Dashboard components

export default function Settings() {
  const url = "https://api.fastinvitation.com/api/Etsy/getEtsyOauthLink";

  const integrationUrl = "https://api.fastinvitation.com/api/Etsy/IntegrationControl";

  const [authLink, setAuthLink] = useState(null);
  const [integrationOk, setIntegrationOk] = useState(false);

  const checkIntegration = (res) => {
    setTimeout(async () => {
      await fetch(integrationUrl);
      res(true);
    }, 500);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <MDBox py={3}>
        <Grid item xs={12} md={6} lg={8}>
          <MDButton
            variant="text"
            onClick={async () => {
              if (!authLink) {
                const res = await (await fetch(url)).text();
                setAuthLink(res);
                window.open(res);
              }
              setAuthLink(null);
              checkIntegration();

              const integrationInterval = setInterval(async () => {
                const res = new Promise(checkIntegration);
                if (res) {
                  setIntegrationOk(res);
                  clearInterval(integrationInterval);
                }
              }, 500);
            }}
          >
            <DefaultInfoCard
              color={integrationOk ? "success" : "error"}
              icon={integrationOk ? "vpn_key" : "vpn_key_off"}
              title="Etsy"
              description={integrationOk ? "Connect Etsy Accounts" : "Etsy Accounts Connected"}
            />
          </MDButton>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}
