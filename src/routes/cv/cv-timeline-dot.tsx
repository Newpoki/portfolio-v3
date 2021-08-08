import { TimelineDot } from "@material-ui/lab";
import { ICvData } from "store";

import { SxProps, Theme } from "@material-ui/system";
import { useTheme } from "@material-ui/core";
import { CvTimelineIcon } from "./cv-timeline-icon";

export interface ICvTimeLineDotProps {
  type: ICvData["type"] | "loading";
  sx?: SxProps<Theme>;
}

export const CvTimeLineDot = ({ type, sx = {} }: ICvTimeLineDotProps) => {
  /* Vars */

  const theme = useTheme();

  /* Render */

  return (
    <TimelineDot
      sx={{
        m: 0,
        ml: 2,
        mr: 2,
        backgroundColor: theme.palette.background.paper,
        ...sx,
      }}
    >
      <CvTimelineIcon type={type} />
    </TimelineDot>
  );
};
