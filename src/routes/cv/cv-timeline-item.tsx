import { TimelineItem } from "@material-ui/lab";
import { SxProps } from "@material-ui/system";
import { Theme } from "@material-ui/core";
import { ReactNode } from "react-markdown";

interface ICvTimelineItemProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
}

export const CvTimelineItem = ({ children, sx }: ICvTimelineItemProps) => {
  return (
    <TimelineItem
      sx={{
        ":before": { display: { xs: "none", md: "block" } },
        "& :nth-of-type(even).MuiTimelineContent-root": { textAlign: "left" },
        ...sx,
      }}
    >
      {children}
    </TimelineItem>
  );
};
