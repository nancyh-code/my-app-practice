import CountDownTimer from './components/CountDownTimer';
import Counter from './components/Counter';
import CounterReducer from './components/CounterReducer';
import Form from './components/Form';
import Form2 from './components/Form2';
import TimerFather from './components/TimerFather';
import Users from './components/Users';

function App() {
  return (
    <>
      <h1>React + TS</h1>
      <hr />
      <h2>useState</h2>
      <Counter />
      <Users />
      <hr />
      <h2>useEffect -UseRef</h2>
      <TimerFather />
      <hr />
      <h2>useReducer</h2>
      <CounterReducer />
      <hr />
      {/* <CountDownTimer hours={1} minutes={2} seconds={59} /> */}
      <h2>Count down</h2>
      <CountDownTimer minutes={1} seconds={59} />
      <hr />
      <h2>Custom Hooks</h2>
      <Form />
      <hr />
      <Form2 />
    </>
  );
}

export default App;
