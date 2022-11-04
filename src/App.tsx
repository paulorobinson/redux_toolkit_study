import './styles.css';

import { useDispatch, useSelector } from 'react-redux';
import {
  asyncIncrementAmount,
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
} from './redux/counter/slice';
import { RootState } from './redux/counter/store';

export const App = () => {
  const counter = useSelector((state: RootState) => state.counter);

  const dispatch = useDispatch();

  return (
    <main className="container">
      <h1>Redux Study (Toolkit)</h1>
      <p>{counter.value}</p>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
      <div>
        <button onClick={() => dispatch(decrementByAmount(10))}>
          decrementByAmount 10
        </button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          incrementByAmount 10
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(asyncIncrementAmount() as any)}>
          asyncIncrementAmount
        </button>
      </div>
    </main>
  );
};
