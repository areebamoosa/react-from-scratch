import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../Features/CounterSlice";


const Counter = () => {

    const count = useSelector((state) => state.counter.value);

    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Count: {count}</h2>
            <div style={{ marginTop: "20px" }}>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())} style={{ marginLeft: "10px" }}>
                    Decrement
                </button>
                <button onClick={() => dispatch(reset())} style={{ marginLeft: "10px" }}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Counter;
