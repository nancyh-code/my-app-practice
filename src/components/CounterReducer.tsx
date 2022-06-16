import React, { useReducer } from 'react';

const initialState = {
  counter: 10,
};

type ActionTimer =
  | { type: 'increase' }
  | { type: 'decrease' }
  | { type: 'custom'; payload: number };

const timerReducer = (state: typeof initialState, action: ActionTimer) => {
  switch (action.type) {
    case 'increase':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'decrease':
      return {
        ...state,
        counter: state.counter - 1,
      };
    case 'custom':
      return {
        ...state,
        counter: action.payload,
      };

    default:
      return state;
  }
};

const CounterReducer = () => {
  const [counterState, dispatch] = useReducer(timerReducer, initialState);

  return (
    <>
      <h2>Counter: {counterState.counter}</h2>
      <button
        className='btn btn btn-outline-primary'
        onClick={() => dispatch({ type: 'increase' })}
      >
        +1
      </button>
      <button
        className='btn btn btn-outline-primary mx-3'
        onClick={() => dispatch({ type: 'decrease' })}
      >
        -1
      </button>
      <button
        className='btn btn btn-outline-danger mx-3'
        onClick={() => dispatch({ type: 'custom', payload: 100 })}
      >
        100
      </button>
    </>
  );
};

export default CounterReducer;
