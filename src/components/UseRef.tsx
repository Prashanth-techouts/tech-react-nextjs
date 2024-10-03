import React, { useRef, useState } from "react";

function UseRef() {
  const [count, setCount] = useState(0);
  const inputRef = useRef<any>();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus the input</button>
    </div>
  );
}
export default UseRef;
