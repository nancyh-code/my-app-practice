import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  console.log('🚀 ~ file: Counter.tsx ~ line 5 ~ Counter ~ counter', counter);

  const increase = (numbers: any): void => {
    setCounter(counter + numbers);
  };

  return (
    <div className='mt-3'>
      <h3>Counter:</h3>
      <span>Valor: {counter}</span>
      <br />
      <button
        className='btn btn-outline-primary mt-4 '
        onClick={() => increase(1)}
      >
        {' '}
        +1
      </button>
      <button
        className='btn btn-outline-primary mt-4 mx-3'
        onClick={() => increase(2)}
      >
        {' '}
        +2
      </button>
      <button
        className='btn btn-outline-danger mt-4 mx-2'
        onClick={() => setCounter(0)}
      >
        {' '}
        Reset
      </button>
    </div>
  );
};

export default Counter;
