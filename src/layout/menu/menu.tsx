import { AppBar, Toolbar, IconButton, Drawer, useMediaQuery, useTheme } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { useTranslation } from "react-i18next";
import { useCallback, useEffect } from "react";

import { changeIsDrawerOpen, selectIsDrawerOpen, useDispatch, useSelector } from "~store";
import { MenuLinks } from "./menu-links";

export const Menu = () => {
  /* Store */

  const isDrawerOpen = useSelector(selectIsDrawerOpen);

  /* Vars */

  const theme = useTheme();
  const { t } = useTranslation("MENU");
  const dispatch = useDispatch();
  const isUnderMd = useMediaQuery(theme.breakpoints.down("md"));
  const isIPhone6OrSmaller = useMediaQuery(theme.breakpoints.down("iphone6"));

  /* Callbacks */

  const handleDrawerToggle = useCallback(
    (isDrawerOpen: boolean) => () => {
      dispatch(changeIsDrawerOpen({ isDrawerOpen }));
    },
    [dispatch]
  );

  /* Effects */

  /**
   * Close the drawer if it's open and trigger a breakpoint where its not displayed
   */
  useEffect(() => {
    if (!isUnderMd && isDrawerOpen) {
      dispatch(changeIsDrawerOpen({ isDrawerOpen: false }));
    }
  }, [isUnderMd, isDrawerOpen, dispatch]);

  /* Render */

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{
        flexDirection: "row",
        justifyContent: {
          xs: "inherit",
          md: "center",
        },
      }}
    >
      <IconButton
        color="primary"
        aria-label={t("MENU:ICON.ARIA.LABEL")}
        aria-describedby={t("MENU:ICON.ARIA.DESCRIBED_BY")}
        edge="start"
        onClick={handleDrawerToggle(!isDrawerOpen)}
        sx={{
          marginRight: 2,
          display: {
            md: "none",
          },
        }}
      >
        <MenuIcon sx={{ height: isIPhone6OrSmaller ? 36 : 48, width: isIPhone6OrSmaller ? 36 : 48 }} />
      </IconButton>

      <Toolbar
        sx={{
          justifyContent: "space-between",
          width: 600,
          display: {
            xs: "none",
            md: "flex",
          },
        }}
      >
        <MenuLinks onClick={handleDrawerToggle(false)} />
      </Toolbar>

      <Drawer
        open={isDrawerOpen}
        onClose={handleDrawerToggle(false)}
        ModalProps={{
          // Better for SEO and performance on mobile -> https://next.material-ui.com/components/drawers/#keep-mounted
          keepMounted: true,
        }}
        sx={{
          display: { md: "none" },
        }}
        PaperProps={{
          sx: {
            padding: 4,
            justifyContent: "center",
          },
        }}
      >
        <MenuLinks onClick={handleDrawerToggle(false)} />
      </Drawer>
    </AppBar>
  );
};
