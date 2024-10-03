import React, { useEffect, useState } from "react";
import axios from "axios";
import UserContextEx from "./UserContextEx";

export const UserContext = React.createContext("con");

function DataFetch() {
  const [post, setPost] = useState<any>({});
  const [list, setLists] = useState<any>([]);
  const [idFromButtonClick, seIdFromButtonClick] = useState<any>(1);
  const [id, setId] = useState<any>(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [idFromButtonClick]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        console.log(res);
        setLists(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    seIdFromButtonClick(id);
  };

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        submit
      </button>
      <div>{post.title}</div>
      {
        <ul>
          {list.map((list: any) => (
            <li key={list.id}>
              {list.title},{list.userId}
            </li>
          ))}
        </ul>
      }
      <div>
        <UserContext.Provider value="techouts">
          <UserContextEx />
        </UserContext.Provider>
      </div>
    </div>
  );
}

export default DataFetch;
