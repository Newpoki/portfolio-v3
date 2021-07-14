import { ReactNode } from "react";
import { Grid } from "@material-ui/core";

interface IPageProps {
  children: ReactNode;
  sx?: object;
}

export const Page = ({ children, sx }: IPageProps) => {
  /* Render */

  return (
    <Grid item xs={12} sx={{ display: "flex", flexDirection: "column", flex: 1, ...sx }}>
      {children}
    </Grid>
  );
};
