import { Button, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import { Replay as ResetIcon } from "@material-ui/icons";
import { useTranslation } from "react-i18next";

interface ITemporaryNetworkErrorDialogProps {
  onRetry: () => void;
  errorCount: number;
}

export const TemporaryNetworkErrorDialog = ({
  onRetry,
  errorCount,
}: ITemporaryNetworkErrorDialogProps) => {
  /* Store */

  const { t } = useTranslation("ERROR");

  /* Render */

  return (
    <>
      <DialogTitle sx={{ textAlign: "center" }}>
        <div>{t("ERROR:DIALOG.TEMPORARY_NETWORK_ERROR.TITLE")}</div>
        <div>{t("ERROR:DIALOG.TEMPORARY_NETWORK_ERROR.SUBTITLE")}</div>
      </DialogTitle>
      <DialogContent>
        <img
          src={`${process.env.PUBLIC_URL}/images/bg-temporary-network-error.svg`}
          width="100%"
          alt={t("ERROR:DIALOG.TEMPORARY_NETWORK_ERROR.IMAGE.ALT_TEXT")}
        />
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <Button color="primary" variant="contained" onClick={onRetry} startIcon={<ResetIcon />}>
          {errorCount === 1 && t("ERROR:DIALOG.TEMPORARY_NETWORK_ERROR.RETRY.ATTEMPT.NONE")}
          {errorCount === 2 && t("ERROR:DIALOG.TEMPORARY_NETWORK_ERROR.RETRY.ATTEMPT.FIRST")}
          {errorCount === 3 && t("ERROR:DIALOG.TEMPORARY_NETWORK_ERROR.RETRY.ATTEMPT.SECOND")}
        </Button>
      </DialogActions>
    </>
  );
};
