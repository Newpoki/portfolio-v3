import { Typography } from "@material-ui/core";
import { useEffect } from "react";

import { Page, useAppDispatch, useAppSelector } from "common";
import { getHomeData } from "store";
import { selectHomeData, selectIsLoadingHomeData } from "store";
import { HomeSkeleton } from "./home-skeleton";

export const Home = () => {
  /* Store */

  const homeData = useAppSelector(selectHomeData);
  const isLoadingHomeData = useAppSelector(selectIsLoadingHomeData);

  /* Vars */

  const dispatch = useAppDispatch();

  /* Effects */

  useEffect(() => {
    dispatch(getHomeData());
  }, [dispatch]);

  /* Render */

  return (
    <Page
      sx={{
        padding: 5,
        justifyContent: { xs: "center" },
      }}
    >
      {isLoadingHomeData || !homeData ? (
        <HomeSkeleton />
      ) : (
        <>
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
        </>
      )}
    </Page>
  );
};
