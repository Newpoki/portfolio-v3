import { TimelineDot } from "@material-ui/lab";
import { ICvData } from "store";
import {
  WorkOutline as WorkOutlineIcon,
  ChildFriendlyOutlined as ChildFriendlyOutlinedIcon,
  CardMembership as CardMembershipIcon,
} from "@material-ui/icons";
import { SxProps, Theme } from "@material-ui/system";

interface ICvTimeLineDotProps {
  type: ICvData["type"];
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
  }
};

export const CvTimeLineDot = ({ type, sx = {} }: ICvTimeLineDotProps) => {
  /* Vars */

  const Icon = getIcon(type);

  /* Render */

  return <TimelineDot sx={sx}>{Icon}</TimelineDot>;
};
