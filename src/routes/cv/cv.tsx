import { Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { Timeline, TimelineConnector, TimelineSeparator } from "@material-ui/lab";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { teal } from "@material-ui/core/colors";
import { ILocaleCode, selectCvData, currentLocaleCodeAtom, cvDataToken } from "store";
import { LoadingContainer, Markdown, Page } from "common";
import { CvTimeLineDot } from "./cv-timeline-dot";
import { CvSkeleton } from "./cv-skeleton";
import { CvTimelineItem } from "./cv-timeline-item";
import { CvTimelineContent } from "./cv-timeline-content";
import { TFunction } from "i18next";
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
  const formatedEnd = endedAt ? dayjs(endedAt).format(format) : t("COMMON:TODAY");

  return `${formatedStart} → ${formatedEnd}`;
};

export const Cv = () => {
  /* Store */

  const cvDataLoadable = useRecoilValueLoadable(selectCvData({ sort: "startedAt", order: "DESC" }));
  const cvData = cvDataLoadable.valueMaybe();
  const currentLocaleCode = useRecoilValue(currentLocaleCodeAtom);

  /* Vars */

  const theme = useTheme();
  const { t } = useTranslation("COMMON");
  const isUnderMd = useMediaQuery(theme.breakpoints.down("md"));

  /* Render */

  return (
    <Page sx={{ padding: { xs: 0, sm: 2, md: 5 } }}>
      <CvFilters />
      <LoadingContainer
        data={cvData}
        loadables={[cvDataLoadable]}
        token={cvDataToken}
        loader={<CvSkeleton isUnderMd={isUnderMd} />}
      >
        {({ data }) => {
          return (
            <Timeline position={isUnderMd ? "right" : "alternate"}>
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
                        sx={{ color: teal[500], fontWeight: theme.typography.fontWeightMedium }}
                      >
                        {formatDate({
                          startedAt: cvExperience.startedAt,
                          endedAt: cvExperience.endedAt,
                          localeCode: currentLocaleCode,
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
