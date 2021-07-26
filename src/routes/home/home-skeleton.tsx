import { Skeleton, Typography } from "@material-ui/core";
import { Page } from "common";

export const HomeSkeleton = () => {
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
          width: 500,
        }}
      >
        <Skeleton />
      </Typography>

      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: 20, md: 50 },
          textAlign: { xs: "center", md: "left" },
          width: 800,
        }}
      >
        <Skeleton />
      </Typography>

      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: 20, md: 50 },
          textAlign: { xs: "center", md: "left" },
          width: 800,
        }}
      >
        <Skeleton />
      </Typography>
    </Page>
  );
};
