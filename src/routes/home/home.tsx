import { PaletteMode, Theme, Typography, useMediaQuery, useTheme } from "@material-ui/core";

import { LoadingContainer, Page, useCurrentTheme } from "common";
import { HomeSkeleton } from "./home-skeleton";
import {
  fetchHomeData,
  selectHomeData,
  selectHomeDataErrorCount,
  selectIsLoadingHomeData,
  selectLocaleCode,
  useDispatch,
  useSelector,
} from "store";
import { useEffect, useCallback } from "react";

/**
 * On small screen, with the moon on the dark theme background
 * There is some contrast issue with the text and the background
 * So we wanna display a readable color
 */
const getTextColor = ({
  currentTheme,
  isIPhone6OrSmaller,
  theme,
}: {
  currentTheme: PaletteMode;
  isIPhone6OrSmaller: boolean;
  theme: Theme;
}) => {
  if (currentTheme === "dark") {
    return isIPhone6OrSmaller ? "#aba6a6" : theme.palette.primary.main;
  }

  return theme.palette.primary.main;
};

export const Home = () => {
  /* Store */

  const homeData = useSelector(selectHomeData);
  const localeCode = useSelector(selectLocaleCode);
  const isLoadingHomeData = useSelector(selectIsLoadingHomeData);
  const homeDataErrorCount = useSelector(selectHomeDataErrorCount);

  /* Vars */

  const theme = useTheme();
  const dispatch = useDispatch();
  const currentTheme = useCurrentTheme();
  const isIPhone6OrSmaller = useMediaQuery(theme.breakpoints.down("iphone6"));

  /* Derived Vars */

  const color = getTextColor({ currentTheme, isIPhone6OrSmaller, theme });

  /** Callbacks */

  const handleRetry = useCallback(() => {
    dispatch(fetchHomeData({ localeCode }));
  }, [dispatch, localeCode]);

  /* Effects */

  useEffect(() => {
    if (!homeData) {
      dispatch(fetchHomeData({ localeCode }));
    }
  }, [dispatch, homeData, localeCode]);

  /* Render */

  return (
    <LoadingContainer
      loader={<HomeSkeleton />}
      isLoading={isLoadingHomeData}
      data={homeData}
      errorCount={homeDataErrorCount}
      onRetry={handleRetry}
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
