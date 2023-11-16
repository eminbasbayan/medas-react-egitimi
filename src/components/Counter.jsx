import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  function incrementHandler() {
    dispatch({ type: "INCREMENT" });
  }
  function increaseHandler() {
    dispatch({ type: "INCREASE", amount: 5 });
  }

  function decrementHandler() {
    dispatch({ type: "DECREMENT" });
  }

  function toggleCounterHandler() {
    dispatch({ type: "TOGGLE" });
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