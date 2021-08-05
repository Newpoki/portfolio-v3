import { Button, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import { Replay as ResetIcon } from "@material-ui/icons";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { RecoilState, useRecoilState } from "recoil";

import { ISelectorToken } from "store";

interface ITemporaryNetworkErrorDialogProps {
  token: RecoilState<ISelectorToken>;
}

export const TemporaryNetworkErrorDialog = ({ token }: ITemporaryNetworkErrorDialogProps) => {
  /* Store */

  const { t } = useTranslation("ERROR");
  const [selectorToken, setSelectorToken] = useRecoilState(token);

  /* Callbacks */

  /**
   * Update the given token. It will re-run the selector subscribed to this token and so, refresh the data
   */
  const handleRetry = useCallback(() => {
    setSelectorToken({
      ...selectorToken,
      attempt: selectorToken.attempt + 1,
      value: selectorToken.value + 1,
    });
  }, [selectorToken, setSelectorToken]);

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
        <Button color="primary" variant="contained" onClick={handleRetry} startIcon={<ResetIcon />}>
          {selectorToken.attempt === 0 &&
            t("ERROR:DIALOG.TEMPORARY_NETWORK_ERROR.RETRY.ATTEMPT.NONE")}
          {selectorToken.attempt === 1 &&
            t("ERROR:DIALOG.TEMPORARY_NETWORK_ERROR.RETRY.ATTEMPT.FIRST")}
          {selectorToken.attempt === 2 &&
            t("ERROR:DIALOG.TEMPORARY_NETWORK_ERROR.RETRY.ATTEMPT.SECOND")}
        </Button>
      </DialogActions>
    </>
  );
};
