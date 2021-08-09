import { PaletteMode, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { LoadingContainer, Page, useCurrentTheme } from "common";
import { useRecoilValueLoadable } from "recoil";
import { contactDataToken, selectContactData } from "store";
import { Theme } from "@material-ui/core";

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

  const contactLoadable = useRecoilValueLoadable(selectContactData);
  const contactData = contactLoadable.valueMaybe();

  /* Vars */

  const theme = useTheme();
  const currentTheme = useCurrentTheme();
  const isIPhone6OrSmaller = useMediaQuery("(max-width:320px)");

  /* Derived Vars */

  const color = getTextColor({ currentTheme, isIPhone6OrSmaller, theme });

  /* Render */

  return (
    <LoadingContainer
      data={contactData}
      loadables={[contactLoadable]}
      loader={<div>loading contact</div>}
      token={contactDataToken}
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
