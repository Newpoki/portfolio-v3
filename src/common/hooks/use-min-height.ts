import { useEffect, useState } from "react";

import debounce from "lodash.debounce";

const debouncedSetMinHeight = debounce((height, setNewMinHeight) => {
  setNewMinHeight(height);
}, 200);

/**
 * Hook custom pour qui écoute le resize de la window pour récupérer la hauteur réelle de la fenêtre.
 * Permet de contourner la taille dynamique du header du navigateur sur mobile
 * Liens:
 * - https://chanind.github.io/javascript/2019/09/28/avoid-100vh-on-mobile-web.html
 * - https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
 * @return number
 */
export function useMinHeight(): number {
  const [minHeight, setMinHeight] = useState(window.innerHeight);
  useEffect(() => {
    function handleResize() {
      debouncedSetMinHeight(window.innerHeight, setMinHeight);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return minHeight;
}
