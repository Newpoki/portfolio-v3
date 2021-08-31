import { Skeleton, Typography } from "@material-ui/core";

import { Page } from "~common";

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
        }}
      >
        <Skeleton
          sx={{
            width: "50%",
            maxWidth: 500,
            display: "inline-flex",
          }}
        />
      </Typography>

      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: 20, md: 50 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Skeleton
          sx={{
            width: "60%",
            maxWidth: 800,
            display: "inline-flex",
          }}
        />
      </Typography>

      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: 20, md: 50 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Skeleton
          sx={{
            width: "60%",
            maxWidth: 800,
            display: "inline-flex",
          }}
        />
      </Typography>
    </Page>
  );
};
