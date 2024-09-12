import { useMemo, useState, useEffect } from "react";

export const useMediaQuery = (query) => {
  const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
  const [match, setMatch] = useState(mediaQuery.matches);

  useEffect(() => {
    const onChange = () => setMatch(mediaQuery.matches);
    mediaQuery.addEventListener("change", onChange);

    return () => mediaQuery.removeEventListener("change", onChange);
  }, [mediaQuery]);

  return match;
};

const useMediaQueries = () => {
  const isMobile = useMediaQuery("(max-width: 576px)");
  const isTablet = useMediaQuery("(max-width: 768px) and (min-width: 577px)");
  const isLaptop = useMediaQuery("(max-width: 992px) and (min-width: 769px)");
  const isDesktop = useMediaQuery("(max-width: 1200px) and (min-width: 993px)");
  const isLargeDesktop = useMediaQuery("(min-width: 1201px)");

  return { isMobile, isTablet, isLaptop, isDesktop, isLargeDesktop };
};

export default useMediaQueries;
