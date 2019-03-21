import { useState, useMemo, useEffect } from "react";

const useMatchMedia = mq => {
  const mql = useMemo(() => matchMedia(mq), [mq]);
  const [matches, setMatch] = useState(mql.matches);

  useEffect(() => {
    const listener = e => setMatch(e.matches);
    mql.addListener(listener);

    return () => mql.removeListener(listener);
  }, [mq]);

  return matches;
};

export default useMatchMedia;
