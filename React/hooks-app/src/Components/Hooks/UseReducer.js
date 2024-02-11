import React, { useReducer } from 'react';

const initialValue = { count: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case "Increment":
            return { count: state.count + 1 };
        case "Decrement":
            return { count: state.count - 1 };
        default:
            return state;
    }
}

function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialValue)
    const handleDecrement = () => {
        dispatch({ type: "Decrement" })
    }
    const handleIncreament = () => {
        dispatch({ type: "Increment" })
    }
    return (
        <div>
            {state.count}
            <button onClick={handleIncreament}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default UseReducer;
