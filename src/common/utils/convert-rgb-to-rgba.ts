import { decomposeColor, recomposeColor } from "@material-ui/core";

export const convertRgbToRgba = (color: string, alpha: number) => {
  const decomposedColor = decomposeColor(color).values as [number, number, number];

  return recomposeColor({
    type: "rgba",
    values: [...decomposedColor, alpha],
  });
};
