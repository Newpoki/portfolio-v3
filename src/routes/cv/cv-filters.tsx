import { Box, ToggleButton, ToggleButtonGroup, useMediaQuery, useTheme } from "@material-ui/core";
import { MouseEvent, useCallback } from "react";
import { useRecoilState } from "recoil";
import { cvFilterAtom } from "store";
import { CvTimelineIcon } from "./cv-timeline-icon";
import {
  AssignmentInd as AssignmentIndIcon,
  DownloadForOffline as DownloadForOfflineIcon,
} from "@material-ui/icons";

export const CvFilters = () => {
  /* Store */

  const [selectedCvFilter, setSelectedCvFilter] = useRecoilState(cvFilterAtom);

  /* Vars */

  const theme = useTheme();
  const isUnderSm = useMediaQuery(theme.breakpoints.down("sm"));

  /* Callbacks */

  const handleFilterChange = useCallback(
    (evt: MouseEvent<HTMLElement>, value: "all" | "work" | "diploma" | "pdf") => {
      if (value === "all") {
        setSelectedCvFilter(undefined);
      } else if (value === "pdf") {
        window.open(`${process.env.PUBLIC_URL}/cv-jason-savelli.pdf`);
      } else {
        setSelectedCvFilter(value);
      }
    },
    [setSelectedCvFilter]
  );

  /* Render */

  return (
    <Box
      display="flex"
      width="100%"
      maxWidth="600px"
      justifyContent="center"
      sx={{
        height: { xs: 28, sm: 48 },
        margin: `0 auto ${theme.spacing(3)}`,
      }}
    >
      <ToggleButtonGroup
        value={selectedCvFilter ?? "all"}
        exclusive
        onChange={handleFilterChange}
        aria-label="Filtre les données affichées dans le CV"
        sx={{ backgroundColor: theme.palette.background.paper }}
        size="small"
      >
        <ToggleButton value="all" size="small">
          {!isUnderSm && <AssignmentIndIcon sx={{ mr: 1 }} />}
          Tout
        </ToggleButton>
        <ToggleButton value="work" size="small">
          {!isUnderSm && <CvTimelineIcon type="work" sx={{ mr: 1 }} />}
          <span>Experiences</span>
        </ToggleButton>
        <ToggleButton value="diploma" size="small">
          {!isUnderSm && <CvTimelineIcon type="diploma" sx={{ mr: 1 }} />}
          <span>Diplomes</span>
        </ToggleButton>

        <ToggleButton value="pdf" size="small">
          {!isUnderSm && <DownloadForOfflineIcon sx={{ mr: 1 }} />}
          <span>as PDF</span>
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};
