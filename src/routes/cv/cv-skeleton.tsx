import { Skeleton, Typography } from "@material-ui/core";
import { Timeline, TimelineConnector, TimelineSeparator } from "@material-ui/lab";

import { Page } from "common";
import { CvTimelineContent } from "./cv-timeline-content";
import { CvTimeLineDot } from "./cv-timeline-dot";
import { CvTimelineItem } from "./cv-timeline-item";

interface ICvSkeletonProps {
  isUnderMd: boolean;
}

export const CvSkeleton = ({ isUnderMd }: ICvSkeletonProps) => {
  /* Render */

  return (
    <Page sx={{ padding: { xs: 0, sm: 2, md: 5 } }}>
      <Timeline position={isUnderMd ? "right" : "alternate"} color="primary">
        {[...Array(6).keys()].map(() => {
          return (
            <CvTimelineItem>
              <TimelineSeparator>
                <CvTimeLineDot sx={{ width: 36, height: 36 }} type="loading" />
                <TimelineConnector />
              </TimelineSeparator>
              <CvTimelineContent>
                <Typography color="primary">
                  <Skeleton width={120} />
                </Typography>

                <Typography color="secondary" sx={{ marginBottom: 2 }}>
                  <Skeleton width={80} />
                </Typography>

                <Typography>
                  <Skeleton width="75%" sx={{ mb: 2 }} />
                  <Skeleton
                    height={250}
                    sx={{ mb: 1, borderRadius: "4px/6.7px" }}
                    variant="rectangular"
                  />
                  <Skeleton height={50} sx={{ mb: 2 }} />
                </Typography>

                <Typography>
                  <Skeleton width={250} />
                </Typography>
              </CvTimelineContent>
            </CvTimelineItem>
          );
        })}
      </Timeline>
    </Page>
  );
};
