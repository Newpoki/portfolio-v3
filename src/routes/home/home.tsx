import { Typography } from "@material-ui/core";

import { LoadingContainer, Page } from "common";
import { homeDataToken, selectHomeData } from "store";
import { HomeSkeleton } from "./home-skeleton";
import { useRecoilValueLoadable } from "recoil";

export const Home = () => {
  /* Store */

  const homeLoadable = useRecoilValueLoadable(selectHomeData);
  const homeData = homeLoadable.valueMaybe();

  /* Render */

  return (
    <LoadingContainer
      loadables={[homeLoadable]}
      loader={<HomeSkeleton />}
      data={homeData}
      token={homeDataToken}
    >
      {({ data }) => {
        return (
          <Page sx={{ p: 5, justifyContent: { xs: "center" } }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: 40, sm: 40, md: 60 },
                textAlign: { xs: "center", md: "left" },
                color: "#aba6a6",
              }}
            >
              {data.name}
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: 20, sm: 25, md: 50 },
                textAlign: { xs: "center", md: "left" },
                color: "#aba6a6",
              }}
            >
              {data.job_title}
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: 20, sm: 25, md: 50 },
                textAlign: { xs: "center", md: "left" },
                color: "#aba6a6",
              }}
            >
              {data.job_libraries}
            </Typography>
          </Page>
        );
      }}
    </LoadingContainer>
  );
};
