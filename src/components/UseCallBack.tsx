import React, { useState } from "react";

function UseCallBack() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
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
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

export default UseCallBack;
