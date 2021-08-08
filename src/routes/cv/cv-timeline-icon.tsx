import { Skeleton, Typography } from "@material-ui/core";
import {
  WorkOutline as WorkOutlineIcon,
  ChildFriendlyOutlined as ChildFriendlyOutlinedIcon,
  CardMembership as CardMembershipIcon,
} from "@material-ui/icons";
import { SxProps, Theme } from "@material-ui/system";

import { ICvTimeLineDotProps } from "./cv-timeline-dot";

interface ICvTimelineIconProps {
  type: ICvTimeLineDotProps["type"];
  sx?: SxProps<Theme>;
}

export const CvTimelineIcon = ({ type, sx }: ICvTimelineIconProps) => {
  switch (type) {
    case "work":
      return <WorkOutlineIcon color="primary" sx={{ ...sx }} />;
    case "birth":
      return <ChildFriendlyOutlinedIcon color="primary" sx={{ ...sx }} />;
    case "diploma":
      return <CardMembershipIcon color="primary" sx={{ ...sx }} />;
    case "loading":
      return (
        <Typography color="primary" sx={{ ...sx }}>
          <Skeleton variant="circular" width={24} height={24} />
        </Typography>
      );
  }
};
