import React, { useState } from "react";

function UseStateArrayObj() {
  const [items, setItems] = useState<any>([]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10 + 1),
      },
    ]);
  };

  return (
    <div>
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
        onClick={addItem}
      >
        add
      </button>
      <ul>
        {items.map((item: any) => (
          <li key={item?.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseStateArrayObj;
