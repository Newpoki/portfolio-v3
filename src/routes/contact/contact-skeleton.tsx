import { Skeleton, Typography } from "@material-ui/core";

import { Page } from "~common";

export const ContactSkeleton = () => {
  /* Render */

  return (
    <Page sx={{ p: 4, justifyContent: "center" }}>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: 25, sm: 40, md: 50 },
          textAlign: "center",
          mb: 1,
        }}
      >
        <Skeleton
          sx={{
            width: {
              xs: 256,
              sm: 430,
              md: 500,
            },
            margin: "0 auto",
          }}
        />
      </Typography>

      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: 25, sm: 40, md: 50 },
          textAlign: "center",
        }}
      >
        <Skeleton
          sx={{
            width: {
              xs: 250,
              sm: 280,
              md: 320,
            },
            margin: "0 auto",
          }}
        />
      </Typography>
    </Page>
  );
};
