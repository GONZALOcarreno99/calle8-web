import { useEffect, useState } from "react";

export default function useCountUp(target, trigger, duration = 900) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = null;
    let raf;

    function step(ts) {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    }

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [trigger, target, duration]);

  return value;
}
