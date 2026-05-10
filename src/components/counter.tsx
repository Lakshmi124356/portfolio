import { useEffect, useState } from "react";

type CounterProps = {
  end: number;
  duration?: number;
  suffix?: string;
};

const Counter = ({
  end,
  duration = 4000,
  suffix = "",
}: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    // Total animation frames
    const totalFrames = duration / 50;

    // Increment value
    const increment = end / totalFrames;

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export default Counter;