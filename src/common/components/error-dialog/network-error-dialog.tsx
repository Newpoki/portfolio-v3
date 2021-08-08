import { Button, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

export const NetworkErrorDialog = () => {
  /* Vars */

  const { t } = useTranslation("ERROR");

  /* Callbacks */

  /**
   * Redirect to the linkedin profil
   */
  const handleDialogClose = useCallback(() => {
    window.location.href = "https://www.linkedin.com/in/jason-savelli/";
  }, []);

  /* Render */

  return (
    <>
      <DialogTitle sx={{ textAlign: "center" }}>
        <div>{t("ERROR:DIALOG.NETWORK_ERROR.TITLE")}</div>
        <div>{t("ERROR:DIALOG.NETWORK_ERROR.SUBTITLE")}</div>
      </DialogTitle>
      <DialogContent sx={{ textAlign: "center" }}>
        <div style={{ marginBottom: 8 }}>
          {t("ERROR:DIALOG.NETWORK_ERROR.CONTENT.TELL_ME_MORE")}
        </div>
        <div>{t("ERROR:DIALOG.NETWORK_ERROR.CONTENT.EMAIL")}</div>
        <img
          src={`${process.env.PUBLIC_URL}/images/bg-network-error.svg`}
          alt={t("ERROR:DIALOG.NETWORK_ERROR.IMAGE.ALT_TEXT")}
        />
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <Button color="primary" variant="contained" onClick={handleDialogClose}>
          {t("ERROR:DIALOG.NETWORK_ERROR.REDIRECT_BUTTON")}
        </Button>
      </DialogActions>
    </>
  );
};
