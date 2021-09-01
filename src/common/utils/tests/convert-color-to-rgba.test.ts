import { convertColorToRgba } from "../convert-color-to-rgba";

describe("convert-color-to-rgba", () => {
  describe("the color is in hexadecimal tri digit formated", () => {
    const color = "#fff";
    const alpha = 0.5;

    it("should convert it to rgba", () => {
      const actual = convertColorToRgba(color, alpha);
      const expected = `rgba(255, 255, 255, ${alpha})`;

      expect(actual).toEqual(expected);
    });
  });

  describe("the color is in hexadecimal six digit formated", () => {
    const color = "#000000";
    const alpha = 0.7;

    it("should convert it to rgba", () => {
      const actual = convertColorToRgba(color, alpha);
      const expected = `rgba(0, 0, 0, ${alpha})`;

      expect(actual).toEqual(expected);
    });
  });

  describe("the color is rgb formated", () => {
    const color = "rgb(50, 100, 150)";
    const alpha = 0.7;

    it("should convert it to rgba", () => {
      const actual = convertColorToRgba(color, alpha);
      const expected = `rgba(50, 100, 150, ${alpha})`;

      expect(actual).toEqual(expected);
    });
  });

  describe("the color is HSL formated", () => {
    const color = "hsl(0, 0%, 50%)";
    const alpha = 0.1;

    it("should throw an error and return the initial color", () => {
      expect(() => {
        convertColorToRgba(color, alpha);
      }).toThrow("This function can't convert HSL or HSLA. Do not use this format");
    });
  });

  describe("the color is HSLA formated", () => {
    const color = "hsl(0, 0%, 50%, 2)";
    const alpha = 0.1;

    it("should throw an error and return the initial color", () => {
      expect(() => {
        convertColorToRgba(color, alpha);
      }).toThrow("This function can't convert HSL or HSLA. Do not use this format");
    });
  });

  describe("the color is already in rgba", () => {
    const color = "rgba(50, 100, 150, 1)";
    const alpha = 0.2;

    it("should only change the alpha parameter", () => {
      const actual = convertColorToRgba(color, alpha);
      const expected = `rgba(50, 100, 150, ${alpha})`;

      expect(actual).toEqual(expected);
    });
  });
});
