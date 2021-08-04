import { useTheme } from "@material-ui/core";
import { TimelineContent } from "@material-ui/lab";
import { SxProps, Theme } from "@material-ui/system";
import { ReactNode } from "react-markdown";

interface ICvTimelineContentProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
}

export const CvTimelineContent = ({ children, sx }: ICvTimelineContentProps) => {
  /* Vars */

  const theme = useTheme();

  /* Render */

  return (
    <TimelineContent
      sx={{
        // Don't know why, but the content has no background when used with skeleton inside
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        marginBottom: { xs: 3, md: 0 },
        ...sx,
      }}
    >
      {children}
    </TimelineContent>
  );
};
