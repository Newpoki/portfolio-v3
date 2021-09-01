import { Box, Button, Typography } from "@material-ui/core";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

import { Page } from "~common";

const NotFound = () => {
  /* Vars */

  const history = useHistory();
  const { t } = useTranslation("COMMON");

  /* Callbacks */

  const handleHomeRedirection = useCallback(() => {
    history.push("/");
  }, [history]);

  /* Render */
  return (
    <Page sx={{ p: 4, justifyContent: "center" }}>
      <Helmet>
        <title>{t("COMMON:PAGE.NOT_FOUND.TITLE")} - Portfolio</title>
      </Helmet>
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        {t("COMMON:PAGE.NOT_FOUND.TITLE")}
      </Typography>

      <Typography variant="h2" sx={{ textAlign: "center", mt: 3 }}>
        ¯\_(ツ)_/¯
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Button color="primary" variant="contained" onClick={handleHomeRedirection} sx={{ display: "flex" }}>
          {t("COMMON:PAGE.NOT_FOUND.BUTTON.TEXT")}
        </Button>
      </Box>
    </Page>
  );
};

export default NotFound;
