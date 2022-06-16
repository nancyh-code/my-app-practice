import { useState } from 'react';
import Timer from './Timer';

// type Props = {}

const TimerFather = () => {
  const [milliseconds, setMilliseconds] = useState(1000);
  return (
    <div>
      <small>Milliseconds {milliseconds}</small>
      <br />
      <button
        className='btn btn-outline-success my-2'
        onClick={() => setMilliseconds(1000)}
      >
        1000
      </button>
      <button
        className='btn btn-outline-success my-2 mx-2'
        onClick={() => setMilliseconds(2000)}
      >
        2000
      </button>
      <Timer milliseconds={milliseconds} />
    </div>
  );
};

export default TimerFather;
