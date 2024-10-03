import React, { useEffect, useState } from "react";

const LifeCycleA: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("inisde the LifeCycle UseEffect");
  }, [count]);
  return (
    <div>
      <h2 className="align:centre">{count}</h2>
      <button
        type="button"
        className="btn"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        {" "}
        increment
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        decrememnt
      </button>
      <button type="button" className="btn" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
};

export default LifeCycleA;
