import { Typography } from "@material-ui/core";
import { Page } from "common";

export const Home = () => {
  /* Render */

  return (
    <Page
      sx={{
        padding: 5,
        justifyContent: { xs: "center" },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: 30, md: 60 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        Jason Savelli
      </Typography>

      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: 20, md: 50 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        Développeur web Front-End
      </Typography>

      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: 20, md: 50 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        React / Redux (with love)
      </Typography>
    </Page>
  );
};
