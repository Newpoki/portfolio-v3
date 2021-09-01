import { PaletteMode, Typography, useMediaQuery, useTheme, Theme } from "@material-ui/core";
import { useCallback, useEffect } from "react";

import { LoadingContainer, Page, useCurrentTheme } from "~common";
import {
  selectContactData,
  selectContactDataErrorCount,
  selectIsLoadingContactData,
  selectLocaleCode,
  useDispatch,
  useSelector,
  fetchContactData,
} from "~store";

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

export const Contact = () => {
  /* Store */

  const contactData = useSelector(selectContactData);
  const contactDataErrorCount = useSelector(selectContactDataErrorCount);
  const localeCode = useSelector(selectLocaleCode);
  const isLoadingContactData = useSelector(selectIsLoadingContactData);

  /* Vars */

  const theme = useTheme();
  const dispatch = useDispatch();
  const currentTheme = useCurrentTheme();
  const isIPhone6OrSmaller = useMediaQuery("(max-width:320px)");

  /* Derived Vars */

  const color = getTextColor({ currentTheme, isIPhone6OrSmaller, theme });

  /* Callbacks */

  const handleRetry = useCallback(() => {
    dispatch(fetchContactData({ localeCode }));
  }, [dispatch, localeCode]);

  /* Effects */

  useEffect(() => {
    dispatch(fetchContactData({ localeCode }));
  }, [dispatch, localeCode]);

  /* Render */

  return (
    <LoadingContainer
      data={contactData}
      onRetry={handleRetry}
      errorCount={contactDataErrorCount}
      isLoading={isLoadingContactData}
      loader={<div>loading contact</div>}
    >
      {({ data }) => {
        return (
          <Page sx={{ p: 4, justifyContent: "center" }}>
            <Typography
              component="a"
              variant="h2"
              href={`mailto:${data.email}`}
              sx={{
                fontSize: { xs: 25, sm: 40, md: 50 },
                textAlign: "center",
                color,
                mb: 1,
              }}
            >
              {data.email}
            </Typography>

            <Typography
              component="a"
              variant="h2"
              href={`tel:${data.contactNumber}`}
              sx={{
                fontSize: { xs: 25, sm: 40, md: 50 },
                textAlign: "center",
                color,
              }}
            >
              {data.contactNumber}
            </Typography>
          </Page>
        );
      }}
    </LoadingContainer>
  );
};
