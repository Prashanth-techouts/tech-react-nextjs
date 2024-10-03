import React, { useReducer } from "react";

const initialState = 0;

const reduser = (state: any, action: any) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function UserReducerEX() {
  const [count, dispatch] = useReducer(reduser, initialState);

  return (
    <div>
      <div>Count-{count}</div>
      <button
        className="text-white bg-blue-700
         hover:bg-blue-800
          focus:ring-4
           focus:ring-blue-300
            font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
            dark:bg-blue-600 
            dark:hover:bg-blue-700 
            focus:outline-none
             dark:focus:ring-blue-800"
        onClick={() => dispatch("increment")}
      >
        increment
      </button>
      <button
        className="text-white bg-blue-700
         hover:bg-blue-800
          focus:ring-4
           focus:ring-blue-300
            font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
            dark:bg-blue-600 
            dark:hover:bg-blue-700 
            focus:outline-none
             dark:focus:ring-blue-800"
        onClick={() => dispatch("decrement")}
      >
        decrement
      </button>
      <button
        className="text-white bg-blue-700
         hover:bg-blue-800
          focus:ring-4
           focus:ring-blue-300
            font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
            dark:bg-blue-600 
            dark:hover:bg-blue-700 
            focus:outline-none
             dark:focus:ring-blue-800"
        onClick={() => dispatch("reset")}
      >
        reset
      </button>
    </div>
  );
}

export default UserReducerEX;
