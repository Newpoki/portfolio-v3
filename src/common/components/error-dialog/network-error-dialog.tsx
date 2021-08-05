import { Button, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

// TODO: Ajouter traductions manquantes pour les erreurs
// TODO: Mettre couleur fond icone timeline la même que pour le fond des content
// TODO: Ajouter système de filtres + dll CV pour la timeline
// TODO: Gérer l'affichage pour iphone 5s
// TODO: Voir skeleton home qui sontt rop grands en petit ecran

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
