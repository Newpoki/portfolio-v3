import { Skeleton, TimelineDot } from "@material-ui/lab";
import { ICvData } from "store";
import {
  WorkOutline as WorkOutlineIcon,
  ChildFriendlyOutlined as ChildFriendlyOutlinedIcon,
  CardMembership as CardMembershipIcon,
} from "@material-ui/icons";
import { SxProps, Theme } from "@material-ui/system";
import { Typography } from "@material-ui/core";

interface ICvTimeLineDotProps {
  type: ICvData["type"] | "loading";
  sx?: SxProps<Theme>;
}

const getIcon = (type: ICvTimeLineDotProps["type"]) => {
  switch (type) {
    case "work":
      return <WorkOutlineIcon color="primary" />;
    case "birth":
      return <ChildFriendlyOutlinedIcon color="primary" />;
    case "diploma":
      return <CardMembershipIcon color="primary" />;
    case "loading":
      return (
        <Typography color="primary">
          <Skeleton variant="circular" width={24} height={24} />;
        </Typography>
      );
  }
};

export const CvTimeLineDot = ({ type, sx = {} }: ICvTimeLineDotProps) => {
  /* Vars */

  const Icon = getIcon(type);

  /* Render */

  return (
    <TimelineDot
      sx={{
        m: 0,
        ml: 2,
        mr: 2,
        ...sx,
      }}
    >
      {Icon}
    </TimelineDot>
  );
};
