import { Box, ToggleButton, ToggleButtonGroup, useMediaQuery, useTheme } from "@material-ui/core";
import { MouseEvent, useCallback } from "react";
import { AssignmentInd as AssignmentIndIcon, DownloadForOffline as DownloadForOfflineIcon } from "@material-ui/icons";

import { useSelector, selectCvFilter, useDispatch, fetchCvData, selectLocaleCode } from "~store";
import { CvTimelineIcon } from "./cv-timeline-icon";

export const CvFilters = () => {
  /* Store */

  const selectedCvFilter = useSelector(selectCvFilter);
  const localeCode = useSelector(selectLocaleCode);

  /* Vars */

  const theme = useTheme();
  const dispatch = useDispatch();
  const isUnderSm = useMediaQuery(theme.breakpoints.down("sm"));

  /* Callbacks */

  const handleFilterChange = useCallback(
    (evt: MouseEvent<HTMLElement>, filter: "all" | "work" | "diploma" | "pdf") => {
      if (filter === "all") {
        dispatch(fetchCvData({ localeCode, order: "DESC", cvTypeFilter: undefined }));
      } else if (filter === "pdf") {
        window.open(`${process.env.PUBLIC_URL}/cv-jason-savelli.pdf`);
      } else {
        dispatch(fetchCvData({ localeCode, order: "DESC", cvTypeFilter: filter }));
      }
    },
    [dispatch, localeCode]
  );

  /* Render */

  return (
    <Box
      display="flex"
      width="100%"
      maxWidth="600px"
      sx={{
        height: { xs: 38, sm: 48 },
        justifyContent: {
          xs: "flex-start",
          md: "center",
        },
        m: {
          xs: theme.spacing(0, 1.25),
          md: theme.spacing(0, "auto"),
        },
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
