import { AppBar, Toolbar, IconButton, Drawer, useMediaQuery } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { useTranslation } from "react-i18next";
import { useTheme } from "@material-ui/core/styles";

import { MenuLinks } from "./menu-links";
import { useCallback } from "react";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { drawerAtom } from "store";

export const Menu = () => {
  /* Store */

  const [isDrawerOpen, toggleDrawer] = useRecoilState(drawerAtom);

  /* Vars */

  const theme = useTheme();
  const { t } = useTranslation("MENU");
  const isUnderMd = useMediaQuery(theme.breakpoints.down("md"));
  const isLessThan320Width = useMediaQuery("(max-width:320px)");

  /* Callbacks */

  const handleDrawerToggle = useCallback(
    (isOpen: boolean) => () => {
      toggleDrawer(isOpen);
    },
    [toggleDrawer]
  );

  /* Effects */

  /**
   * Close the drawer if it's open and trigger a breakpoint where its not displayed
   */
  useEffect(() => {
    if (!isUnderMd && isDrawerOpen) {
      toggleDrawer(false);
    }
  }, [isUnderMd, isDrawerOpen, toggleDrawer]);

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
        <MenuIcon
          sx={{ height: isLessThan320Width ? 36 : 48, width: isLessThan320Width ? 36 : 48 }}
        />
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
