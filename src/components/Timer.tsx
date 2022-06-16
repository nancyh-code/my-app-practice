import { useEffect, useRef, useState } from 'react';

type TimerArgs = {
  milliseconds: number;
};

const Timer = ({ milliseconds }: TimerArgs) => {
  const [seconds, setSeconds] = useState(0);
  const ref = useRef<NodeJS.Timeout>();

  useEffect(() => {
    ref.current && clearInterval(ref.current);

    ref.current = setInterval(() => setSeconds((s) => s + 1), milliseconds);
  }, [milliseconds]);

  return (
    <>
      <h4>
        Timer: <small>{seconds}</small>
      </h4>
    </>
  );
};

export default Timer;
