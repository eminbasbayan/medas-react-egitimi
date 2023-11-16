import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

function Counter() {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const { increment, decrement, increase, toggleCounter } = counterActions;
  const dispatch = useDispatch();

  function incrementHandler() {
    dispatch(increment());
  }
  function increaseHandler() {
    dispatch(increase({ amount: 5 }));
  }

  function decrementHandler() {
    dispatch(decrement());
  }

  function toggleCounterHandler() {
    dispatch(toggleCounter());
  }

  return (
    <div>
      <button className="p-3 bg-blue-400 text-white" onClick={incrementHandler}>
        Increment
      </button>
      <button className="p-3 bg-blue-400 text-white" onClick={increaseHandler}>
        Increase by 5
      </button>
      <button
        className="p-3 bg-blue-400 text-white"
        onClick={toggleCounterHandler}
      >
        Toggle Counter
      </button>
      {showCounter && <span className="mx-2">{counter}</span>}
      <button className="p-3 bg-red-400 text-white" onClick={decrementHandler}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
