import { AppBar, Toolbar, IconButton, Drawer, useMediaQuery } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { useTranslation } from "react-i18next";
import { MenuLinks } from "./menu-links";
import { selectIsDrawerOpen, toggleDrawer } from "store";
import { useAppDispatch, useAppSelector } from "common";
import { useCallback } from "react";
import { useTheme } from "@material-ui/core/styles";
import { useEffect } from "react";

export const Menu = () => {
  /* Store */

  const isDrawerOpen = useAppSelector(selectIsDrawerOpen);

  /* Vars */

  const theme = useTheme();
  const { t } = useTranslation("MENU");
  const isUnderSm = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useAppDispatch();

  /* Callbacks */

  const handleDrawerToggle = useCallback(
    (isOpen: boolean) => () => {
      dispatch(toggleDrawer({ isOpen }));
    },
    [dispatch]
  );

  /* Effects */

  /**
   * Close the drawer if it's open and trigger a breakpoint where its not displayed
   */
  useEffect(() => {
    if (!isUnderSm && isDrawerOpen) {
      dispatch(toggleDrawer({ isOpen: false }));
    }
  }, [dispatch, isUnderSm, isDrawerOpen]);

  /* Render */

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{
        flexDirection: "row",
        justifyContent: {
          xs: "inherit",
          sm: "center",
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
            sm: "none",
          },
        }}
      >
        <MenuIcon sx={{ height: 48, width: 48 }} />
      </IconButton>

      <Toolbar
        sx={{
          justifyContent: "space-between",
          width: 600,
          display: {
            xs: "none",
            sm: "flex",
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
          display: { sm: "none" },
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
