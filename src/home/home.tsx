import { Typography } from "@material-ui/core";
import { useEffect } from "react";

import { Page, useAppDispatch, useAppSelector } from "common";
import { getHomeData, selectCurrentLocaleCode } from "store";
import { selectHomeData, selectIsLoadingHomeData } from "store";
import { HomeSkeleton } from "./home-skeleton";

export const Home = () => {
  /* Store */

  const homeData = useAppSelector(selectHomeData);
  const isLoadingHomeData = useAppSelector(selectIsLoadingHomeData);
  const currentLocaleCode = useAppSelector(selectCurrentLocaleCode);

  /* Vars */

  const dispatch = useAppDispatch();

  /* Effects */

  useEffect(() => {
    dispatch(getHomeData({ locale: currentLocaleCode }));
  }, [currentLocaleCode, dispatch]);

  /* Render */

  if (isLoadingHomeData || !homeData) {
    return <HomeSkeleton />;
  }

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
          fontSize: { xs: 40, md: 60 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {homeData.name}
      </Typography>

      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: 25, md: 50 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {homeData.job_title}
      </Typography>

      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: 25, md: 50 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {homeData.job_libraries}
      </Typography>
    </Page>
  );
};
