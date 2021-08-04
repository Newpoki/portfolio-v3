import { Typography } from "@material-ui/core";

import { LoadingContainer, Page } from "common";
import { selectHomeData } from "store";
import { HomeSkeleton } from "./home-skeleton";
import { useRecoilValueLoadable } from "recoil";

export const Home = () => {
  /* Store */

  const homeLoadable = useRecoilValueLoadable(selectHomeData);
  const isLoadingHome = homeLoadable.state === "loading";
  const homeData = homeLoadable.valueMaybe();

  /* Render */

  return (
    <LoadingContainer isLoading={isLoadingHome} loader={<HomeSkeleton />} data={homeData}>
      {({ data }) => {
        return (
          <Page
            sx={{
              padding: 5,
              justifyContent: { xs: "center" },
            }}
          >
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: 40, md: 60 }, textAlign: { xs: "center", md: "left" } }}
            >
              {data.name}
            </Typography>

            <Typography
              variant="h2"
              sx={{ fontSize: { xs: 25, md: 50 }, textAlign: { xs: "center", md: "left" } }}
            >
              {data.job_title}
            </Typography>

            <Typography
              variant="h2"
              sx={{ fontSize: { xs: 25, md: 50 }, textAlign: { xs: "center", md: "left" } }}
            >
              {data.job_libraries}
            </Typography>
          </Page>
        );
      }}
    </LoadingContainer>
  );
};
