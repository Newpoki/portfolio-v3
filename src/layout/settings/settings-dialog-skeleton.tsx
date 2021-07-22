import {
  Dialog,
  DialogContent,
  DialogTitle,
  Skeleton,
  ToggleButtonGroup,
  Typography,
} from "@material-ui/core";

interface ISettingsDialogSkeletonProps {
  isDisplayed: boolean;
}

export const SettingsDialogSkeleton = ({ isDisplayed }: ISettingsDialogSkeletonProps) => {
  return (
    <Dialog
      open={isDisplayed}
      aria-labelledby="settings-dialog"
      aria-describedby="allow-user-to-change-theme-and-language"
      color="primary"
      PaperProps={{
        sx: {
          minWidth: 300,
        },
      }}
    >
      <DialogTitle>
        <Skeleton sx={{ width: 100 }} />
      </DialogTitle>
      <DialogContent>
        <Typography sx={{ marginBottom: 1, width: 170 }}>
          <Skeleton />
        </Typography>

        <ToggleButtonGroup sx={{ width: "100%", height: 48, marginBottom: 3 }}>
          <Skeleton sx={{ width: "33%", height: "100%" }} variant="rectangular" />
          <Skeleton sx={{ width: "33%", height: "100%" }} variant="rectangular" />
          <Skeleton sx={{ width: "33%", height: "100%" }} variant="rectangular" />
        </ToggleButtonGroup>

        <Typography sx={{ marginBottom: 1, width: 170 }}>
          <Skeleton />
        </Typography>

        <Skeleton variant="rectangular" sx={{ width: "100%", height: 56 }} />
      </DialogContent>
    </Dialog>
  );
};
