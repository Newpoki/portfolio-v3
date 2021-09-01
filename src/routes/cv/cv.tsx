import { Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { Timeline, TimelineConnector, TimelineSeparator } from "@material-ui/lab";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { teal } from "@material-ui/core/colors";
import { TFunction } from "i18next";
import { useEffect, useCallback } from "react";

import { ILocaleCode, LoadingContainer, Markdown, Page } from "~common";
import {
  fetchCvData,
  selectCvData,
  selectCvDataErrorCount,
  selectCvFilter,
  selectIsLoadingCvData,
  selectLocaleCode,
  useDispatch,
  useSelector,
} from "~store";
import { CvTimeLineDot } from "./cv-timeline-dot";
import { CvSkeleton } from "./cv-skeleton";
import { CvTimelineItem } from "./cv-timeline-item";
import { CvTimelineContent } from "./cv-timeline-content";
import { CvFilters } from "./cv-filters";

interface IFormatDate {
  startedAt: string;
  endedAt: string | undefined;
  localeCode: ILocaleCode;
  t: TFunction;
}

export const formatDate = ({ startedAt, endedAt, localeCode, t }: IFormatDate) => {
  const format = localeCode === "fr-FR" ? "DD/MM/YYYY" : "MM/DD/YYYY";

  const formatedStart = dayjs(startedAt).format(format);
  const formatedEnd = endedAt ? dayjs(endedAt).format(format) : t("~common:TODAY");

  return `${formatedStart} → ${formatedEnd}`;
};

export const Cv = () => {
  /* Store */

  const cvData = useSelector(selectCvData);
  const selectedCvFilter = useSelector(selectCvFilter);
  const cvDataErrorCount = useSelector(selectCvDataErrorCount);
  const isLoadingCvData = useSelector(selectIsLoadingCvData);
  const localeCode = useSelector(selectLocaleCode);

  /* Vars */

  const theme = useTheme();
  const dispatch = useDispatch();
  const { t } = useTranslation("~common");
  const isUnderMd = useMediaQuery(theme.breakpoints.down("md"));
  const isIPhone6OrSmaller = useMediaQuery(theme.breakpoints.down("iphone6"));

  /* Callbacks */

  const handleRetry = useCallback(() => {
    dispatch(fetchCvData({ localeCode, order: "DESC", cvTypeFilter: selectedCvFilter }));
  }, [dispatch, localeCode, selectedCvFilter]);

  /* Effects */

  /** Fetch the cv data */
  useEffect(() => {
    dispatch(fetchCvData({ localeCode, order: "DESC", cvTypeFilter: undefined }));
  }, [dispatch, localeCode]);

  /* Render */

  return (
    <Page sx={{ padding: { xs: 0, sm: 2, md: 5 } }}>
      <CvFilters />
      <LoadingContainer
        data={cvData}
        loader={<CvSkeleton isUnderMd={isUnderMd} />}
        isLoading={isLoadingCvData}
        errorCount={cvDataErrorCount}
        onRetry={handleRetry}
      >
        {({ data }) => {
          return (
            <Timeline position={isUnderMd ? "right" : "alternate"} sx={{ pl: { xs: 0, md: 0.75 } }}>
              {data.map((cvExperience) => {
                return (
                  <CvTimelineItem key={cvExperience.title}>
                    <TimelineSeparator>
                      <CvTimeLineDot type={cvExperience.type} />
                      <TimelineConnector sx={{ backgroundColor: theme.palette.background.paper }} />
                    </TimelineSeparator>
                    <CvTimelineContent>
                      <Typography
                        component="span"
                        sx={{ fontWeight: theme.typography.fontWeightBold, display: "block" }}
                      >
                        {cvExperience.title}
                      </Typography>

                      <Typography
                        component="span"
                        color="secondary"
                        sx={{ marginBottom: 2, fontWeight: theme.typography.fontWeightBold }}
                      >
                        {`${cvExperience.place.city}, ${cvExperience.place.country}`}
                      </Typography>

                      <Typography component="span" sx={{ marginBottom: 3 }}>
                        <Markdown>{cvExperience.content}</Markdown>
                      </Typography>

                      <Typography
                        component="span"
                        sx={{
                          color: teal[500],
                          fontWeight: theme.typography.fontWeightMedium,
                          fontSize: isIPhone6OrSmaller ? 14 : 16,
                        }}
                      >
                        {formatDate({
                          startedAt: cvExperience.startedAt,
                          endedAt: cvExperience.endedAt,
                          localeCode,
                          t,
                        })}
                      </Typography>
                    </CvTimelineContent>
                  </CvTimelineItem>
                );
              })}
            </Timeline>
          );
        }}
      </LoadingContainer>
    </Page>
  );
};
