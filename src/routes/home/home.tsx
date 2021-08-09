import { PaletteMode, Theme, Typography, useMediaQuery, useTheme } from "@material-ui/core";

import { LoadingContainer, Page, useCurrentTheme } from "common";
import { homeDataToken, selectHomeData } from "store";
import { HomeSkeleton } from "./home-skeleton";
import { useRecoilValueLoadable } from "recoil";

/**
 * On small screen, with the moon on the dark theme background
 * There is some contrast issue with the text and the background
 * So we wanna display a readable color
 */
const getTextColor = ({
  currentTheme,
  isLessThan320Width,
  theme,
}: {
  currentTheme: PaletteMode;
  isLessThan320Width: boolean;
  theme: Theme;
}) => {
  if (currentTheme === "dark") {
    return isLessThan320Width ? "#aba6a6" : theme.palette.primary.main;
  }

  return theme.palette.primary.main;
};

export const Home = () => {
  /* Store */

  const homeLoadable = useRecoilValueLoadable(selectHomeData);
  const homeData = homeLoadable.valueMaybe();

  /* Vars */

  const theme = useTheme();
  const currentTheme = useCurrentTheme();
  const isLessThan320Width = useMediaQuery("(max-width:320px)");

  /* Derived Vars */

  const color = getTextColor({ currentTheme, isLessThan320Width, theme });

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
                fontSize: { xs: 40, md: 60 },
                textAlign: { xs: "center", md: "left" },
                color,
              }}
            >
              {data.name}
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: 20, sm: 25, md: 50 },
                textAlign: { xs: "center", md: "left" },
                color,
              }}
            >
              {data.job_title}
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: 20, sm: 25, md: 50 },
                textAlign: { xs: "center", md: "left" },
                color,
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
