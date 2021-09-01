import { decomposeColor, recomposeColor } from "@material-ui/core";

/**
 * Convert a color string to an rgba format
 */
export const convertColorToRgba = (color: string, alpha: number) => {
  if (color.toLowerCase().includes("hsl") || color.toLowerCase().includes("hsla")) {
    throw new Error("This function can't convert HSL or HSLA. Do not use this format");
  }

  const [r, g, b] = decomposeColor(color).values;

  return recomposeColor({
    type: "rgba",
    values: [r, g, b, alpha],
  });
};
