import { Typography, useMediaQuery, useTheme } from "@material-ui/core";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineSeparator,
} from "@material-ui/lab";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { teal } from "@material-ui/core/colors";
import { ILocaleCode, selectCvData, currentLocaleCodeAtom } from "store";
import { Markdown, Page } from "common";
import { CvTimeLineDot } from "./cv-timeline-dot";

interface IFormatDate {
  startedAt: string;
  endedAt: string | undefined;
  localeCode: ILocaleCode;
  t: (i18nKey: string) => string;
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
  const isLoadingCvData = cvDataLoadable.state === "loading";
  const cvData = cvDataLoadable.valueMaybe();
  const currentLocaleCode = useRecoilValue(currentLocaleCodeAtom);

  /* Vars */

  const theme = useTheme();
  const { t } = useTranslation("COMMON");
  const isUnderSm = useMediaQuery(theme.breakpoints.down("sm"));

  /* Effects */

  /* Render */

  if (isLoadingCvData || !cvData) {
    // TODO: Finir traductions CV
    // TODO: Add a skeleton loader with a render prop
    // TODO: Fullscreen settings dialog on mobile
    return <span>LOADING GROS NUB</span>;
  }

  return (
    <Page
      sx={{
        padding: { xs: 0, sm: 2, md: 5 },
      }}
    >
      <Timeline position={isUnderSm ? "right" : "alternate"}>
        {cvData.map((data) => {
          return (
            <TimelineItem
              sx={{
                ":before": {
                  display: { xs: "none", md: "block" },
                },
                "& :nth-of-type(even).MuiTimelineContent-root": {
                  textAlign: "left",
                },
              }}
            >
              <TimelineSeparator>
                <CvTimeLineDot type={data.type} sx={{ margin: 0, marginLeft: 2, marginRight: 2 }} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  backgroundColor: theme.palette.background.paper,
                  boxShadow: theme.shadows[5],
                  marginBottom: { xs: 3, md: 0 },
                }}
              >
                <Typography sx={{ fontWeight: theme.typography.fontWeightBold }}>
                  {data.title}
                </Typography>

                <Typography
                  color="secondary"
                  sx={{ marginBottom: 2, fontWeight: theme.typography.fontWeightBold }}
                >
                  {`${data.place.city}, ${data.place.country}`}
                </Typography>

                <Typography sx={{ marginBottom: 3 }}>
                  <Markdown>{data.content}</Markdown>
                </Typography>

                <Typography
                  sx={{ color: teal[500], fontWeight: theme.typography.fontWeightMedium }}
                >
                  {formatDate({
                    startedAt: data.startedAt,
                    endedAt: data.endedAt,
                    localeCode: currentLocaleCode,
                    t,
                  })}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </Page>
  );
};
