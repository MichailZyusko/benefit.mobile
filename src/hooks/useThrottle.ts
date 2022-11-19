import React, { useEffect } from 'react';

export default function useThrottleValue<T>(value: T, delay: number = 500) {
  const [throttleValue, setThrottleValue] = React.useState<T>(value);
  const throttling = React.useRef(false);

  useEffect(() => {
    if (throttling.current === false) {
      setThrottleValue(value);
      throttling.current = true;
      setTimeout(() => {
        if (throttling?.current) {
          throttling.current = false;
        }
      }, delay);
    }
  }, [value, delay]);

  return throttleValue;
}
